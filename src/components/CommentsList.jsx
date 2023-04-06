import React, { useEffect } from "react";
import { getArticleComments } from "../utilsAPI";
import { BiCommentDetail } from "react-icons/bi";
import { deleteComment } from "../utilsAPI";
import format from "date-format";

const CommentsList = ({
  article_id,
  articleComments,
  setArticleComments,

  username,
}) => {
  const handleClick = (comment_id) => {
    // const newComments = articleComments.filter((comment) => {
    //   return comment.comment_id !== comment_id;
    // });
    deleteComment(comment_id);
  };

  useEffect(() => {
    getArticleComments(article_id).then((data) => {
      const copyCommentsData = data.comments.map((commentData) => {
        const copyData = { ...commentData };
        const dateFormat = format(
          "dd/MM/yyyy hh:mm",
          new Date(commentData.created_at)
        );
        copyData.created_at = dateFormat;
        return copyData;
      });
      setArticleComments(copyCommentsData);
    });
  }, [article_id, setArticleComments, articleComments]);

  return (
    <section className="comments-section">
      comments
      <BiCommentDetail />
      {articleComments.map((comment, index) => {
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
