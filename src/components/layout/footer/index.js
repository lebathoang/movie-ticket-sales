import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import {
    faSquareFacebook,
    faYoutube,
    faSquareInstagram,
    faApple,
    faGooglePlay,
} from '@fortawesome/free-brands-svg-icons';
import Logo from '~/assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

function Footer() {
    return (
        <div className="footer-wrap">
            <div className="container">
                <div className="row">
                    <div className="outside-box">
                        <div className="col-3">
                            <div className="content-box">
                                <h2>Introduce</h2>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon className="icon-angle" icon={faAngleDoubleRight} />
                                        <p>About us</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon-angle" icon={faAngleDoubleRight} />
                                        <p>Terms of use</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon-angle" icon={faAngleDoubleRight} />
                                        <p>Operating regulations</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon-angle" icon={faAngleDoubleRight} />
                                        <p>Privacy Policy</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="content-box">
                                <h2>Movie corner</h2>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon className="icon-angle" icon={faAngleDoubleRight} />
                                        <p>Movie genre</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon-angle" icon={faAngleDoubleRight} />
                                        <p>Movie commentary</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon-angle" icon={faAngleDoubleRight} />
                                        <p>Movie blog</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon-angle" icon={faAngleDoubleRight} />
                                        <p>Featured movies of the month</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="content-box">
                                <h2>Support</h2>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon className="icon-angle" icon={faAngleDoubleRight} />
                                        <p>Feedback</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon-angle" icon={faAngleDoubleRight} />
                                        <p>Sale & survice</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon-angle" icon={faAngleDoubleRight} />
                                        <p>Theater - fare</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon-angle" icon={faAngleDoubleRight} />
                                        <p>Recruit</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="content-box">
                                <h2>Connect GALAXY CINEMA</h2>
                                <div className="icon-box">
                                    <FontAwesomeIcon className="icon-facebook" icon={faSquareFacebook} />

                                    <FontAwesomeIcon className="icon-youtube" icon={faYoutube} />

                                    <FontAwesomeIcon className="icon-instagram" icon={faSquareInstagram} />
                                </div>
                            </div>
                            <div className="content-box">
                                <h2>DOWNLOAD APP</h2>
                                <div className="icon-box">
                                    <FontAwesomeIcon className="icon-download" icon={faApple} />

                                    <FontAwesomeIcon className="icon-download" icon={faGooglePlay} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border"></div>
            <div className="botton-footer">
                <div className="container">
                    <div className="row">
                        <div className="bottom">
                            <img className="footer-image" src={Logo} />
                            <p>
                                <i>
                                    Công Ty Cổ Phần Phim BANANA, Tầng 5, CGV Vincom Times City, Phố Minh Khai, Khu đô
                                    thị Times City, Vĩnh Tuy, Thanh Xuân, Hà Nội
                                </i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
