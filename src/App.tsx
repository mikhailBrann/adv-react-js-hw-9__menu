import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import ForzaPage from './components/ForzaPage';
import TimeAttackPage from './components/TimeAttackPage';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <div>
        <Menu/>
        <div className="page">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
