import axios from 'axios';

export const getArticles = () => {
  return axios
    .get('https://nc-news-api-sces.onrender.com/api/articles')
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
