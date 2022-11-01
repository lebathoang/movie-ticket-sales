import './index.scss';
import data from '~/shared/mocks/films.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { SecondaryButton } from '../../button';
import { Link } from 'react-router-dom';

function Cartoon() {
    return (
        <div className="cartoon-wrapper">
            {data.map((items, index) =>
                items.Name !== 'Famous detective conan: Bride halloween' && items.Category === 'Cartoon' ? (
                    <div className="col-3" key={index}>
                        <Link to="/detail">
                            <div className="cartoon-wrap">
                                <img src={items.Image} />
                                <div className="cartoon-decription-hover cartoon-overlay">
                                    <div className="cartoon-movie-content">
                                        <h2>{items.Name}</h2>
                                        <div className="cartoon-border"></div>
                                        <FontAwesomeIcon className="cartoon-star" icon={faStar} />
                                        <FontAwesomeIcon className="cartoon-star" icon={faStar} />
                                        <FontAwesomeIcon className="cartoon-star" icon={faStar} />
                                        <FontAwesomeIcon className="cartoon-star" icon={faStar} />
                                        <FontAwesomeIcon className="cartoon-star" icon={faStar} />
                                        <p>Time: {items.Time} minute</p>
                                        <p>Price: {items.Price}.000 VND</p>
                                        <p>Premiere Date: {items.PremiereDate}</p>
                                        <SecondaryButton label={'Buy'} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ) : (
                    ''
                ),
            )}
        </div>
    );
}

export default Cartoon;
