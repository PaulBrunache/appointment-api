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
