import React from "react";

import { Link } from "react-router-dom";
const LandingPage = ({ setUsername, username }) => {
  return (
    <div className="landing">
      <h2>Explore the world, one article at a time</h2>
      <Link className="articles-link" to="/articles">
        articles
      </Link>

      <h1>active user : {username}</h1>
      <section className="test">
        <button onClick={() => setUsername("jessjelly")}>jessjelly</button>
        <button onClick={() => setUsername("cooljmessy")}>cooljmessy</button>
        <button onClick={() => setUsername("happyamy2016")}>
          happyamy2016
        </button>
      </section>
    </div>
  );
};

export default LandingPage;
