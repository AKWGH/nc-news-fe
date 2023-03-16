import React from 'react';
import ArticleCard from './ArticleCard';
import { useEffect, useState } from 'react';
import { getArticles } from '../utilsAPI';
import { Link } from 'react-router-dom';
import ArticleFiltering from './ArticleFiltering';
import { useParams } from 'react-router-dom';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const { filtered } = useParams();

  useEffect(() => {
    getArticles(filtered).then((data) => {
      setArticles(data.articles);
    });
  }, [filtered]);
  return (
    <>
      <h2>articles</h2>
      <ArticleFiltering />
      <section className="articles-list">
        {articles.map((article) => {
          return (
            <Link
              className="article-card-container"
              to={`/article/${article.article_id}`}
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
