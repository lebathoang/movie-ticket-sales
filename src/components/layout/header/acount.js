import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '~/assets/images/image.png';
import './account.scss';
import { faArrowRightFromBracket, faEarthAsia, faLandmark, faLanguage } from '@fortawesome/free-solid-svg-icons';

function Account() {
    return (
        <div className="outside">
            <div className="head-account">
                <img src={Logo} className="account-logo" />
            </div>
            <div className="main">
                <div className="main-label">
                    <h5>Rose</h5>
                    <a href="#">Rose1102@gmail.com</a>
                </div>
                <div className="main-item">
                    <FontAwesomeIcon icon={faLandmark} className="icon" />
                    <p>History</p>
                </div>
                <div className="main-item">
                    <FontAwesomeIcon icon={faEarthAsia} className="icon" />
                    <p>Language</p>
                </div>
                <div className="main-item">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className="icon" />
                    <p>Log out</p>
                </div>
            </div>
        </div>
    );
}

export default Account;
