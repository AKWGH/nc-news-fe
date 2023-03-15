import React from 'react';

const ArticleCard = ({ articleData }) => {
  const { article_img_url, author, title, topic, votes } = articleData;

  return (
    <>
      <img className="article-card-img" src={article_img_url} alt="" />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>number of votes {votes}</p>
    </>
  );
};

export default ArticleCard;
