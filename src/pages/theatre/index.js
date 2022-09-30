import './index.scss';
import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';
import { BuyTicket } from '~/components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faCouch } from '@fortawesome/free-solid-svg-icons';

function Theatre() {
    const arrayOne = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
    const arrayTwo = [];
    const arrayNumber = [];
    const row = () => {
        for (let i = 0; i <= 18; i++) {
            if (i != 0 && i < 10) {
                arrayTwo.push(i);
            } else if (i > 10) {
                arrayNumber.push(i);
            }
        }
    };
    row();
    return (
        <div>
            <Header />
            <img src="https://occ-0-32-1001.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcIWOaDzYa23tEYDdwQ5pV9eFmf8D7TqchgmbJ8UUL5vO3p4Xja9cBtrknGA9_8YDf7rRFfiPyMc7Zl_UcT3tnzFVy4RuCTsvKx1.jpg?r=34d" />
            <div className="main-theater">
                <div className="container">
                    <div className="row">
                        <div className="first-main">
                            <div className="col-6">
                                <h2>Kungfu Panda</h2>
                                <p>Program start time 19:30</p>
                                <h3>2D</h3>
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li>15:30</li>
                                    <li>17:00</li>
                                    <li className="time">19:30</li>
                                    <li>21:00</li>
                                    <li>22:30</li>
                                </ul>
                            </div>
                        </div>
                        <div className="second-main">
                            <div className="col-6">
                                <label>Choose a place</label>
                                <div className="wrap-place">
                                    <div className="place">
                                        <div className="place-items">
                                            <p>Row:</p>
                                            <span className="row-f">F</span>
                                        </div>
                                        <div className="place-items">
                                            <p>Columns:</p>
                                            <span>8</span>
                                        </div>
                                    </div>
                                    <div className="place">
                                        <div className="place-items">
                                            <p>A place:</p>
                                            <span>98</span>
                                        </div>
                                        <div className="place-items">
                                            <p>Price:</p>
                                            <span>40.000</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-place"></div>
                                <div className="wrap-text">
                                    <label>Choose a card</label>
                                    <a href="#">Link another card</a>
                                </div>
                                <div className="bank">
                                    <img src="https://www.sbv.gov.vn/webcenter/cs/groups/phongweb/documents/noidungtinh/c2j2/mdc3/~edisp/~export/SBVWEBAPP01SBV077333~12/420256.jpg" />
                                    <img src="https://chiasevaytien.com/pictures/images/12-2021/06/the-active-mbbank.jpg" />
                                    <FontAwesomeIcon className="icon-arrow" icon={faCircleArrowRight} />
                                </div>
                                <div className="buy-ticket">
                                    <button>-</button>
                                    <div>1</div>
                                    <button className="add">+</button>
                                    <BuyTicket className="ticket-buy" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="wrap-row-theatre">
                                    <div className="row-number">
                                        {arrayTwo.map((items, index) => (
                                            <span key={index}>{items}</span>
                                        ))}
                                        <span className="ten">10</span>
                                        {arrayNumber.map((items, index) => (
                                            <span className="two-digit-number" key={index}>
                                                {items}
                                            </span>
                                        ))}
                                    </div>
                                    {arrayOne.map((item, index) => (
                                        <div className="row-theatre" key={index}>
                                            <div className="text">
                                                <span>{item}</span>
                                            </div>
                                            <div className="seat">
                                                <FontAwesomeIcon className="dot" icon={faCouch}></FontAwesomeIcon>
                                                <FontAwesomeIcon className="dot" icon={faCouch}></FontAwesomeIcon>
                                                <FontAwesomeIcon className="dot" icon={faCouch}></FontAwesomeIcon>
                                                <FontAwesomeIcon className="dot" icon={faCouch}></FontAwesomeIcon>
                                                <FontAwesomeIcon className="dot" icon={faCouch}></FontAwesomeIcon>
                                                <FontAwesomeIcon className="dot" icon={faCouch}></FontAwesomeIcon>
                                                <FontAwesomeIcon className="dot" icon={faCouch}></FontAwesomeIcon>
                                                <FontAwesomeIcon className="dot" icon={faCouch}></FontAwesomeIcon>
                                                <FontAwesomeIcon className="dot" icon={faCouch}></FontAwesomeIcon>
                                                <FontAwesomeIcon className="dot" icon={faCouch}></FontAwesomeIcon>
                                                <FontAwesomeIcon className="dot" icon={faCouch}></FontAwesomeIcon>
                                                <FontAwesomeIcon className="dot" icon={faCouch}></FontAwesomeIcon>
                                                <FontAwesomeIcon className="dot" icon={faCouch}></FontAwesomeIcon>
                                                <FontAwesomeIcon className="dot" icon={faCouch}></FontAwesomeIcon>
                                                <FontAwesomeIcon className="dot" icon={faCouch}></FontAwesomeIcon>
                                                <FontAwesomeIcon className="dot" icon={faCouch}></FontAwesomeIcon>
                                                <FontAwesomeIcon className="dot" icon={faCouch}></FontAwesomeIcon>
                                                <FontAwesomeIcon className="dot" icon={faCouch}></FontAwesomeIcon>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="chair">
                                    <div className="empty-seat">
                                        <FontAwesomeIcon className="couch-empty-seat" icon={faCouch}></FontAwesomeIcon>
                                        <p>Vacancy</p>
                                    </div>
                                    <div className="booked">
                                        <FontAwesomeIcon className="red-couch" icon={faCouch}></FontAwesomeIcon>
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
