import { BuyButton } from '~/components/button';
import './index.scss';

function Banner() {
    return (
        <div className="wrap-banner">
            <div className="container">
                <div className="row">
                    <div className="label">
                        <h1>Avenger: Endgame</h1>
                        <label>Time: 01-01-2023</label>
                        <BuyButton />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
