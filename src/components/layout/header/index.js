import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Logo from '~/assets/images/logo.png';
import { PrimaryButton } from '~/components/button';
import { SixthButton } from '~/components/button';
import Account from './acount';
import CartShopping from '~/components/cart_shopping';
import { signIn } from '~/store/reducers/auth/actions';
import './index.scss';

function Header() {
    const loginSuccessful = useSelector((state) => state);
    const successful = loginSuccessful.auth;
    const countProduct = useSelector((state) => state);
    const product = countProduct.cart.ticket;
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
                                <Link to="/admin">
                                    <li>Admin</li>
                                </Link>
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
                            {successful.successful ? (
                                <div className="header-account-login">
                                    <img
                                        className="header-login-image"
                                        src="https://i.pinimg.com/736x/1f/1b/d2/1f1bd2958ed6c3134787e26fdf61bad7.jpg"
                                    />
                                    <DropdownButton
                                        id="dropdown-basic-button"
                                        title="Dropdown button"
                                        className="dropdown-button"
                                    >
                                        <Account />
                                    </DropdownButton>
                                </div>
                            ) : (
                                <PrimaryButton label={'Login'} onClick={handleLogin} />
                            )}
                            <SixthButton ticket={product.length} />
                            <DropdownButton title="">
                                <CartShopping />
                            </DropdownButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
