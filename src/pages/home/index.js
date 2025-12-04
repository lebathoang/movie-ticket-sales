import React from 'react';
import { useSelector } from 'react-redux';

import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';
import Banner from '~/components/banner';
import Main from '~/components/main';
import Login from '~/components/auth';
import './index.scss';

function Home() {
    const appState = useSelector((state) => state);
    const auth = appState.auth;
    return (
        <div className="wrap">
            <Header />
            <Banner />
            <div className="content">
                <div className="scroll">
                    {auth?.loggedIn ? <Login /> : ''}
                    <Main />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Home;
