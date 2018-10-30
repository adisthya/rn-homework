const initialState = {
  news: [],
  names: [],
  muterin: false
};

const dataReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case 'GET_NAMES':
      return {
        ...currentState,
        muterin: true
      }
    case 'GET_NAMES_DONE':
      return {
        ...currentState,
        muterin: false,
        names: action.response
      }
    case 'GETTING_NAMES':
      return {
        ...currentState,
        muterin: true,
      }
    case 'GET_NEWS':
      return {
        ...currentState,
        muterin: true
      }
    case 'GET_NEWS_DONE':
      let { content } = action.response;
      let data = [];

      content.map(item => {
        data.push({
          image: item.thumbnail.shift(),
          name: item.title,
          address: item.website
        });
      });

      console.log(data)
      return {
        ...currentState,
        muterin: false,
        news: data, //action.response
      }
    case 'GETTING_NEWS':
      return {
        ...currentState,
        muterin: true,
      }
    default:
      return currentState;
  }
};

export default dataReducer;
