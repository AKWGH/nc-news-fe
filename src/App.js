import "./App.css";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import IndividualArticlePage from "./pages/IndividualArticlePage";
import ArticlesPage from "./pages/ArticlesPage";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./components/Sidebar";

function App() {
  const [username, setUsername] = useState("jessjelly");
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="App">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Header />
      <FaBars
        onClick={() => {
          setShowSidebar(true);
        }}
        className="nav-icon"
      />
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
