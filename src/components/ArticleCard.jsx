import React from 'react';

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
  } = articleData;
  console.log(votes);
  return (
    <div className="article-card-container">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <div className="article-card-img-container">
        <img className="article-card-img" src={article_img_url} alt="" />
        <br />
        <button>read</button>
      </div>
    </div>
  );
};

export default ArticleCard;
