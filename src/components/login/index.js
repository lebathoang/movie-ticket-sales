import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { turnOff } from '~/store/reducers/auth/actions';

function Login() {
    const [status, setStatus] = useState(true);
    const login = status ? 'actives' : '';
    const register = !status ? 'actives' : '';
    const dispatch = useDispatch();
    const handleTurnOffLogin = () => {
        dispatch(turnOff());
    };
    const handleRegister = () => {
        setStatus(false);
    };
    const handleLoginPage = () => {
        setStatus(true);
    };
    return (
        <div className="login-wrap">
            <FontAwesomeIcon className="login-x-mark" icon={faXmark} onClick={handleTurnOffLogin} />
            <div className="login-title">
                <div className="login-wrap-title">
                    <Link to="#" className={login} onClick={handleLoginPage}>
                        Log in
                    </Link>
                </div>
                <span>/</span>
                <div className="login-wrap-title">
                    <Link to="#" className={register} onClick={handleRegister}>
                        Register
                    </Link>
                </div>
            </div>
            {status ? (
                <div>
                    <label>
                        Please log in before buying tickets to accumulate points, the opportunity to receive more
                        incentives from Banana membership program.
                    </label>
                    <div className="login-wrap-input">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="login-wrap-input">
                        <input type="password" placeholder="Password" />
                    </div>
                    <Link to="#">
                        <p>Forgot password ?</p>
                    </Link>
                    <div className="login-wrap-button">
                        <button type="button">Log in</button>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="login-wrap-input">
                        <input type="text" placeholder="Name" />
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
                        <input type="Email" placeholder="Email" />
                    </div>
                    <div className="login-d-flex">
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                    </div>
                    <div className="login-wrap-input">
                        <input type="text" placeholder="Date/Month/Year" />
                    </div>
                    <div className="login-d-flex">
                        <span>
                            <i>050323</i>
                        </span>
                        <FontAwesomeIcon className="login-loading" icon={faArrowRotateLeft} />
                        <input type="text" placeholder="Insert Code Capcha" />
                    </div>
                    <div className="login-policy">
                        <p>
                            Tôi đã đọc và đồng ý với <Link to="#">Chính Sách</Link> của chương trình
                        </p>
                    </div>
                    <div className="login-wrap-button">
                        <button type="button">Register</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
