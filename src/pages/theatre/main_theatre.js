import { useState } from 'react';
import './index.scss';
import { FourthButton } from '~/components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch } from '@fortawesome/free-solid-svg-icons';

function SecondMainTheatre() {
    const [count, setCount] = useState(1);
    const [row, setRow] = useState('A');
    const [column, setColumn] = useState(1);
    const [place, setPlace] = useState(1);
    const y = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
    const x = [...Array(18).keys()];
    const booked = ['D9', 'C8', 'C10', 'B7', 'B11', 'C6', 'C12', 'D6', 'D12', 'E7', 'E11', 'F8', 'F10', 'G9'];
    const disabled = count == 1 ? 'disabled' : '';
    const [customerSeats, setCustomerSeats] = useState(['A1']);

    const handleLocation = (code, index) => {
        const char = code.split('');
        const last = char[2] == undefined ? '' : char[2];
        const column = char[1] + last;
        const place = column * (index + 1);
        setRow(char[0]);
        setColumn(column);
        setPlace(place);
        if (!booked.includes(code)) {
            setCustomerSeats([...customerSeats, code]);
            setCount(count + 1);
        }
        if (customerSeats.includes(code)) {
            setCustomerSeats(customerSeats.filter((item) => item != code));
            setCount(count - 1);
        }
    };
    const handleBuyTicket = () => {};

    return (
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
                                <span>{row}</span>
                            </div>
                            <div className="theatre-row-items">
                                <p>Column:</p>
                                <span>{column}</span>
                            </div>
                        </div>
                        <div className="theatre-row-one">
                            <div className="theatre-row-items">
                                <p>A place:</p>
                                <span>{place}</span>
                            </div>
                            <div className="theatre-row-items">
                                <p>Price:</p>
                                <span>50.000 VNĐ</span>
                            </div>
                        </div>
                    </div>
                    <div className="theatre-checkout">
                        <label>Checkout</label>
                    </div>
                    <div className="theatre-buy">
                        <div className="theatre-account-ticket">
                            <button type="button" disabled={disabled} onClick={() => setCount(count - 1)}>
                                -
                            </button>
                            <span>{count}</span>
                            <button type="button" onClick={() => setCount(count + 1)}>
                                +
                            </button>
                        </div>
                        <FourthButton label={'BuyTicket'} onClick={handleBuyTicket} />
                    </div>
                </div>
            </div>
            <div className="col-7">
                <table>
                    <tr>
                        <td></td>
                        {x.map((xx) => (
                            <td>{xx + 1}</td>
                        ))}
                    </tr>
                    {y.map((yy, index) => (
                        <>
                            <tr>
                                <td className="text">{yy}</td>
                                {x.map((xx) => {
                                    const code = `${yy}${xx + 1}`;
                                    return (
                                        <>
                                            <td>
                                                <FontAwesomeIcon
                                                    key={code}
                                                    onClick={() => handleLocation(code, index)}
                                                    className={
                                                        booked.includes(code)
                                                            ? 'booked'
                                                            : customerSeats.includes(code)
                                                            ? 'choose'
                                                            : 'none'
                                                    }
                                                    icon={faCouch}
                                                ></FontAwesomeIcon>
                                            </td>
                                        </>
                                    );
                                })}
                            </tr>
                        </>
                    ))}
                </table>
                <div className="theatre-chair">
                    <div className="theatre-chair-classification">
                        <FontAwesomeIcon icon={faCouch}></FontAwesomeIcon>
                        <p>Vacancy</p>
                    </div>
                    <div className="theatre-chair-classification">
                        <FontAwesomeIcon className="choose" icon={faCouch}></FontAwesomeIcon>
                        <p>You Choose</p>
                    </div>
                    <div className="theatre-chair-classification">
                        <FontAwesomeIcon className="booked" icon={faCouch}></FontAwesomeIcon>
                        <p>Already Booked</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecondMainTheatre;
