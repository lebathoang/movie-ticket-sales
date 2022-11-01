import { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import Logo from '~/assets/images/logo.png';
import Image from '~/assets/images/image.png';
import { PrimaryButton } from '~/components/button';
import Account from './acount';
import { Link } from 'react-router-dom';
import { signIn } from '~/store/reducers/auth/actions';
import { useDispatch } from 'react-redux';

function Header() {
    const [login, setLogin] = useState(false);
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(signIn());
    };

    return (
        <>
            <div className="header-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="header-head">
                            <Link to="/">
                                <img className="header-image" src={Logo} />
                            </Link>
                            <ul>
                                <Link to="/event">
                                    <li>Event</li>
                                </Link>
                                <Link to="/moviecorner">
                                    <li>Movie Corner</li>
                                </Link>
                                <Link to="/film">
                                    <li>Film</li>
                                </Link>
                            </ul>
                            <div className="header-search">
                                <input placeholder="Enter movie name ... " />
                                <FontAwesomeIcon className="header-icon" icon={faSearch} />
                            </div>
                            {login ? (
                                <div className="header-account-login">
                                    <img className="header-login-image" src={Image} />
                                    <Account />
                                </div>
                            ) : (
                                <PrimaryButton label={'Login'} onClick={handleLogin} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
