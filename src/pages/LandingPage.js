import React from 'react';

import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <div className="landing">
      <h2>Explore the world, one article at a time</h2>
      <Link className="articles-link" to="/articles">
        articles
      </Link>
    </div>
  );
};

export default LandingPage;
