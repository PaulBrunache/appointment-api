import axios from 'axios'; 

const getAllAppointments = ()=>{
  let appointments = axios.get('http://localhost:3000/api/v1/resource/appointments')
  .then(response => {
    console.log("response received", response)
    return response.data;
  })
  .catch( error =>{
    console.log("well that's not good", error)
  })
}
const createAppointment = (payload)=>{
  console.log('lets create a new appointment yi haah', payload)
  axios.post('http://localhost:3000/api/v1/resource/appointments/new',payload)
  .then(response => {
    console.log("successfully sent", response)
    return response.json;
  })
  .catch( error =>{
    console.log("ahhh man", error)
  })
}
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
