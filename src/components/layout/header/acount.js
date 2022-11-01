import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '~/assets/images/image.png';
import './account.scss';
import { faArrowRightFromBracket, faEarthAsia, faLandmark, faLanguage } from '@fortawesome/free-solid-svg-icons';

function Account() {
    return (
        <div className="account-outside">
            <div className="account-head">
                <img src={Logo} className="account-logo" />
            </div>
            <div className="account-main">
                <div className="account-main-label">
                    <h5>Rose</h5>
                    <a href="#">Rose1102@gmail.com</a>
                </div>
                <div className="account-main-item">
                    <FontAwesomeIcon icon={faLandmark} className="account-icon" />
                    <p>History</p>
                </div>
                <div className="account-main-item">
                    <FontAwesomeIcon icon={faEarthAsia} className="account-icon" />
                    <p>Language</p>
                </div>
                <div className="account-main-item">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className="account-icon" />
                    <p>Log out</p>
                </div>
            </div>
        </div>
    );
}

export default Account;
