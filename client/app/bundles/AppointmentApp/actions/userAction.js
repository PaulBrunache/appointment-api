import axios from 'axios'; 

export const AppointmentNew = () => {
    console.log('action new clicked')
    return { type: 'APPOINTMENT_NEW'}
}
export const AppointmentCreate = (appointmentParams = {}) => {
    return { 
        type: 'APPOINTMENT_CREATE',
        payload: appointmentParams
    }
}
export const AppointmentCreateCancel = () => {
    return { type: 'APPOINTMENT_CREATE_CANCEL' }
}