import dataFaq from 'src/data/dataFaq';

export const initialState = {
  list: dataFaq,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
