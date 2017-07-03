const initState = {
  querying: false
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'APPOINTMENT_QUERY': 
      state = {
        ...state,
        querying: true
      } 
    break;
    case 'APPOINTMENT_QUERY_STOP': 
      state = {
        ...state,
        querying: false
      } 
    break; 
  }
  return state;
}

export default reducer;