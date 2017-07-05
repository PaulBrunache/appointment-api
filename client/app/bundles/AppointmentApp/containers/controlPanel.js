import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userAction from '../actions/userAction';
import appointmentTable from '../components/appointmentTable';
import { TimePicker, DatePicker } from 'antd';
import moment from 'moment';

class ShowCreateForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            time: "", 
            date: "", 
            description: ""
        };
        this.setTime = this.setTime.bind(this);
        this.setDate = this.setDate.bind(this);
        this.setDescription = this.setDescription.bind(this);
    }
    setTime(e,val) {
        console.log('thisis val passed',val)
        this.setState({ time: val});
        console.log(this.state)
    }
    setDate(e,val) {
        this.setState({ date: val});
        console.log(this.state)
    }
    setDescription(e) {
        this.setState({ description: e.target.value});
        console.log(this.state)
    }


    handleSubmit(event, callback) {
        let payload={
            time: this.state.time,
            date: this.state.date,
            description: this.state.description
        }
        callback(payload);
        this.state = {
            time: "", 
            date: "", 
            description: ""
        };
        console.log('current state', this.state)

    }

    render(){
        const format = 'HH:mm';
        const dateFormat = 'MMM Do'
        const {cancel,create} = this.props
        return(
            <div className="card w50">
                <div className="card-header">
                    <div className="btn-toolbar" role="toolbar" >
                        <div className="btn-group mr-2" role="group">
                            <button type="submit" 
                            className="btn btn-primary" 
                            onClick={(e)=> this.handleSubmit(e,create)} >Add</button>
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
                            <TimePicker use12Hours format="h:mm a" onChange={this.setTime}/>
                        </div>
                        <div className="form-group">
                            <DatePicker format={dateFormat} onChange={this.setDate} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Appointment name" 
                            onChange={this.setDescription}/>
                        </div>
                        
                    </form>
                </div>
            </div>
        );

    }
}
ShowCreateForm.propTypes = {
    time: PropTypes.string, 
    date: PropTypes.string, 
    description: PropTypes.string,
};



const mapStateToProps = (state) => ({ 
    panelForm: state.controlPanelCreateFormReducer,
});
const mapDispatchToProps = (dispatch) => {
    return  bindActionCreators({ 
        newApp: userAction.AppointmentNew,
        cancel: userAction.AppointmentCreateCancel,
        create: userAction.AppointmentCreate,
    }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ControlPanel extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const {newApp,cancel,create} = this.props
        const inCreateMode = this.props.panelForm.active

        return (
            <div>
                <div className="row">
                    {(inCreateMode) ? <ShowCreateForm create={create} cancel={cancel}/> : showNewButton(newApp)}
                </div> 
            </div> 
        )
    }
}

const showNewButton = (newForm) => {
    return (
        <div className="btn-group mr-2" role="group">
            <button type="button" className="btn btn-secondary" onClick={newForm}>New</button>
        </div>
    );
};

