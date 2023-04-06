import React from "react";
import { useParams } from "react-router-dom";
import { getIndividualArticle, voteForArticle } from "../utilsAPI";
import { useEffect, useState } from "react";
import CommentsList from "../components/CommentsList";
import PostComment from "../components/PostComment";
import { AiOutlineLike } from "react-icons/ai";

const IndividualArticlePage = ({ username }) => {
  const { article_id } = useParams();
  const [articleData, setArticleData] = useState([]);
  const [userVote, setUserVote] = useState(0);
  const [articleComments, setArticleComments] = useState([]);
  const [newComment, setNewComment] = useState("");

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
      <section className="article-page">
        <h1>{articleData.title}</h1>
        <img src={articleData.article_img_url} alt="" />
        <p className="votes">votes {articleData.votes + userVote} </p>
        <button
          disabled={userVote !== 0}
          onClick={() => {
            onClickHandler();
          }}
        >
          <AiOutlineLike className="vote-btn" />
        </button>
        <p className="article-page-body">{articleData.body}</p>
      </section>
      <PostComment
        username={username}
        article_id={article_id}
        setNewComment={setNewComment}
        articleCommentCount={articleData.comment_count}
      />
      <section>
        <CommentsList
          username={username}
          newComment={newComment}
          articleCommentCount={articleData.comment_count}
          article_id={article_id}
          articleComments={articleComments}
          setArticleComments={setArticleComments}
        />
      </section>
    </>
  );
};

export default IndividualArticlePage;
