import { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import Logo from '~/assets/images/logo.png';
import Image from '~/assets/images/image.png';
import LoginButton from '~/components/button';
import Account from './acount';

function Header() {
    const [login, setLogin] = useState(false);
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="head">
                            <img className="header-image" src={Logo} />
                            <ul>
                                <li>Detail</li>
                                <li>Theater</li>
                                <li>New</li>
                            </ul>
                            <div className="search">
                                <input placeholder="Enter movie name ... " />
                                <FontAwesomeIcon className="icon" icon={faSearch} />
                            </div>
                            {login ? (
                                <div className="account-login">
                                    <img className="login-image" src={Image} />
                                    <Account />
                                </div>
                            ) : (
                                <LoginButton />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
