import { useState, useEffect } from 'react';

import Logo from '~/assets/images/logo.png';
import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';
import './index.scss';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [error, setError] = useState('');

    // handle login

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
        }

        if (!check) return;
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
    // handle confirm password
    const handleConfirmPasswordValue = (event) => {
        setConfirmPassword(event.target.value);
        if (confirmPasswordError) {
            setConfirmPasswordError('');
        }
    };

    return (
        <>
            <Header />
            <div className="forgot-password-wrap">
                <div className="forgot-password-content">
                    <form onSubmit={handleSubmit}>
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
                            <p className="text-error">{passwordError}</p>
                        </div>
                        <p className="text-error">{error}</p>
                        <div className="login-wrap-button">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div>
                    <img src={Logo} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ForgotPassword;
