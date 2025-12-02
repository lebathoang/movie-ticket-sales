import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { successful } from '~/store/reducers/auth/actions';
import './index.scss';

function Register() {
    const [form, setForm] = useState({ fullname: '', email: '', password: '' });

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [capcha, setCapcha] = useState('102435');
    const [capchaValue, setCapchaValue] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [capchaError, setCapchaError] = useState('');

    const dispatch = useDispatch();
    // handle register
    const handleSubmit = (e) => {
        e.preventDefault();
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
        if (!password.length) {
            setPasswordError('Please enter your password');
            check = false;
        } else if (password.length < 6 || password.length > 30) {
            setPasswordError('Password must be from 6 - 30 characters');
            check = false;
        } else if (password !== confirmPassword) {
            setConfirmPasswordError('Confirm password is invalid');
            check = false;
        }
        if (!confirmPassword.length) {
            setConfirmPasswordError('Please enter your confirm password');
            check = false;
        }
        if (capchaValue !== capcha) {
            setCapchaError('Code capcha is invalid');
            check = false;
        }
        if (check) {
            axios
                .post('http://localhost:3000/users', form)
                .then((res) => alert('Đăng ký tài khoản thành công'))
                .catch((err) => console.log(err));
        }
        dispatch(successful());
    };
    // handle fullname
    const handleFullName = (event) => {
        const value = event.target.value;
        setForm({
            ...form,
            fullname: value,
        });
        setFullName(value);
        if (nameError) {
            setNameError('');
        }
    };
    // handle email
    const handleEmail = (event) => {
        const value = event.target.value;
        setForm({
            ...form,
            email: value,
        });
        setEmail(value);
        if (emailError) {
            setEmailError('');
        }
    };
    // handle password
    const handlePassword = (event) => {
        const value = event.target.value;
        setForm({
            ...form,
            password: value,
        });
        setPassword(value);
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
        <form onSubmit={handleSubmit}>
            <div className="login-wrap-input">
                <input
                    type="text"
                    className={nameError ? 'border-error' : ''}
                    placeholder="Fullname"
                    value={form.fullname}
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
                    value={form.email}
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
                        value={form.password}
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
                <input type="text" placeholder="Date Of Birth" />
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
            <div className="login-wrap-button">
                <button type="submit">Register</button>
            </div>
        </form>
    );
}

export default Register;
