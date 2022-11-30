import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { successful } from '~/store/reducers/auth/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import userMock from '~/shared/mocks/user.json';
import './index.scss';
import { setAccount } from '~/store/reducers/user/action';

function Register() {
    const [fullName, setFullName] = useState('');
    const [nameError, setNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [capcha, setCapcha] = useState('102435');
    const [capchaValue, setCapchaValue] = useState('');
    const [capchaError, setCapchaError] = useState('');
    const dispatch = useDispatch();
    // handle register
    const handleRegister = () => {
        console.log('aaaaaa');
        var check = true;
        if (!fullName.length) {
            setNameError('Please enter your name');
            check = false;
        }
        if (!email.length) {
            setEmailError('Please enter your email');
            check = false;
        } else if (!email.includes('@')) {
            setEmailError('Email address is invalid');
            check = false;
        }
        console.log('eeeeeeee');
        if (!password.length) {
            setPasswordError('Please enter your password');
        } else if (password.length < 6 || password.length > 30) {
            setPasswordError('Password must be from 6 - 30 characters');
        } else if (password !== confirmPassword) {
            setConfirmPasswordError('Confirm password is invalid');
        }
        if (!confirmPassword.length) {
            setConfirmPasswordError('Please enter your confirm password');
        }
        if (capchaValue !== capcha) {
            setCapchaError('Code capcha is invalid');
        }
        if (check) {
            if (email === userMock.email && fullName === userMock.fullName) {
                dispatch(setAccount(userMock));
            } else {
                setError('email or fullname is incorrect');
            }
        }
        dispatch(successful());
    };
    // handle fullname
    const handleFullName = (event) => {
        setFullName(event.target.value);
        if (nameError) {
            setNameError('');
        }
    };
    // handle email
    const handleEmail = (event) => {
        setEmail(event.target.value);
        if (emailError) {
            setEmailError('');
        }
    };
    // handle password
    const handlePassword = (event) => {
        setPassword(event.target.value);
        setPasswordError('');
    };
    // handle confirm password
    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
        setConfirmPasswordError('');
    };
    // handle capcha
    const handleCapcha = () => {
        setCapcha(Math.floor(Math.random() * 999999));
    };
    const handleCapchaValue = (event) => {
        setCapchaValue(event.target.value);
        setCapchaError('');
    };
    return (
        <div>
            <div className="login-wrap-input">
                <input
                    type="text"
                    className={nameError ? 'border-error' : ''}
                    placeholder="Full name"
                    value={fullName}
                    onChange={handleFullName}
                />
                <p className="text-error">{nameError}</p>
            </div>
            <div className="login-d-flex">
                <input type="tel" placeholder="Phone Number" />
                <select>
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div className="login-wrap-input">
                <input
                    type="Email"
                    className={emailError ? 'border-error' : ''}
                    placeholder="Email"
                    value={email}
                    onChange={handleEmail}
                />
                <p className="text-error">{emailError}</p>
            </div>
            <div className="login-d-flex">
                <div className="login-flex-password">
                    <input
                        type="password"
                        className={passwordError ? 'border-error' : ''}
                        placeholder="Password"
                        value={password}
                        onChange={handlePassword}
                    />
                    <p className="text-error">{passwordError}</p>
                </div>
                <div className="login-flex-password">
                    <input
                        type="password"
                        className={confirmPasswordError ? 'border-error' : ''}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleConfirmPassword}
                    />
                    <p className="text-error">{confirmPasswordError}</p>
                </div>
            </div>
            <div className="login-wrap-input">
                <input type="text" placeholder="Date/Month/Year" />
            </div>
            <div className="login-d-flex">
                <span>
                    <i>{capcha}</i>
                </span>
                <FontAwesomeIcon className="login-loading" icon={faArrowRotateLeft} onClick={handleCapcha} />
                <div>
                    <input
                        type="text"
                        placeholder="Insert Code Capcha"
                        value={capchaValue}
                        onChange={handleCapchaValue}
                    />
                    <p className="text-error">{capchaError}</p>
                </div>
            </div>
            <div className="login-policy">
                <p>
                    Tôi đã đọc và đồng ý với <Link to="#">Chính Sách</Link> của chương trình
                </p>
            </div>
            <p className="text-error">{error}</p>
            <div className="login-wrap-button">
                <button type="button" onClick={handleRegister}>
                    Register
                </button>
            </div>
        </div>
    );
}

export default Register;
