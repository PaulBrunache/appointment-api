const initState = {
  fetching: false
}

const reducer = (state = initState, action) => {
  console.log("why am i here")
  switch (action.type) {
    case 'Nodd': 
      state = {
        ...state,
        fetching: true
      } 
    break;
    case 'NO': 
      state = {
        ...state,
        fetching: false
      } 
    break;
    
  }
  return state;
}

export default reducer;