import {createAppointment} from '../actions/asyncActions';

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
      createAppointment(action.payload)
      state = {
        ...state,
        active: false,
      } 
    break;
    case 'APPOINTMENT_CREATE_CANCEL': 
      state = {
        ...initState,
        active: false
      } 
    break;
    case 'AUTO_RETRIEVE_APPOINTMENTS': 
      state = {
        ...initState,
        active: false
      } 
    break;
    
  }
  return state;
}

export default reducer;
