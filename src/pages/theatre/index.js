import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './index.scss';
import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';
import SecondMainTheatre from './main_theatre';
import FilmDetail from '~/shared/mocks/films.json';
import { FivethButton } from '~/components/button';

function Theatre() {
    const { filmId } = useParams();
    const [filmSelected, setFilmSelected] = useState(null);
    const [time, setTime] = useState('17:00');
    const [active, setActive] = useState('17:00');

    useEffect(() => {
        const item = FilmDetail.find((film) => film.Id == filmId);
        setFilmSelected(item);
    }, []);

    const handleTime = (event) => {
        setTime(event.target.value);
        setActive(event.target.value);
    };

    return (
        <div>
            {filmSelected && (
                <>
                    <img className="theatre-img" src={filmSelected.ImageTheatre} />
                    <Header />
                    <div className="theatre-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="theatre-first-main">
                                    <div className="col-6">
                                        <div className="theatre-title">
                                            <label>{filmSelected.Name}</label>
                                            <p>Movie premieres begin {time}</p>
                                            <p>3D</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="theatre-wrap-time">
                                            <FivethButton
                                                label={'17:00'}
                                                className={active == '17:00' ? 'happen' : ''}
                                                onClick={handleTime}
                                            />
                                            <FivethButton
                                                label={'18:00'}
                                                className={active == '18:00' ? 'happen' : ''}
                                                onClick={handleTime}
                                            />
                                            <FivethButton
                                                label={'19:00'}
                                                className={active == '19:00' ? 'happen' : ''}
                                                onClick={handleTime}
                                            />
                                            <FivethButton
                                                label={'20:00'}
                                                className={active == '20:00' ? 'happen' : ''}
                                                onClick={handleTime}
                                            />
                                            <FivethButton
                                                label={'21:00'}
                                                className={active == '21:00' ? 'happen' : ''}
                                                onClick={handleTime}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <SecondMainTheatre film={filmSelected} />
                            </div>
                        </div>
                        <Footer />
                    </div>
                </>
            )}
        </div>
    );
}
export default Theatre;
