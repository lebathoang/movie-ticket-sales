import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';
import './index.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faHandPointRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import BannerEvent from '~/shared/mocks/banner-event.json';
import Eventjson from '~/shared/mocks/event.json';
import Member from '~/shared/mocks/member.json';
import Icon from '~/shared/mocks/icon.json';

function Event() {
    const [choose, setChoose] = useState(true);
    const toggleMember = !choose ? 'selected' : '';
    const toggleEvent = choose ? 'selected' : '';
    return (
        <>
            <Header />
            <div className="event-wrap">
                <div className="container">
                    <div className="row">
                        <Link className="event-banner" to="/detail">
                            <img
                                className="event-double-border"
                                src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg_h3_line.jpg"
                            />
                            <Carousel>
                                {BannerEvent.map((items, index) => (
                                    <Carousel.Item interval={2000} className="event-slide-show" key={index}>
                                        <img className="event-slide-show-run" src={items.image} alt="First slide" />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Link>
                        <div className="event-movie-selection">
                            <div className="event-title">
                                <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg_h3_line.jpg" />
                                <img
                                    className="event-image-movie"
                                    src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/h3_movie_selection.gif"
                                />
                            </div>
                        </div>
                        <div className="event-movie-selection">
                            <div className="event-title">
                                <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg_h3_line.jpg" />
                                <img
                                    className="event-skin"
                                    src="https://www.cgv.vn/skin/frontend/cgv/default/images/h3_event.gif"
                                />
                            </div>
                        </div>
                        <div className="event-content">
                            <div className="event-toggle-tab">
                                <FontAwesomeIcon className="event-caret-right" icon={faCaretRight} />
                                <div className="event-toggle">
                                    <FontAwesomeIcon className={toggleMember} icon={faHandPointRight} />
                                    <p>Banana Member</p>
                                </div>
                                <span>|</span>
                                <div className="event-toggle">
                                    <FontAwesomeIcon className={toggleEvent} icon={faHandPointRight} />
                                    <p>News and offers</p>
                                </div>
                                <FontAwesomeIcon className="event-caret-left" icon={faCaretLeft} />
                            </div>
                            {choose ? (
                                <div className="event-items">
                                    {Member.map((items, index) => (
                                        <div className="col-3" key={index}>
                                            <Link to="#">
                                                <img src={items.image} />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="event-items">
                                    {Eventjson.map((items, index) => (
                                        <div className="col-3" key={index}>
                                            <Link to="#">
                                                <img src={items.image} />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <div className="event-border-bottom"></div>
                            <div className="event-footer">
                                <div className="col-3">
                                    <div className="event-inside">
                                        <Link to="#">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3GEIO2ZrSMUPZaWd4SUNlPDVJEg2iCSVO_Jg7A9jeVpoJD6Eu0iO7bFCgkOLv5Qo8TSI&usqp=CAU" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="event-inside">
                                        <Link to="#">
                                            <img src="https://m.media-amazon.com/images/I/81C45YVzjzL._RI_.jpg" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="event-inside">
                                        <Link to="#">
                                            <img src="https://assets.anantara.com/image/upload/q_auto,f_auto/media/minor/anantara/images/banana-island-resort-doha-by-anantara/offers/beach-house-brunch_944x510/beach-house-brunch_944x510.jpg" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="event-border-bottom"></div>
                            <div className="event-footer-brand-slice">
                                <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/brand-type-film-footer_ver2.png" />
                                <ul>
                                    {Icon.map((items, index) => (
                                        <li key={index}>
                                            <Link to={items.detail} className={items.class}>
                                                {items.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Event;
