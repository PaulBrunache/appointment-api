import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userAction from '../actions/userAction';
import appointmentTable from '../components/appointmentTable';
import { TimePicker, DatePicker } from 'antd'
import moment from 'moment'



const mapStateToProps = (state) => ({ 
    form: state.formReducer,
    appointments: {}
});
const mapDispatchToProps = (dispatch) => {
    return  bindActionCreators({ 
        newApp: userAction.AppointmentNew,
        cancel: userAction.AppointmentCreateCancel,
        create: userAction.AppointmentCreate
    }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ControlPanel extends Component {
    
    render () {
        const {newApp,cancel,create} = this.props
        const inCreateMode = this.props.form.active
        const appointments = this.props.appointments

        return (
            <div>
                <div className="row">
                    {(inCreateMode) ? showCreateForm(create,cancel) : showNewButton(newApp)}
                </div>
                <div className="row">
                    {
                        appointmentTable(appointments)
                    }
                </div>   
            </div>
           
            
        )
    }
}


const showCreateForm = (create, cancel) => {
    const format = 'HH:mm';
    const dateFormat = 'MMM Do'
    return(
        <div className='container'>
            <div className="row">
             
                <div className="card w50">
                    <div className="card-header">
                        <div className="btn-toolbar" role="toolbar" >
                            <div className="btn-group mr-2" role="group">
                                <button type="submit" className="btn btn-primary" onClick={create}>Add</button>
                            </div>
                            <div className="btn-group mr-2" role="group">
                                <button type="button" className="btn btn-secondary" onClick={cancel} >Cancel</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-block">
                        <h5 className="card-subtitle mb-2 text-muted">Create A new Appointment</h5>
                        <hr/>
                        <form className="card-text">
                            <div className="form-group">
                                <TimePicker use12Hours format="h:mm a"/>
                            </div>
                            <div className="form-group">
                                <DatePicker defaultValue={moment('7/4/2017', dateFormat)} format={dateFormat} />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Appointment name"/>
                            </div>
                        </form>
                    </div>
                </div>
         </div>
        </div>
    );
}


const showNewButton = (newForm) => {
    return (
        <div className="btn-group mr-2" role="group">
            <button type="button" className="btn btn-secondary" onClick={newForm}>New</button>
        </div>
    );
};


