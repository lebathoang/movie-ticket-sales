import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/detail';
import Theatre from './pages/theatre';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/detail" element={<Details />} />
                    <Route path="/theatre" element={<Theatre />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
