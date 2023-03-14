import axios from 'axios';

export const getArticles = () => {
  return axios
    .get('https://nc-news-api-sces.onrender.com/api/articles')
    .then(({ data }) => {
      return data;
    });
};

export const getIndividualArticle = (article_id) => {
  return axios.get(
    `https://nc-news-api-sces.onrender.com/api/articles/${article_id}`
  );
};
