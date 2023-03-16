import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ArticleFiltering = () => {
  return (
    <div className="article-buttons">
      <Link to="/articles">all</Link>
      <Link to="/articles/coding">coding</Link>
      <Link to="/articles/football">football</Link>
      <Link to="/articles/cooking">cooking</Link>
    </div>
  );
};

export default ArticleFiltering;
