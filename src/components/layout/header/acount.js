import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faCaretUp, faEarthAsia, faLandmark } from '@fortawesome/free-solid-svg-icons';

import { logOut } from '~/store/reducers/auth/actions';
import './account.scss';

function Account() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logOut());
    };
    const getValue = useSelector((state) => state);
    const value = getValue.user;

    return (
        <div className="account-wrapper">
            <FontAwesomeIcon icon={faCaretUp} className="account-caret-up" />
            <div className="account-outside">
                <div className="account-head">
                    <img
                        src="https://i.pinimg.com/736x/1f/1b/d2/1f1bd2958ed6c3134787e26fdf61bad7.jpg"
                        className="account-logo"
                    />
                </div>
                <div className="account-main">
                    <div className="account-main-label">
                        <h5>{value.fullName}</h5>
                        <a href="#">{value.email}</a>
                    </div>
                    <div className="account-main-item">
                        <FontAwesomeIcon icon={faLandmark} className="account-icon" />
                        <p>History</p>
                    </div>
                    <div className="account-main-item">
                        <FontAwesomeIcon icon={faEarthAsia} className="account-icon" />
                        <p>Language</p>
                    </div>
                    <div className="account-main-item" onClick={handleLogout}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} className="account-icon" />
                        <p>Log out</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
