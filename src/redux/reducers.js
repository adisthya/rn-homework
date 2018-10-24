const initialState = {
  items: [],
};

const dataReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case 'LIST_ITEMS':
      return {
        ...currentState,
        items: [
          {
            'image': ''
          }
        ]
      };
    default:
      return currentState;
  }
};

export default dataReducer;
