import axios from 'axios';

export const getArticles = (props, orderBy, sortBy) => {
  if (props === undefined) {
    props = '';
  }

  return axios
    .get(
      `https://nc-news-api-sces.onrender.com/api/articles?topic=${props}&sort_by=${
        sortBy || 'created_at'
      }&order=${orderBy || 'desc'}`
    )
    .then(({ data }) => {
      return data;
    });
};

export const getIndividualArticle = (article_id) => {
  return axios
    .get(`https://nc-news-api-sces.onrender.com/api/articles/${article_id}`)
    .then(({ data }) => {
      return data.article[0];
    });
};

export const getArticleComments = (article_id) => {
  return axios
    .get(
      `https://nc-news-api-sces.onrender.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data;
    });
};

export const voteForArticle = (article_id) => {
  return axios
    .patch(`https://nc-news-api-sces.onrender.com/api/articles/${article_id}`, {
      inc_votes: 1,
    })
    .then(({ data }) => {
      return data;
    });
};

export const postComment = (article_id, username, body) => {
  return axios
    .post(
      `https://nc-news-api-sces.onrender.com/api/articles/${article_id}/comments`,
      { username, body }
    )
    .then(({ data }) => {
      return data;
    });
};

export const deleteComment = (comment_id) => {
  return axios
    .delete(`https://nc-news-api-sces.onrender.com/api/comments/${comment_id}`)
    .then((data) => {
      console.log(data);
    });
};
