// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faChartSimple, faHeart, faHouseChimney } from '@fortawesome/free-solid-svg-icons';
// import Data from '~/shared/mocks/films.json';
import Cast from '~/shared/mocks/casts.json';
import { SecondaryButton } from '~/components/button';

function Details() {
    const castIndex = Cast[0].endgame;
    return (
        <div>
            <Header />
            <div className="detail-head">
                <div className="container">
                    <div className="row">
                        <div className="detail-header">
                            <Link to="/">
                                <FontAwesomeIcon className="detail-icon-home" icon={faHouseChimney} />
                            </Link>
                            <FontAwesomeIcon className="detail-icon" icon={faAngleRight} />
                            <p>Avenger: Endgame</p>
                        </div>
                        <div className="detail-content">
                            <div className="col-9">
                                <h2>Avenger: Endgame</h2>
                                <p>
                                    After the devastating events of Avengers: Infinity War (2018), the universe is in
                                    ruins. With the help of remaining allies, the Avengers assemble once more in order
                                    to reverse Thanos' actions and restore balance to the universe.
                                </p>
                                <ul className="detail-rate">
                                    <li className="detail-numberoflikes">
                                        <span>9.4</span>
                                    </li>
                                    <li className="detail-IDMB">
                                        <div className="detail-vote">
                                            <span className="detail-number-big">8.1</span>
                                            <span>/10</span>
                                        </div>
                                        <p>IDMB</p>
                                        <div className="detail-rate-border"></div>
                                    </li>
                                    <li className="detail-metacritic">
                                        <span>71%</span>
                                        <p>METACRITIC</p>
                                        <div className="detail-rate-border"></div>
                                    </li>
                                    <li className="detail-metacritic">
                                        <span>84%</span>
                                        <p>ROTTEN TOMATOES</p>
                                        <div className="detail-rate-border"></div>
                                    </li>
                                    <button>
                                        <FontAwesomeIcon icon={faHeart} className="detail-icon-heart" />
                                    </button>
                                </ul>
                                <div className="detail-the-cast">
                                    <label>The Cast</label>
                                    <div className="detail-wrap-cast">
                                        {castIndex.map((items, index) => (
                                            <div className="detail-cast" key={index}>
                                                <img src={items.image} />
                                                <p>{items.name}</p>
                                                {/* <p>( {items.figure} )</p> */}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <img src="https://upload.wikimedia.org/wikipedia/vi/2/2d/Avengers_Endgame_bia_teaser.jpg" />
                                <Link to="/theatre">
                                    <SecondaryButton label={'Buy'} />
                                </Link>
                                <div className="detail-right-content">
                                    <label>Premiere Date</label>
                                    <p>01 January 2023</p>
                                </div>
                                <div className="detail-right-content">
                                    <label>Time</label>
                                    <p>135 Minutes</p>
                                </div>
                                <div className="detail-right-content">
                                    <label>Director</label>
                                    <p>Anthony Russo, Joe Russo</p>
                                </div>
                                <div className="detail-right-content">
                                    <label>Box Office</label>
                                    <div className="detail-revenue">
                                        <FontAwesomeIcon icon={faChartSimple} className="detail-chart" />
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
