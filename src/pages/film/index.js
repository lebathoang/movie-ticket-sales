import { useState } from 'react';
import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';
import Newfilm from '~/shared/mocks/new-film.json';
import Nowfilm from '~/shared/mocks/premieres-now.json';
import './index.scss';
import { SecondaryButton } from '~/components/button';
import { Link } from 'react-router-dom';

function Film() {
    const [film, setFilm] = useState(false);
    const newfilm = film ? 'active' : '';
    const nowfilm = !film ? 'active' : '';
    const handleNowFilm = () => {
        setFilm(false);
    };
    const handleNewFilm = () => {
        setFilm(true);
    };
    return (
        <div>
            <Header />
            <div className="film-wrapper">
                <div className="container">
                    <div className="row">
                        <ul>
                            <li onClick={handleNowFilm}>
                                <Link to="#" className={nowfilm}>
                                    Phim đang chiếu
                                </Link>
                            </li>
                            <li onClick={handleNewFilm}>
                                <Link to="#" className={newfilm}>
                                    Phim sắp chiếu
                                </Link>
                            </li>
                        </ul>
                        <div className="film-border-bottom"></div>
                        {film === true ? (
                            <div className="film-row-wrap">
                                {Newfilm.map((items, index) => (
                                    <div className="col-3" key={index}>
                                        <div className="film-wrap">
                                            <img src={items.Image} />
                                            <a href="#">
                                                <div className="film-decription-hover film-overlay">
                                                    <div className="film-movie-content">
                                                        <label>{items.Category}</label>
                                                        <h3>{items.PremiereDate}</h3>
                                                        <Link to="/detail">
                                                            <SecondaryButton label={'Buy'} />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="film-food">
                                                <label>{items.Name}</label>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="film-row-wrap">
                                {Nowfilm.map((items, index) => (
                                    <div className="col-3" key={index}>
                                        <div className="film-wrap">
                                            <img src={items.image} />
                                            <a href="#">
                                                <div className="film-decription-hover film-overlay">
                                                    <div className="film-movie-content">
                                                        <label>{items.category}</label>
                                                        <h3>{items.premiereDate}</h3>
                                                        <Link to="/detail">
                                                            <SecondaryButton label={'Buy'} />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="film-food">
                                                <label>{items.name}</label>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Film;
