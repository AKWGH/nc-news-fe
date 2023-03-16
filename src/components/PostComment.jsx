import React from 'react';
import { useState } from 'react';
import { postComment } from '../utilsAPI';

const PostComment = ({ article_id, setNewComment }) => {
  const [commentBody, setCommentBody] = useState('');

  const onChangeHandler = (event) => {
    setCommentBody(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    postComment(article_id, commentBody)
      .then((data) => {
        setNewComment(data.comment[0]);
      })
      .catch((err) => {
        setNewComment('');
      });
    setCommentBody('');
  };

  return (
    <div>
      post a comment
      <form onSubmit={submitHandler}>
        <textarea
          onChange={onChangeHandler}
          value={commentBody}
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default PostComment;
