import React from 'react';
import ArticleCard from './ArticleCard';
import { useEffect, useState } from 'react';
import { getArticles } from '../utilsAPI';
import { Link } from 'react-router-dom';
import ArticleFiltering from './ArticleFiltering';
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const { filtered } = useParams();

  const orderBy = searchParams.get('orderBy');
  const sortBy = searchParams.get('sortBy');

  useEffect(() => {
    getArticles(filtered, orderBy, sortBy).then((data) => {
      setArticles(data.articles);
    });
  }, [filtered, sortBy, orderBy]);
  return (
    <>
      <h2>articles</h2>
      <ArticleFiltering setSearchParams={setSearchParams} />
      <section className="articles-list">
        {articles.map((article, index) => {
          return (
            <Link
              key={index}
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
