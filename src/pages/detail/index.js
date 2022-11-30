import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faChartSimple, faHeart, faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import FilmDetail from '~/shared/mocks/films.json';
import Cast from '~/shared/mocks/casts.json';
import { SecondaryButton } from '~/components/button';
import Remix from '~/video/remix.mp4';

function Details() {
    const navigate = useNavigate();
    const { filmId } = useParams();
    const [filmSelected, setFilmSelected] = useState(null);
    const [castSelected, setCastSelected] = useState([]);
    useEffect(() => {
        const item = FilmDetail.find((film) => film.Id == filmId);
        if (item) {
            setFilmSelected(item);
            const castItem = Cast.find((c) => c.id == filmId);
            setCastSelected(castItem.casts);
        } else {
            navigate('/');
        }
        // neu k thi redirect router v6
    }, []);
    return (
        <div>
            <Header />
            <div className="detail-head">
                <div className="container">
                    <div className="row">
                        {filmSelected && (
                            <>
                                <div className="detail-header">
                                    <Link to="/">
                                        <FontAwesomeIcon className="detail-icon-home" icon={faHouseChimney} />
                                    </Link>
                                    <FontAwesomeIcon className="detail-icon" icon={faAngleRight} />
                                    <p>{filmSelected.Name}</p>
                                </div>
                                <div className="detail-content">
                                    <div className="col-9">
                                        <h2>{filmSelected.Name}</h2>
                                        <p>{filmSelected.Title}</p>
                                        <ul className="detail-rate">
                                            <li className="detail-numberoflikes">
                                                <span>{filmSelected.Star}</span>
                                            </li>
                                            <li className="detail-IDMB">
                                                <div className="detail-vote">
                                                    <span className="detail-number-big">{filmSelected.Idmb}</span>
                                                    <span>/10</span>
                                                </div>
                                                <p>IDMB</p>
                                                <div className="detail-rate-border"></div>
                                            </li>
                                            <li className="detail-metacritic">
                                                <span>{filmSelected.Metacritic}%</span>
                                                <p>METACRITIC</p>
                                                <div className="detail-rate-border"></div>
                                            </li>
                                            <li className="detail-metacritic">
                                                <span>{filmSelected.Tomatoes}%</span>
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
                                                {castSelected.map((item, index) => (
                                                    <div className="detail-cast" key={index}>
                                                        <img src={item.image} />
                                                        <p>{item.name}</p>
                                                        <p className="figure">( {item.figure} )</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        {/* <img src={filmSelected.Image} /> */}
                                        <video
                                            width={266}
                                            height={350}
                                            src="https://v16-webapp.tiktok.com/30d5f65179b4a07c769abe05d07265d5/6387c9e9/video/tos/useast2a/tos-useast2a-pve-0037-aiso/3ac9afe82de84ef187b801dfbcb1e470/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=1500&bt=750&cs=0&ds=3&ft=4b~OyM3a8Zmo0_WpK64jVL36PpWrKsdm&mime_type=video_mp4&qs=0&rc=O2U4Ojs0ZjxmNDQ2aTwzNEBpM3huOWg6ZndoZjMzZjgzM0BjMmFiXjMtNS8xNWIxLWJgYSNsMmBycjQwZzRgLS1kL2Nzcw%3D%3D&l=2022113015233901024502202612339BEB&btag=80000"
                                            controls
                                        />
                                        <Link to="/theatre">
                                            <SecondaryButton label={'Buy'} />
                                        </Link>
                                        <div className="detail-right-content">
                                            <label>Premiere Date</label>
                                            <p>{filmSelected.PremiereDate}</p>
                                        </div>
                                        <div className="detail-right-content">
                                            <label>Time</label>
                                            <p>{filmSelected.Time} Minutes</p>
                                        </div>
                                        <div className="detail-right-content">
                                            <label>Director</label>
                                            <p>{filmSelected.Directer}</p>
                                        </div>
                                        <div className="detail-right-content">
                                            <label>Box Office</label>
                                            <div className="detail-revenue">
                                                <FontAwesomeIcon icon={faChartSimple} className="detail-chart" />
                                                <p>$ {filmSelected.Revenue} M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Details;
