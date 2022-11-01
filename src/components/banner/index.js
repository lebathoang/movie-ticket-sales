import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';
import './index.scss';
import BannerMain from '~/shared/mocks/banner-main.json';
import { bannerChange } from '~/store/reducers/global/action';
import { useDispatch } from 'react-redux';

function Banner() {
    const dispatch = useDispatch();
    const handleSelect = (selectedIndex, e) => {
        dispatch(bannerChange(selectedIndex));
    };

    return (
        <div className="banner-wrap">
            <Carousel onSelect={handleSelect}>
                {BannerMain.map((items, index) => (
                    <Carousel.Item interval={5000} key={index}>
                        <div className="banner-label">
                            <img className="banner" src={items.image} />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default Banner;
