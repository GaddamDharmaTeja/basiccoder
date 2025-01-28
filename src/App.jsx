import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import bgm from './assets/Anime1.png';
import Anime from './Anime'; // Ensure correct path
import MapComponent from './MapComponent'; // Ensure correct path

const Home = () => <div>Welcome to the Anime World!</div>;
const About = () => <div>Learn more about our mission and team.</div>;

function App() {
  return (
    <Router>
      <header className="header">
        <div className="tabs-nav">
          <Link to="/" className="tab-link">
            <button>Home</button>
          </Link>
          <Link to="/anime" className="tab-link">
            <button>Help</button>
          </Link>
          <Link to="/about" className="tab-link">
            <button>About</button>
          </Link>
          <Link to="/map" className="tab-link">
            <button>Map</button>
          </Link>
        </div>
      </header>

      <div
        className="background-image"
        style={{ backgroundImage: `url(${bgm})` }}
      ></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/about" element={<About />} />
        <Route path="/map" element={<MapComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
