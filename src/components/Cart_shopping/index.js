import { useState, useEffect } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faFaceSmileBeam } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

import { removeTicket } from '~/store/reducers/cart/actions';
import './index.scss';

function CartShopping() {
    const dispatch = useDispatch();
    const itemState = useSelector((state) => state.cart);
    const [totalMoney, setTotalMoney] = useState(0);
    const ticket = itemState.ticket;
    const count = ticket.length;

    useEffect(() => {
        const sum = ticket.reduce((a, b) => a + b.Price, 0);
        const sumMoney = sum != 0 ? sum + '.000' : sum;
        setTotalMoney(sumMoney);
    }, [count]);
    const handleRemoveTicket = (code, film) => {
        dispatch(removeTicket(code, film));
    };
    return (
        <div className="cart-wrap">
            <FontAwesomeIcon icon={faCaretUp} className="cart-triangle" />
            <div className="cart-wrapper">
                <div className="cart-head">
                    <label>Cart Shopping</label>
                </div>
                {count == 0 ? (
                    <div className="cart-title">
                        <label>Please select the number of tickets and seats</label>
                        <span>
                            ..........
                            <FontAwesomeIcon className="smile" icon={faFaceSmileBeam} />
                            ..........
                        </span>
                    </div>
                ) : (
                    <div className="cart-scroll">
                        {ticket.map((film, index) => (
                            <div className="cart-product" key={index}>
                                <div className="cart-item">
                                    <img src={film.Image} />
                                    <div className="cart-main">
                                        <label>{film.Name}</label>
                                        <p>Time: {film.Time} minutes</p>
                                        <div className="cart-seat">
                                            <p>A Place: {film.code}</p>
                                        </div>
                                    </div>
                                    <div className="cart-price">
                                        <CloseButton
                                            className="checkout-close-button close"
                                            onClick={() => handleRemoveTicket(film.code, film)}
                                        />
                                        <p>{film.Price}.000 VNĐ</p>
                                    </div>
                                </div>
                                <div className="cart-border"></div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="cart-checkout">
                    <label>Checkout</label>
                    <div className="cart-checkout-item">
                        <p>Ticket:</p>
                        <span className="ticket-count">{count}</span>
                    </div>
                    <div className="cart-checkout-item">
                        <p>Total money:</p>
                        <span>{totalMoney} VNĐ</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartShopping;
