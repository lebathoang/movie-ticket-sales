import './index.scss';
import data from '~/shared/mocks/films.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { BuyButton } from '../../button';

function Cartoon() {
    return (
        <div className="cartoon-wrapper">
            {data.map((items, index) =>
                items.Name !== 'Famous detective conan: Bride halloween' && items.Category === 'Cartoon' ? (
                    <div className="col-3" key={index}>
                        <div className="cartoon-item">
                            <img src={items.Image} />
                            <div className="cartoon-content">
                                <h2>{items.Name}</h2>
                                <div className="border"></div>
                                <FontAwesomeIcon className="star" icon={faStar} />
                                <FontAwesomeIcon className="star" icon={faStar} />
                                <FontAwesomeIcon className="star" icon={faStar} />
                                <FontAwesomeIcon className="star" icon={faStar} />
                                <FontAwesomeIcon className="star" icon={faStar} />
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

export default Cartoon;
