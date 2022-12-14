import './index.scss';
import CloseButton from 'react-bootstrap/CloseButton';

function CartShopping() {
    return (
        <div className="cart-wrapper">
            <div className="cart-head">
                <label>Cart Shopping</label>
                <CloseButton className="checkout-close-button close" />
            </div>
            <div className="cart-product">
                <div className="cart-item">
                    <img src="https://upload.wikimedia.org/wikipedia/en/6/63/Godzilla_vs._Kong.png" />
                    <div className="cart-main">
                        <label>Godzilla vs. Kong</label>
                        <p>Time: 113 minutes</p>
                        <div className="cart-seat">
                            <p>Row: B</p>
                            <p>Column: 7</p>
                            <p>A Place: 25</p>
                        </div>
                    </div>
                    <div className="cart-price">
                        <CloseButton className="checkout-close-button" />
                        <p>50.000 VNĐ</p>
                    </div>
                </div>
            </div>
            <div className="cart-checkout">
                <label>Checkout</label>
                <div className="cart-checkout-item">
                    <p>Ticket:</p>
                    <span className="ticket-count">1</span>
                </div>
                <div className="cart-checkout-item">
                    <p>Total money:</p>
                    <span>50.000 VNĐ</span>
                </div>
            </div>
        </div>
    );
}

export default CartShopping;
