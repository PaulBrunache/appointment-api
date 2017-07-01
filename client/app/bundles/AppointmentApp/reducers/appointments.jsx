const initState = {
  appointment: [],
  fetching: false, 
  error: null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_APPOINTMENTS': 
    break;

    default:
      return state;
  }
};

export default reducer;
