import React from 'react';
import { useParams } from 'react-router-dom';
import { getIndividualArticle } from '../utilsAPI';
import { useEffect, useState } from 'react';
import CommentsList from '../components/CommentsList';

const IndividualArticlePage = () => {
  const { article_id } = useParams();
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    getIndividualArticle(article_id).then((data) => {
      setArticleData(data);
    });
  }, []);

  return (
    <>
      <section>
        <h1>{articleData.title}</h1>
        <img src={articleData.article_img_url} alt="" />
        <p>{articleData.body}</p>
        <p>votes {articleData.votes}</p>
        <p>comments {articleData.comment_count}</p>
      </section>
      <section>
        <CommentsList article_id={article_id} />
      </section>
    </>
  );
};

export default IndividualArticlePage;
