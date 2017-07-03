import React, { PropTypes } from 'react'

const createAppointments = (list)=>{

    console.log('this is the list', list)
    let x = list.map((appointment)=>{
        return(
            <tr key={appointment.id}>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.description}</td>
            </tr>   
        ) 
    })

    return x;
}

const appointmentTable = appointmentList => {
    console.log('my appointment list in dummy appointmenttable',appointmentList )
    let listIsEmpty = false
    if ( appointmentList.length < 0){
        listIsEmpty = true
    }
    return (
        <div>
            { (listIsEmpty) ? nothingToShow(): generateTable(appointmentList) }
        </div>
    )
}


const nothingToShow = ()=> {
    return(
        <div className="alert alert-info">
            <strong>hmmm!</strong> Looks like there's no appointments to display.
        </div>
    )
}
const generateTable=(appointments)=>{
    return(
        <table className='table table-condensed table-bordered'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Description</th>
                    </tr>
                </thead>
                
                <tbody>
                    {createAppointments(appointments)}
                </tbody>
            </table>
    )
}
export default appointmentTable