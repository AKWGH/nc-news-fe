import axios from 'axios';

export const getArticles = () => {
  return axios
    .get('https://nc-news-api-sces.onrender.com/api/articles')
    .then(({ data }) => {
      return data;
    });
};
