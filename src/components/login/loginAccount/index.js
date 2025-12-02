import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAccount } from '~/store/reducers/user/action';

import { successful } from '~/store/reducers/auth/actions';
import './index.scss';

function LoginAccount() {
    const [users, setUsers] = useState([]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get('http://localhost:3000/users')
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.log('Error ', err);
            });

        if (error) {
            setError('');
        }
    }, [email, password]);
    // handle login
    const handleSubmit = () => {
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
            setEmailError('Password must be from 6 - 30 characters');
            check = false;
        }
        if (check) {
            // if (email == userMock.email) {
            //     dispatch(setAccount(userMock));
            // } else {
            //     setError('Email or password is incorrect');
            // }
        }
        dispatch(successful());
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
            <Link to="#">
                <p className="forgot-password">Forgot password ?</p>
            </Link>
            <p className="text-error">{error}</p>
            <div className="login-wrap-button">
                <button type="submit">Log in</button>
            </div>
        </form>
    );
}

export default LoginAccount;
