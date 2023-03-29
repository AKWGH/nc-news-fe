import './App.css';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import { Routes, Route } from 'react-router-dom';
import IndividualArticlePage from './pages/IndividualArticlePage';
import ArticlesPage from './pages/ArticlesPage';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('jessjelly');
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage setUsername={setUsername} username={username} />
          }
        />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route
          path="/article/:article_id"
          element={<IndividualArticlePage username={username} />}
        />
        <Route path="/articles/:filtered" element={<ArticlesPage />} />
      </Routes>
    </div>
  );
}

export default App;
