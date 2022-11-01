import { Link } from 'react-router-dom';
import './index.scss';
import data from '~/shared/mocks/films.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { SecondaryButton } from '../../button';

function Humor() {
    return (
        <div className="humor-wrapper">
            {data.map((items, index) =>
                items.Name !== 'Mr. Bean' && items.Category === 'Humor, Act' ? (
                    <div className="col-3" key={index}>
                        <Link to="/detail">
                            <div className="humor-wrap">
                                <img src={items.Image} />
                                <div className="humor-decription-hover humor-overlay">
                                    <div className="humor-movie-content">
                                        <h2>{items.Name}</h2>
                                        <div className="humor-border"></div>
                                        <FontAwesomeIcon className="humor-star" icon={faStar} />
                                        <FontAwesomeIcon className="humor-star" icon={faStar} />
                                        <FontAwesomeIcon className="humor-star" icon={faStar} />
                                        <FontAwesomeIcon className="humor-star" icon={faStar} />
                                        <FontAwesomeIcon className="humor-star" icon={faStar} />
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

export default Humor;
