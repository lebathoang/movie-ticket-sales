import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';

import { signIn } from '~/store/reducers/auth/actions';
import './index.scss';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const redirect = searchParams.get('redirect');
    console.log(redirect);

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

        if (!check) return;
        try {
            const res = await axios.post('http://localhost:3000/api/auth/login', {
                email,
                password,
            });

            localStorage.setItem('token', res.data.token);
            dispatch(signIn());
            if (redirect === '/checkout') {
                navigate('/checkout');
            } else {
                navigate('/');
            }
        } catch (err) {
            if (err.response?.status === 403) {
                setError('Your account has not been activated. Please check email to activate account.');
            } else if (err.response?.status === 401) {
                setError(err.response.data.message);
            } else {
                setError('Server error. Please try again later.');
            }
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

    return (
        <form onSubmit={handleSubmit}>
            <label className="title-account">
                Please log in before buying tickets to accumulate points, the opportunity to receive more incentives
                from Banana membership program.
            </label>
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
            <div className="wrap-link">
                <Link to="/forgot-password">
                    <p className="forgot-password">Forgot password ?</p>
                </Link>
            </div>
            <p className="text-error">{error}</p>
            <div className="login-wrap-button">
                <button type="submit">Log in</button>
            </div>
        </form>
    );
}

export default Login;
