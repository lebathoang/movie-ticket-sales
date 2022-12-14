import './index.scss';
import CloseButton from 'react-bootstrap/CloseButton';
import { FourthButton } from '~/components/button';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function CheckOut() {
    return (
        <div className="checkout-wrap">
            <CloseButton className="checkout-close-button" />
            <p>CheckOut</p>
            <div className="checkout-wrap-bill">
                <div className="checkout-bill">
                    <p>Ticket:</p>
                    <span>3</span>
                </div>
                <div className="checkout-bill">
                    <p>Price:</p>
                    <span>40.000 VNĐ</span>
                </div>
                <div className="checkout-bill">
                    <p>Total:</p>
                    <span>120.000 VNĐ</span>
                </div>
            </div>
            <div className="checkout-wrap-infomation">
                <div className="checkout-input">
                    <p>Full Name:</p>
                    <input type="text" />
                </div>
                <div className="checkout-input">
                    <p>Address:</p>
                    <input type="text" />
                </div>
                <div className="checkout-input">
                    <p>ID card/CCCD:</p>
                    <input type="text" />
                </div>
                <div className="checkout-input">
                    <p>Account number:</p>
                    <input type="text" />
                </div>
                <div className="checkout-input">
                    <p>Into money:</p>
                    <input type="text" />
                </div>
            </div>
            <div className="checkout-wrap-bank">
                <OwlCarousel items={4} className="owl-theme" loop nav>
                    <img src="" />
                    <img src="" />
                    <img src="" />
                    <img src="" />
                    <img src="" />
                    <img src="" />
                </OwlCarousel>
            </div>
            <div className="checkout-wrap-button">
                <FourthButton label={'Buy Ticket'} />
            </div>
        </div>
    );
}

export default CheckOut;
