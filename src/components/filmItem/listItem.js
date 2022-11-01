import Act from '../filmItem/Act';
import Romatic from '../filmItem/romatic';
import Humor from '../filmItem/humor';
import Cartoon from '../filmItem/cartoon';

function ListFilmItem() {
    return (
        <>
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
        </>
    );
}

export default ListFilmItem;
