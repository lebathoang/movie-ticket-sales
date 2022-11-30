import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { turnOff } from '~/store/reducers/auth/actions';
import { useDispatch } from 'react-redux';
import LoginAccount from './loginAccount';
import Register from './register';

function Login() {
    const [status, setStatus] = useState(true);
    const login = status ? 'actives' : '';
    const register = !status ? 'actives' : '';
    const dispatch = useDispatch();
    const handleRegisterPage = () => {
        setStatus(false);
    };
    const handleLoginPage = () => {
        setStatus(true);
    };
    const handleTurnOffLogin = () => {
        dispatch(turnOff());
    };

    return (
        <div className="login-wrap">
            <div className="login-first-content">
                <FontAwesomeIcon className="login-x-mark" icon={faXmark} onClick={handleTurnOffLogin} />
                <div className="login-title">
                    <div className="login-wrap-title">
                        <Link to="#" className={login} onClick={handleLoginPage}>
                            Log in
                        </Link>
                    </div>
                    <span>/</span>
                    <div className="login-wrap-title">
                        <Link to="#" className={register} onClick={handleRegisterPage}>
                            Register
                        </Link>
                    </div>
                </div>
                {status ? <LoginAccount /> : <Register />}
            </div>
        </div>
    );
}

export default Login;
