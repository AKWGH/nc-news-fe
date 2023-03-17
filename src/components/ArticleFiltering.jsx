import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const ArticleFiltering = ({ setSearchParams }) => {
  const [sortValue, setSortValue] = useState('created_at');
  const [orderValue, setOrderValue] = useState('desc');

  const sortOnChange = (event) => {
    const newValue = event.target.value;
    setSortValue(newValue);
    setSearchParams({ sortBy: newValue, orderBy: orderValue });
  };
  const orderOnChange = (event) => {
    const newValue = event.target.value;
    setOrderValue(newValue);
    setSearchParams({ sortBy: sortValue, orderBy: newValue });
  };

  return (
    <div className="article-buttons">
      <Link to="/articles">all</Link>
      <Link to="/articles/coding">coding</Link>
      <Link to="/articles/football">football</Link>
      <Link to="/articles/cooking">cooking</Link>

      <select value={sortValue} onChange={sortOnChange}>
        <option value="created_at">date</option>
        <option value="author">author</option>
        <option value="title">title</option>
        <option value="topic">topic</option>
        <option value="votes">votes</option>
        <option value="body">body</option>
      </select>
      <select value={orderValue} onChange={orderOnChange}>
        <option value="desc">descending</option>
        <option value="asc">ascending</option>
      </select>
    </div>
  );
};

export default ArticleFiltering;
