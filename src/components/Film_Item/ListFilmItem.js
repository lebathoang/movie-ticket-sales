import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { SecondaryButton } from '../button';
import 'bootstrap/dist/css/bootstrap.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { getId } from '~/store/reducers/detail/action';
import { useDispatch } from 'react-redux';

function ListFilmItem({ data }) {
    const dispatch = useDispatch();

    return (
        <div className="film-item-wrapper">
            <OwlCarousel items={4} className="owl-theme" loop nav>
                {data.map((item, index) => (
                    <Link to={`/detail/${item.Id}`} key={index} onClick={() => dispatch(getId(item.Id))}>
                        <div className="film-item-wrap">
                            <img src={item.Image} />
                            <div className="film-item-decription-hover film-item-overlay">
                                <div className="film-item-movie-content">
                                    <h2>{item.Name}</h2>
                                    <div className="film-item-border"></div>
                                    <FontAwesomeIcon className="film-item-star" icon={faStar} />
                                    <FontAwesomeIcon className="film-item-star" icon={faStar} />
                                    <FontAwesomeIcon className="film-item-star" icon={faStar} />
                                    <FontAwesomeIcon className="film-item-star" icon={faStar} />
                                    <FontAwesomeIcon className="film-item-star" icon={faStar} />
                                    <p>Time: {item.Time} minute</p>
                                    <p>Price: {item.Price}.000 VND</p>
                                    <p>Premiere Date: {item.PremiereDate}</p>
                                    <SecondaryButton label={'Buy'} />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
                ;
            </OwlCarousel>
        </div>
    );
}

export default ListFilmItem;
