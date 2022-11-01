import { useState } from 'react';
import { useEffect } from 'react';
import './index.scss';
import Act from '../filmItem/Act';
import Romatic from '../filmItem/romatic';
import Humor from '../filmItem/humor';
import Cartoon from '../filmItem/cartoon';
import { SecondaryButton } from '../button';
import { Link } from 'react-router-dom';
import BannerMain from '~/shared/mocks/banner-main.json';
import { useSelector } from 'react-redux';

function Main() {
    const changeTitle = useSelector((state) => state);
    const bannerSelected = changeTitle.global;
    const index = bannerSelected.bannerSelected;
    const [filmSelected, setFilmSelected] = useState(BannerMain[index]);
    useEffect(() => {
        const item = BannerMain.find((film) => film.index === index);
        setFilmSelected(item);
    }, [bannerSelected]);

    return (
        <div>
            {filmSelected && (
                <div className="main-wrap-title">
                    <div className="container">
                        <div className="row">
                            <h1>{filmSelected.name}</h1>
                            <label>Time: {filmSelected.time}</label>
                            <Link to="/detail">
                                <SecondaryButton label={'Buy'} />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
            <div className="main-wrap">
                <div className="container">
                    <div className="row">
                        <div className="main-content">
                            <div className="main-label">
                                <h2>Humor, Act</h2>
                            </div>
                            <div className="main-box">
                                <Humor />
                            </div>
                        </div>
                        <div className="main-content">
                            <div className="main-label">
                                <h2>Act, Science Fiction</h2>
                            </div>
                            <div className="main-box">
                                <Act />
                            </div>
                        </div>
                        <div className="main-content">
                            <div className="main-label">
                                <h2>Cartoon</h2>
                            </div>
                            <div className="main-box">
                                <Cartoon />
                            </div>
                        </div>
                        <div className="main-content">
                            <div className="main-label">
                                <h2>Romantic</h2>
                            </div>
                            <div className="main-box">
                                <Romatic />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
