import '~/assets/css/button/index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCheck, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

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
export function FourthButton({ label }) {
    return (
        <div className="wrap-ticket">
            <button type="button" className="ticket-buy">
                {label}
            </button>
            <FontAwesomeIcon icon={faCartShopping} className="icon-cart" />
        </div>
    );
}
export function FivethButton({ onClick, label, className }) {
    return (
        <div className="time-button">
            <button type="button" value={label} className={className} onClick={onClick}>
                {label}
            </button>
        </div>
    );
}

export function SixthButton({ ticket, onClick }) {
    return (
        <button type="button" className="cart-shopping" onClick={onClick}>
            <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
            <span>{ticket}</span>
        </button>
    );
}
