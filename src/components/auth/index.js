import { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '~/assets/images/logo.png';
import LoginAccount from './login';
import Header from '../layout/header';
import Footer from '../layout/footer';
import Register from './register';
import './index.scss';

function Auth() {
    const [status, setStatus] = useState(true);
    const login = status ? 'actives' : '';
    const register = !status ? 'actives' : '';
    const handleRegisterPage = () => {
        setStatus(false);
    };
    const handleLoginPage = () => {
        setStatus(true);
    };

    return (
        <>
            <Header />
            <div className="login-wrap">
                <div className="login-content">
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

                <div>
                    <img src={Logo} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Auth;
