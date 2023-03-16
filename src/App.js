import './App.css';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import { Routes, Route } from 'react-router-dom';
import IndividualArticlePage from './pages/IndividualArticlePage';
import ArticlesPage from './pages/ArticlesPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route
          path="/article/:article_id"
          element={<IndividualArticlePage />}
        />
        <Route path="/articles/:filtered" element={<ArticlesPage />} />
      </Routes>
    </div>
  );
}

export default App;
