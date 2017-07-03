export const AppointmentNew = () => {
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
export const AppointmentQuery = () => {
    return { type: 'APPOINTMENT_QUERY' }
}
export const AppointmentResetQuery = () => {
    return { type: 'APPOINTMENT_QUERY_RESET' }
}
