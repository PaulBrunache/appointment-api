import React, { PropTypes } from 'react'

const createAppointments = (list)=>{

    return list.map((appointment)=>{
        return(
            <tr>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.description}</td>
            </tr>   
        ) 
    });

}

const appointmentTable = appointmentList => {
    let listIsEmpty = true
    if (appointmentList){
        listIsEmpty = false
    }
    return (
        <div>
            <div className="alert alert-info">
                <strong>hmmm!</strong> Looks like there's no appointments to display.
            </div>
            <table className='table table-condensed table-bordered'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Description</th>
                    </tr>
                </thead>
                
                <tbody>
    
                </tbody>
            </table>
        </div>
    )
}

export default appointmentTable