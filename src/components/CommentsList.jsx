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
            <h2>{comment.author}</h2>
            <p>{comment.body}</p>
          </>
        );
      })}
    </section>
  );
};

export default CommentsList;
