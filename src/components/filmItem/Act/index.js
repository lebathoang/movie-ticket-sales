import './index.scss';
import data from '~/shared/mocks/films.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { SecondaryButton } from '../../button';
import { Link } from 'react-router-dom';

function Act() {
    return (
        <div className="act-item-wrapper">
            {data.map((items, index) =>
                items.Name === 'Avenger: Endgame' ? (
                    <div className="col-6" key={index}>
                        <div className="act-main-outside">
                            <img src={items.Image} />
                            <div className="act-detail">
                                <h2>{items.Name}</h2>
                                <FontAwesomeIcon className="act-icon-star" icon={faStar} />
                                <FontAwesomeIcon className="act-icon-star" icon={faStar} />
                                <FontAwesomeIcon className="act-icon-star" icon={faStar} />
                                <FontAwesomeIcon className="act-icon-star" icon={faStar} />
                                <FontAwesomeIcon className="act-icon-star" icon={faStar} />
                                <p>Time: {items.Time} minute</p>
                                <p>Price: {items.Price}.000 VND</p>
                                <p>Premiere Date: {items.PremiereDate}</p>
                                <Link to="/detail">
                                    <SecondaryButton label={'Buy'} />
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : items.Id === 15 || items.Id === 11 ? (
                    <div className="col-3" key={index}>
                        <Link to="/detail">
                            <div className="act-wrap">
                                <img src={items.Image} />
                                <div className="act-decription-hover act-overlay">
                                    <div className="act-movie-content">
                                        <h2>{items.Name}</h2>
                                        <div className="act-border"></div>
                                        <FontAwesomeIcon className="act-star" icon={faStar} />
                                        <FontAwesomeIcon className="act-star" icon={faStar} />
                                        <FontAwesomeIcon className="act-star" icon={faStar} />
                                        <FontAwesomeIcon className="act-star" icon={faStar} />
                                        <FontAwesomeIcon className="act-star" icon={faStar} />
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

export default Act;
