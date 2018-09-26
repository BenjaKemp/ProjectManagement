
const combinationsReducerDefaultState = [];

const combinationsReducer = (state = combinationsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_COMBO':
  return [...state, action.combo];
  case 'EDIT_COMBO':
  return state.map((combo,index) => {
    if(index == action.index) {
      return combo = action.combo
    }
    return combo;
  } );
  case 'DELETE_COMBO':
  return state.filter((el, i)=>{
    return i !== action.index;
  })
    default:
      return state;

  }
};

export default combinationsReducer
