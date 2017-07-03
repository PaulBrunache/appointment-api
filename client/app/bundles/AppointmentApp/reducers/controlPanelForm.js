const initState = {
  active: false,
  error: null,
}

const reducer = (state = initState, action) => {

  switch (action.type) {
    case 'APPOINTMENT_NEW': 
      state = {
        ...state,
        active: true
      } 
    break;
    case 'APPOINTMENT_CREATE': 
      state = {
        ...state,
        active: false
      } 
    break;
    case 'APPOINTMENT_CREATE_CANCEL': 
      state = {
        ...initState
      } 
    break;
    
  }
  return state;
}

export default reducer;
