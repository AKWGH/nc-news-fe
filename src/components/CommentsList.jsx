import React, { useEffect } from 'react';
import { getArticleComments } from '../utilsAPI';
import { BiCommentDetail } from 'react-icons/bi';

const CommentsList = ({
  article_id,
  articleComments,
  setArticleComments,
  newComment,
}) => {
  useEffect(() => {
    getArticleComments(article_id).then((data) => {
      setArticleComments(data.comments);
    });
  }, [article_id, setArticleComments]);

  return (
    <section>
      comments
      <BiCommentDetail />
      {[newComment, ...articleComments].map((comment) => {
        return (
          <>
            <div>
              <h2>{comment.author}</h2>
              <span>{comment.created_at}</span>
              <p>{comment.body}</p>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default CommentsList;
