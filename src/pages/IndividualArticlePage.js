import React from 'react';
import { useParams } from 'react-router-dom';
import { getIndividualArticle, voteForArticle } from '../utilsAPI';
import { useEffect, useState } from 'react';
import CommentsList from '../components/CommentsList';

const IndividualArticlePage = () => {
  const { article_id } = useParams();
  const [articleData, setArticleData] = useState([]);
  const [userVote, setUserVote] = useState(0);

  const onClickHandler = () => {
    setUserVote(1);
    voteForArticle(article_id).catch((err) => {
      setUserVote(0);
    });
  };

  useEffect(() => {
    getIndividualArticle(article_id).then((data) => {
      setArticleData(data);
    });
  }, [article_id]);

  return (
    <>
      <section>
        <h1>{articleData.title}</h1>
        <img src={articleData.article_img_url} alt="" />
        <p>votes {articleData.votes + userVote} </p>
        <button
          disabled={userVote !== 0}
          onClick={() => {
            onClickHandler();
          }}
        >
          vote
        </button>
        <p>{articleData.body}</p>

        <p>comments {articleData.comment_count}</p>
      </section>
      <section>
        <CommentsList article_id={article_id} />
      </section>
    </>
  );
};

export default IndividualArticlePage;
