import { useState, useEffect } from 'react';
import './index.scss';
import CloseButton from 'react-bootstrap/CloseButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faFaceSmileBeam } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeTicket, updateTicket } from '~/store/reducers/cart/actions';

function CartShopping() {
    const dispatch = useDispatch();
    const itemState = useSelector((state) => state);
    const [totalMoney, setTotalMoney] = useState(0);
    const item = itemState.cart;
    const [count, setCount] = useState(item.count);
    const ticket = item.ticket;

    useEffect(() => {
        const price = count != 0 ? ticket[1].item.Price : 0;
        const sum = price * count;
        const sumMoney = sum != 0 ? sum + '.000' : sum;
        setTotalMoney(sumMoney);
    }, [count]);
    const handleRemoveTicket = (i) => {
        dispatch(removeTicket(i));
        dispatch(updateTicket(count - 1));
        setCount(count - 1);
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
                        {ticket.map((i, index) =>
                            index != 0 ? (
                                <div className="cart-product" key={index}>
                                    <div className="cart-item">
                                        <img src={i.item.Image} />
                                        <div className="cart-main">
                                            <label>{i.item.Name}</label>
                                            <p>Time: {i.item.Time} minutes</p>
                                            <div className="cart-seat">
                                                <p className="row-seat">Row: {i.row}</p>
                                                <p>Column: {i.column}</p>
                                                <p>A Place: {i.place}</p>
                                            </div>
                                        </div>
                                        <div className="cart-price">
                                            <CloseButton
                                                className="checkout-close-button close"
                                                onClick={() => handleRemoveTicket(i)}
                                            />
                                            <p>{i.item.Price}.000 VNĐ</p>
                                        </div>
                                    </div>
                                    <div className="cart-border"></div>
                                </div>
                            ) : (
                                ''
                            ),
                        )}
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
