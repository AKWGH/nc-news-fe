import React from 'react';
import ArticleCard from './ArticleCard';
import { useEffect, useState } from 'react';
import { getArticles } from '../utilsAPI';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((data) => {
      console.log(data);
      setArticles(data.articles);
    });
  }, []);
  console.log(articles);
  return (
    <>
      <h2>articles</h2>
      <div className="articles-list">
        {articles.map((article) => {
          return (
            <ArticleCard
              key={article.article_id}
              articleData={{ ...article }}
            />
          );
        })}
      </div>
    </>
  );
};

export default ArticleList;
