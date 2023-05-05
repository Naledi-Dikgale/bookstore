import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CategoriesPage from './components/CategoriesPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/categories" element={<CategoriesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
