import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';
import banner from '~/assets/images/banner.png';
import Banner from '~/components/banner';
import Main from '~/components/main';
import './index.scss';

function Home() {
    return (
        <div className="wrap">
            <img className="banner" src={banner} />
            <div className="content">
                <Header />
                <div className="scroll">
                    <Banner />
                    <Main />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Home;
