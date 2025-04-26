import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PokedexPage from './pages/PokedexPage';
import AboutPage from './pages/AboutPage';
import PokemonDetailPage from './pages/PokemonDetailPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Pokedex</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<PokedexPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
