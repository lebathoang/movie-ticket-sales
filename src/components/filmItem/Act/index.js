import './index.scss';
import data from '~/shared/mocks/films.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { BuyButton } from '../../button';

function Act() {
    return (
        <div className="item-wrapper">
            {data.map((items, index) =>
                items.Name === 'Avenger: Endgame' ? (
                    <div className="col-6" key={index}>
                        <div className="main-outside">
                            <img src={items.Image} />
                            <div className="detail">
                                <h2>{items.Name}</h2>
                                <FontAwesomeIcon className="icon-star" icon={faStar} />
                                <FontAwesomeIcon className="icon-star" icon={faStar} />
                                <FontAwesomeIcon className="icon-star" icon={faStar} />
                                <FontAwesomeIcon className="icon-star" icon={faStar} />
                                <FontAwesomeIcon className="icon-star" icon={faStar} />
                                <p>Time: {items.Time} minute</p>
                                <p>Price: {items.Price}.000 VND</p>
                                <p>Premiere Date: {items.PremiereDate}</p>
                                <BuyButton />
                            </div>
                        </div>
                    </div>
                ) : items.Name === 'Venom' || items.Name === 'The Batman' ? (
                    <div className="col-3">
                        <div className="item">
                            <img src={items.Image} />
                            <div className="item-content">
                                <h2>{items.Name}</h2>
                                <div className="border"></div>
                                <FontAwesomeIcon className="icon-star" icon={faStar} />
                                <FontAwesomeIcon className="icon-star" icon={faStar} />
                                <FontAwesomeIcon className="icon-star" icon={faStar} />
                                <FontAwesomeIcon className="icon-star" icon={faStar} />
                                <FontAwesomeIcon className="icon-star" icon={faStar} />
                                <p>Time: {items.Time} minute</p>
                                <p>Price: {items.Price}.000 VND</p>
                                <p>Premiere Date: {items.PremiereDate}</p>
                                <BuyButton />
                            </div>
                        </div>
                    </div>
                ) : (
                    ''
                ),
            )}
        </div>
    );
}

export default Act;
