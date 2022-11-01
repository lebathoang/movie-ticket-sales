import '~/assets/css/button/index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCheck, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Home from '~/pages/home';

export function PrimaryButton({ onClick, label }) {
    return (
        <div className="login-btn">
            <button type="button" onClick={onClick}>
                {label}
            </button>
        </div>
    );
}
export function SecondaryButton({ label }) {
    return (
        <div className="buy-btn">
            <button type="button">{label}</button>
        </div>
    );
}

export function LikeButton() {
    return (
        <div className="like-btn">
            <FontAwesomeIcon className="hidden" icon={faCheck} />
            <FontAwesomeIcon icon={faThumbsUp} />
            <p>Like</p>
            <span>120</span>
        </div>
    );
}
export function BuyTicket() {
    return (
        <div className="wrap-ticket">
            <button type="button" className="ticket-buy">
                Buy Ticket
            </button>
            <FontAwesomeIcon icon={faCartShopping} className="icon-cart" />
        </div>
    );
}
