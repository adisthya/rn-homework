const getNames = () => ({ type: 'GET_NAMES' });
const getNamesDone = () => ({ type: 'GET_NAMES_DONE' });
const gettingNames = () => ({ type: 'GETTING_NAMES' });

const getNews = () => ({ type: 'GET_NEWS' });
const getNewsDone = () => ({ type: 'GET_NEWS_DONE' });
const gettingNews = () => ({ type: 'GETTING_NEWS' });

export {
  gettingNames,
  getNames,
  getNamesDone,
  getNews,
  getNewsDone,
  gettingNews,
}
