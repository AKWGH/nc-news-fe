import React from 'react';
import ArticleCard from './ArticleCard';
import { useEffect, useState } from 'react';
import { getArticles } from '../utilsAPI';
import { Link } from 'react-router-dom';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data.articles);
    });
  }, []);
  return (
    <>
      <h2>articles</h2>
      <section className="articles-list">
        {articles.map((article) => {
          return (
            <Link
              className="article-card-container"
              to={`/articles/${article.article_id}`}
            >
              <ArticleCard
                key={article.article_id}
                articleData={{ ...article }}
              />
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default ArticleList;
