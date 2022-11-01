import './index.scss';
import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';
import { BuyTicket } from '~/components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faCouch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Theatre() {
    const arrayOne = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
    const arrayNumber = [];
    const row = () => {
        for (let i = 0; i <= 18; i++) {
            if (i !== 0) {
                arrayNumber.push(i);
            }
        }
    };
    row();
    return (
        <div>
            <Header />
            <img src="https://occ-0-32-1001.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcIWOaDzYa23tEYDdwQ5pV9eFmf8D7TqchgmbJ8UUL5vO3p4Xja9cBtrknGA9_8YDf7rRFfiPyMc7Zl_UcT3tnzFVy4RuCTsvKx1.jpg?r=34d" />
            <div className="theatre-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="theatre-first-main">
                            <div className="col-6">
                                <div className="theatre-title">
                                    <label>Kungfu Panda</label>
                                    <p>Movie premieres begin 19:00</p>
                                    <p>2D</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="theatre-wrap-time">
                                    <div className="theatre-items-button">
                                        <button type="button">16:00</button>
                                    </div>
                                    <div className="theatre-items-button">
                                        <button type="button">17:30</button>
                                    </div>
                                    <div className="theatre-items-button">
                                        <button type="button" className="happen">
                                            19:00
                                        </button>
                                    </div>
                                    <div className="theatre-items-button">
                                        <button type="button">21:30</button>
                                    </div>
                                    <div className="theatre-items-button">
                                        <button type="button">22:00</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="theatre-second-main">
                            <div className="col-5">
                                <div className="theatre-wrap-sidebar">
                                    <div className="theatre-choose-place">
                                        <label>Choose a place</label>
                                    </div>
                                    <div className="theatre-d-flex">
                                        <div className="theatre-row-one">
                                            <div className="theatre-row-items">
                                                <p>Row:</p>
                                                <span>E</span>
                                            </div>
                                            <div className="theatre-row-items">
                                                <p>Column:</p>
                                                <span>9</span>
                                            </div>
                                        </div>
                                        <div className="theatre-row-one">
                                            <div className="theatre-row-items">
                                                <p>A place:</p>
                                                <span>45</span>
                                            </div>
                                            <div className="theatre-row-items">
                                                <p>Price:</p>
                                                <span>40.000 VNĐ</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="theatre-choose-card">
                                        <div className="theatre-title-link">
                                            <label>Choose a card</label>
                                            <Link to="#">
                                                <p>Link another card</p>
                                            </Link>
                                        </div>
                                        <div className="theatre-bank">
                                            <FontAwesomeIcon className="theatre-angle hidden" icon={faAngleLeft} />
                                            <Link to="#">
                                                <img src="https://acb-win.com/wp-content/uploads/2022/02/15694.png" />
                                            </Link>
                                            <Link to="#">
                                                <img src="https://www.bidv.com.vn/wps/wcm/connect/9e5b09ac-8f3f-4e4c-81db-6343cdfdf9a5/BIDV+Smart.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-9e5b09ac-8f3f-4e4c-81db-6343cdfdf9a5-nMMo-w." />
                                            </Link>
                                            <Link to="#">
                                                <img src="https://www.agribank.com.vn/wcm/connect/23d1dc9b-1aec-462a-85ac-60d33178fc52/PLUS+SUCCESS+2019+-+CS6+%28day+dien%29-02.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-23d1dc9b-1aec-462a-85ac-60d33178fc52-ntsvv4K" />
                                            </Link>
                                            <FontAwesomeIcon className="theatre-angle" icon={faAngleRight} />
                                        </div>
                                    </div>
                                    <div className="theatre-buy">
                                        <div className="theatre-account-ticket">
                                            <button type="button">-</button>
                                            <span>1</span>
                                            <button type="button">+</button>
                                        </div>
                                        <BuyTicket />
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="theatre-wrap-seats">
                                    <div className="theatre-wrap-text">
                                        {arrayOne.map((item, index) => (
                                            <div className="theatre-column-text" key={index}>
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="theatre-row-number">
                                        {arrayNumber.map((items, index) => (
                                            <div className="theatre-column-theatre" key={index}>
                                                <div className="theatre-wrap-number">
                                                    <span>{items}</span>
                                                </div>
                                                <div className="theatre-seat">
                                                    <FontAwesomeIcon icon={faCouch}></FontAwesomeIcon>
                                                    <FontAwesomeIcon icon={faCouch}></FontAwesomeIcon>
                                                    <FontAwesomeIcon icon={faCouch}></FontAwesomeIcon>
                                                    <FontAwesomeIcon icon={faCouch}></FontAwesomeIcon>
                                                    <FontAwesomeIcon icon={faCouch}></FontAwesomeIcon>
                                                    <FontAwesomeIcon icon={faCouch}></FontAwesomeIcon>
                                                    <FontAwesomeIcon icon={faCouch}></FontAwesomeIcon>
                                                    <FontAwesomeIcon icon={faCouch}></FontAwesomeIcon>
                                                    <FontAwesomeIcon icon={faCouch}></FontAwesomeIcon>
                                                    <FontAwesomeIcon icon={faCouch}></FontAwesomeIcon>
                                                    <FontAwesomeIcon icon={faCouch}></FontAwesomeIcon>
                                                    <FontAwesomeIcon icon={faCouch}></FontAwesomeIcon>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="theatre-chair">
                                    <div className="theatre-chair-classification">
                                        <FontAwesomeIcon icon={faCouch}></FontAwesomeIcon>
                                        <p>Vacancy</p>
                                    </div>
                                    <div className="theatre-chair-classification">
                                        <FontAwesomeIcon className="booked" icon={faCouch}></FontAwesomeIcon>
                                        <p>Already Booked</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Theatre;
