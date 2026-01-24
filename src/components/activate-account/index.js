import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';
import Logo from '~/assets/images/logo.png';
import './index.scss';

function ActiveAccount() {
    const [resendEmail, setResendEmail] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [error, setError] = useState('');
    const [status, setStatus] = useState('empty');
    const [resendStatus, setResendStatus] = useState('idle');
    const [message, setMessage] = useState('');
    const [params] = useSearchParams();
    const token = params.get('token');
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            setStatus('error');
            return;
        }
        try {
            const decoded = jwtDecode(token);

            if (decoded.payload?.email) {
                setResendEmail(decoded.payload.email);
            }
            if (decoded.exp < Date.now() / 1000) {
                setStatus('expired');
            }
        } catch (err) {
            setStatus('error');
        }
    }, [token]);

    const handleResend = async () => {
        if (!resendEmail) {
            setResendStatus('error');
            setMessage('Activation link is invalid or already used');
            return;
        }
        try {
            setResendStatus('loading');
            await axios.post('http://localhost:3000/api/auth/resend-activation', { resendEmail });
            setResendStatus('success');
            setMessage('New activation link has been sent to your email');
        } catch (err) {
            const code = err.response?.data?.code;

            if (code === 'already_activated') {
                setResendStatus('activated');
                setMessage('Your account has already been activated. You can login now.');
            } else {
                setResendStatus('error');
                setMessage(err.response?.data?.message || 'Something went wrong');
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        var check = true;
        if (!email.length) {
            setEmailError('Please enter your email');
            check = false;
        } else if (!email.includes('@')) {
            setEmailError('Email address is invalid');
            check = false;
        }
        if (!password.length) {
            setPasswordError('Please enter your password');
            check = false;
        } else if (password.length < 6 || password.length > 30) {
            setPasswordError('Password must be from 6 - 30 characters');
            check = false;
        }

        if (!confirmPassword.length) {
            setConfirmPasswordError('Please enter your confirm Password');
            check = false;
        } else if (confirmPassword.length < 6 || confirmPassword.length > 30) {
            setConfirmPasswordError('confirm password must be from 6 - 30 characters');
            check = false;
        } else if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
            return;
        }

        if (!check) return;

        try {
            const decoded = jwtDecode(token);
            const userId = decoded.payload.userId;
            setStatus('loading');

            const res = await axios.post(
                `http://localhost:3000/api/auth/activate-account?userId=${userId}`,
                { email, password },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );

            if (res.data.success) {
                setStatus('success');

                setTimeout(() => {
                    navigate('/auth');
                }, 2000);
            } else {
                setStatus('error');
                setError(res.data.message);
            }
        } catch (error) {
            console.log('Token not exist');
        }
    };

    // handle email
    const handleEmailValue = (event) => {
        setEmail(event.target.value);
        if (emailError) {
            setEmailError('');
        }
    };
    // handle password
    const handlePasswordValue = (event) => {
        setPassword(event.target.value);
        if (passwordError) {
            setPasswordError('');
        }
    };

    const handleConfirmPasswordValue = (event) => {
        setConfirmPassword(event.target.value);
        if (confirmPasswordError) {
            setConfirmPasswordError('');
        }
    };

    return (
        <>
            <Header />
            <div className="active-account-wrap">
                <div className="active-account-content">
                    {status === 'expired' && (
                        <div className="activate-expired">
                            {resendStatus === 'activated' && (
                                <div className="success">
                                    <p className="message">Account already activated.</p>
                                    <button className="try_again">
                                        <Link to="/auth">Login</Link>
                                    </button>
                                </div>
                            )}
                            {resendStatus === 'idle' && (
                                <>
                                    <p className="message">Activation link has expired.</p>
                                    <div className="login-wrap-button">
                                        <button disabled={resendStatus === 'loading'} onClick={handleResend}>
                                            {resendStatus === 'loading' ? 'Sending...' : 'Resend activation link'}
                                        </button>
                                    </div>
                                </>
                            )}
                            {resendStatus === 'loading' && (
                                <div className="resend-animation">
                                    <div className="spinner"></div>
                                    <p className="message">Sending new activation link...</p>
                                </div>
                            )}
                            {resendStatus === 'success' && (
                                <div className="resend-animation success">
                                    <div className="checkmarks">✓</div>
                                    <p>{message}</p>
                                </div>
                            )}
                            {resendStatus === 'error' && (
                                <div className="resend-animation error">
                                    <p>{message}</p>
                                    <button className="try_again" onClick={handleResend}>
                                        Try again
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                    {status === 'loading' && (
                        <div className="activate-loading">
                            <div className="spinner" />
                            <p>Activating your account...</p>
                        </div>
                    )}

                    {status === 'success' && (
                        <div className="activate-success">
                            <div className="checkmark">✓</div>
                            <p>Account activated successfully!</p>
                            <p>Redirecting to login...</p>
                        </div>
                    )}

                    {status === 'empty' && (
                        <form onSubmit={handleSubmit}>
                            <h2 className="title">Activate Account</h2>
                            <div className="login-wrap-input">
                                <input
                                    type="email"
                                    className={emailError ? 'border-error' : ''}
                                    placeholder="Email"
                                    value={email}
                                    onChange={handleEmailValue}
                                />
                                <p className="text-error">{emailError}</p>
                            </div>
                            <div className="login-wrap-input">
                                <input
                                    className={passwordError ? 'border-error' : ''}
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={handlePasswordValue}
                                />
                                <p className="text-error">{passwordError}</p>
                            </div>
                            <div className="login-wrap-input">
                                <input
                                    className={confirmPasswordError ? 'border-error' : ''}
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordValue}
                                />
                                <p className="text-error">{confirmPasswordError}</p>
                            </div>
                            <p className="text-error">{error}</p>
                            <div className="login-wrap-button">
                                <button type="submit">Active</button>
                            </div>
                        </form>
                    )}

                    {status === 'error' && <p className="message">{error}</p>}
                </div>
                <div>
                    <img src={Logo} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ActiveAccount;
