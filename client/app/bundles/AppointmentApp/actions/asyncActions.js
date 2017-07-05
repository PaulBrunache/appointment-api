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
  })
  .catch( error =>{
    console.log("ahhh man", error)
  })
}