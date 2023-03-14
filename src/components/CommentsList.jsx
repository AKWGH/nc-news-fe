import React, { useEffect, useState } from 'react';
import { getArticleComments } from '../utilsAPI';

const CommentsList = ({ article_id }) => {
  const [articleComments, setArticleComments] = useState([]);
  useEffect(() => {
    getArticleComments(article_id).then((data) => {
      setArticleComments(data.comments);
    });
  }, []);

  return (
    <section>
      {articleComments.map((comment) => {
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
