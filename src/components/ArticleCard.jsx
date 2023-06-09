import React from "react";

const ArticleCard = ({ articleData }) => {
  const { article_img_url, author, title, votes } = articleData;

  return (
    <>
      <img className="article-card-img" src={article_img_url} alt="" />
      <h2 className="article-card-title">{title}</h2>
      <h3 className="article-card-author">{author}</h3>
      <p>number of votes {votes}</p>
    </>
  );
};

export default ArticleCard;
