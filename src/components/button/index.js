import '~/assets/css/button/index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCheck, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

function LoginButton() {
    return (
        <div className="btn">
            <button type="button">Login</button>
        </div>
    );
}
function BuyButton() {
    return (
        <div className="buy-btn">
            <button type="button">Buy</button>
        </div>
    );
}

function LikeButton() {
    return (
        <div className="like-btn">
            <FontAwesomeIcon className="hidden" icon={faCheck} />
            <FontAwesomeIcon icon={faThumbsUp} />
            <p>Like</p>
            <span>120</span>
        </div>
    );
}
function BuyTicket() {
    return (
        <div className="ticket-btn">
            <button type="button" className="ticket-buy">
                Buy Ticket
            </button>
            <FontAwesomeIcon icon={faCartShopping} className="icon-cart" />
        </div>
    );
}

export default LoginButton;
export { BuyButton, LikeButton, BuyTicket };
