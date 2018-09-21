
const combinationsReducerDefaultState = [];

const combinationsReducer = (state = combinationsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_COMBO':
  return [...state, action.combo]
    default:
      return state;
  }
};

export default combinationsReducer
