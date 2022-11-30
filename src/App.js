import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/detail';
import Theatre from './pages/theatre';
import Film from './pages/film';
import Event from './pages/event';
import MovieCorner from './pages/movie-corner';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/detail/:filmId" element={<Details />} />
                    <Route path="/theatre" element={<Theatre />} />
                    <Route path="/film" element={<Film />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/moviecorner" element={<MovieCorner />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
