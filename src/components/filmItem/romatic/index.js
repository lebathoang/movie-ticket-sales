import './index.scss';
import data from '~/shared/mocks/films.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { SecondaryButton } from '../../button';
import { Link } from 'react-router-dom';

function Romatic() {
    return (
        <div className="romatic-wrapper">
            {data.map((items, index) =>
                items.Name !== 'Always' && items.Category === 'Romantic' ? (
                    <div className="col-3" key={index}>
                        <Link to="/detail">
                            <div className="romatic-wrap">
                                <img src={items.Image} />
                                <div className="romatic-decription-hover romatic-overlay">
                                    <div className="romatic-movie-content">
                                        <h2>{items.Name}</h2>
                                        <div className="romatic-border"></div>
                                        <FontAwesomeIcon className="romatic-star" icon={faStar} />
                                        <FontAwesomeIcon className="romatic-star" icon={faStar} />
                                        <FontAwesomeIcon className="romatic-star" icon={faStar} />
                                        <FontAwesomeIcon className="romatic-star" icon={faStar} />
                                        <FontAwesomeIcon className="romatic-star" icon={faStar} />
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

export default Romatic;
