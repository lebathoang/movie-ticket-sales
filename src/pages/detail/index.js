// import { useNavigate } from 'react-router-dom';

import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faChartSimple, faHeart, faHouseChimney } from '@fortawesome/free-solid-svg-icons';
// import Data from '~/shared/mocks/films.json';
import Cast from '~/shared/mocks/casts.json';
import { BuyButton } from '~/components/button';

function Details() {
    const castIndex = Cast[0].endgame;
    return (
        <div>
            <Header />
            <div className="detail-head">
                <div className="container">
                    <div className="row">
                        <div className="detail-header">
                            <FontAwesomeIcon className="icon-home" icon={faHouseChimney} />
                            <FontAwesomeIcon className="detail-icon" icon={faAngleRight} />
                            <h3>Avenger: Endgame</h3>
                        </div>
                        <div className="detail-content">
                            <div className="col-9">
                                <h1>Avenger: Endgame</h1>
                                <p>
                                    After the devastating events of Avengers: Infinity War (2018), the universe is in
                                    ruins. With the help of remaining allies, the Avengers assemble once more in order
                                    to reverse Thanos' actions and restore balance to the universe.
                                </p>
                                <ul className="rate">
                                    <li className="numberoflikes">
                                        <span>9.4</span>
                                    </li>
                                    <li className="IDMB">
                                        <div className="vote">
                                            <span className="number-big">8.1</span>
                                            <span>/10</span>
                                        </div>
                                        <p>IDMB</p>
                                        <div className="rate-border"></div>
                                    </li>
                                    <li className="metacritic">
                                        <span>71%</span>
                                        <p>METACRITIC</p>
                                        <div className="rate-border"></div>
                                    </li>
                                    <li className="metacritic">
                                        <span>84%</span>
                                        <p>ROTTEN TOMATOES</p>
                                        <div className="rate-border"></div>
                                    </li>
                                    <button>
                                        <FontAwesomeIcon icon={faHeart} className="icon-heart" />
                                    </button>
                                </ul>
                                <div className="the-cast">
                                    <label>The Cast</label>
                                    <div className="wrap-cast">
                                        {castIndex.map((items, index) => (
                                            <div className="cast" key={index}>
                                                <img src={items.image} />
                                                <p>{items.name}</p>
                                                {/* <p>( Asakura Yoh )</p> */}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <img src="https://upload.wikimedia.org/wikipedia/vi/2/2d/Avengers_Endgame_bia_teaser.jpg" />
                                <BuyButton />
                                <div className="right-content">
                                    <h3>PREMIERE DATE</h3>
                                    <p>01 January 2023</p>
                                </div>
                                <div className="right-content">
                                    <h3>TIME</h3>
                                    <p>135 Minutes</p>
                                </div>
                                <div className="right-content">
                                    <h3>DIRECTOR</h3>
                                    <p>Anthony Russo, Joe Russo</p>
                                </div>
                                <div className="right-content">
                                    <h3>BOX OFFICE</h3>
                                    <div className="revenue">
                                        <FontAwesomeIcon icon={faChartSimple} className="chart" />
                                        <p>$ 2,798 B</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Details;
