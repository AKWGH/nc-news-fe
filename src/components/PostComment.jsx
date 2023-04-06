import React from 'react';
import { useState } from 'react';
import { postComment } from '../utilsAPI';

const PostComment = ({ article_id, setNewComment, username }) => {
  const [commentBody, setCommentBody] = useState('');

  const onChangeHandler = (event) => {
    setCommentBody(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    postComment(article_id, username, commentBody)
      .then((data) => {
        setNewComment(data.comment[0]);
      })
      .catch((err) => {
        setNewComment('');
      });
    setCommentBody('');
  };

  return (
    <div className="post-comment-div">
      post a comment
      <form onSubmit={submitHandler}>
        <textarea
          className="post-comment"
          onChange={onChangeHandler}
          value={commentBody}
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <button className="post-comment-btn" type="submit">
          Post
        </button>
      </form>
    </div>
  );
};

export default PostComment;
