import { useState } from 'react';
import { useEffect } from 'react';
import './index.scss';
import { SecondaryButton } from '../button';
import { Link } from 'react-router-dom';
import BannerMain from '~/shared/mocks/banner-main.json';
import { useSelector } from 'react-redux';
import ListFilm from '../Film_Item/ListItem';

function Main() {
    const bannerSelected = useSelector((state) => state.global.bannerSelected);
    const [filmSelected, setFilmSelected] = useState(BannerMain[bannerSelected]);

    useEffect(() => {
        setFilmSelected(BannerMain[bannerSelected]);
    }, [bannerSelected]);

    return (
        <div>
            {filmSelected && (
                <div className="main-wrap-title">
                    <div className="container">
                        <div className="row">
                            <h1>{filmSelected.name}</h1>
                            <label>Time: {filmSelected.time}</label>
                            <Link to={`/detail/${filmSelected.id}`}>
                                <SecondaryButton label={'Buy'} />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
            <div className="main-wrap">
                <div className="container">
                    <div className="row">
                        <ListFilm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
