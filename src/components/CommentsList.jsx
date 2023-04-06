import React, { useEffect, useState } from "react";
import { getArticleComments } from "../utilsAPI";
import { BiCommentDetail } from "react-icons/bi";
import { deleteComment } from "../utilsAPI";

const CommentsList = ({
  key,
  article_id,
  articleComments,
  setArticleComments,
  newComment,
  username,
}) => {
  const handleClick = (comment_id) => {
    const newComments = articleComments.filter((comment) => {
      return comment.comment_id !== comment_id;
    });
    setArticleComments(newComments);
    deleteComment(comment_id);
  };

  useEffect(() => {
    getArticleComments(article_id).then((data) => {
      setArticleComments(data.comments);
    });
  }, [article_id, setArticleComments, key]);

  return (
    <section className="comments-section">
      comments
      <BiCommentDetail />
      {[newComment, ...articleComments].map((comment, index) => {
        const { comment_id } = comment;

        return (
          <section className="comment" key={index}>
            <h2>{comment.author}</h2>
            <span>{comment.created_at}</span>
            <p>{comment.body}</p>
            {comment.author === username ? (
              <button
                className="delete-comment-btn"
                onClick={() => {
                  handleClick(comment_id);
                }}
              >
                delete comment
              </button>
            ) : null}
          </section>
        );
      })}
    </section>
  );
};

export default CommentsList;
