import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './index.scss';
import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';
import SecondMainTheatre from './main_theatre';
import FilmDetail from '~/shared/mocks/films.json';
import { FivethButton } from '~/components/button';
import CheckOut from './check_out';
import CartShopping from '~/components/Cart_shopping';

function Theatre() {
    const { filmId } = useParams();
    const [filmSelected, setFilmSelected] = useState(null);
    const [time, setTime] = useState('16:00');
    const [active, setActive] = useState('16:00');
    const cartState = useSelector((state) => state);
    const cart = cartState.cart_shopping;

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
            {/* <CheckOut /> */}
            {cart?.openCart ? <CartShopping /> : ''}
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
                                            <p>2D</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="theatre-wrap-time">
                                            <FivethButton
                                                label={'16:00'}
                                                className={active == '16:00' ? 'happen' : ''}
                                                onClick={handleTime}
                                            />
                                            <FivethButton
                                                label={'17:30'}
                                                className={active == '17:30' ? 'happen' : ''}
                                                onClick={handleTime}
                                            />
                                            <FivethButton
                                                label={'19:00'}
                                                className={active == '19:00' ? 'happen' : ''}
                                                onClick={handleTime}
                                            />
                                            <FivethButton
                                                label={'20:30'}
                                                className={active == '20:30' ? 'happen' : ''}
                                                onClick={handleTime}
                                            />
                                            <FivethButton
                                                label={'22:00'}
                                                className={active == '22:00' ? 'happen' : ''}
                                                onClick={handleTime}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <SecondMainTheatre />
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
