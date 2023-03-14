import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ articleData }) => {
  const {
    article_img_url,
    author,
    body,
    commentCount,
    created_at,
    title,
    topic,
    votes,
    article_id,
  } = articleData;

  return (
    <div className="article-card-container">
      <img className="article-card-img" src={article_img_url} alt="" />
      <Link to={`/articles/${article_id}`}>read</Link>
      <h2>{title}</h2>
      <h3>{author}</h3>
    </div>
  );
};

export default ArticleCard;
