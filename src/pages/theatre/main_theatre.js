import { useState } from 'react';
import './index.scss';
import { FourthButton } from '~/components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addTicket, removeTicket } from '~/store/reducers/cart/actions';
import { Link } from 'react-router-dom';

function SecondMainTheatre({ film }) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const booked = cart.booked;
    const customerSeats = cart.customerSeats;
    const selectedSeats = cart.ticket.filter((e) => e.Id == film.Id);
    const selectedCode = selectedSeats.map((item) => item.code);
    const [place, setPlace] = useState(null);
    const [row, setRow] = useState(null);
    const [column, setColumn] = useState(null);
    const y = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
    const x = [...Array(18).keys()];

    const handleLocation = (code) => {
        if (!selectedCode.includes(code)) {
            dispatch(addTicket(code, film));
        } else {
            dispatch(removeTicket(code, film));
        }
        setRow(code[0]);
        setColumn(code.slice(1, 3));
        setPlace(code);
        if (customerSeats.includes(code)) {
            dispatch(removeTicket(code));
        }
    };
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
                                <span>{film.Price}.000 VNĐ</span>
                            </div>
                        </div>
                    </div>
                    <div className="theatre-checkout">
                        <label>Checkout</label>
                    </div>
                    <div className="theatre-buy">
                        <Link to="/checkout">
                            <FourthButton label={'BuyTicket'} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-7">
                <table>
                    <tbody>
                        <tr>
                            <td></td>
                            {x.map((xx) => (
                                <td key={`th${xx}`}>{xx + 1}</td>
                            ))}
                        </tr>
                        {y.map((yy) => (
                            <tr key={`tr${yy}`}>
                                <td className="text">{yy}</td>
                                {x.map((xx) => {
                                    const code = `${yy}${xx + 1}`;
                                    return (
                                        <td key={`td${xx}`}>
                                            <FontAwesomeIcon
                                                key={code}
                                                onClick={() => handleLocation(code)}
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
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
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
