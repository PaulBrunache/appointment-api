import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'; 
import { connect } from 'react-redux';
import * as userAction from '../actions/userAction';
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux';
import ControlPanel from '../containers/controlPanel'
import ControlPanelSearch from '../containers/controlPanelSearch'
import appointmentTable from '../components/appointmentTable';

const mapDispatchToProps = (dispatch) => {
    return  bindActionCreators({ 
        resetQuery: userAction.AppointmentResetQuery,
        sendQuery: userAction.AppointmentQuery

    }, dispatch);
}
const mapStateToProps = (state) => ({ 
    panelForm: state.controlPanelCreateFormReducer,
});

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments: null
        }

    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/v1/resource/appointments')
        .then(response => {
            console.log("response received", response)
            return this.setState({ appointments: response.data});
        }).catch( error =>{
            console.log(" we got an error?", error)
        })
    }

    render() {
        let table;
        if (this.state.appointments) {
            console.log('appointments are', this.state.appointments);
            table = appointmentTable(this.state.appointments);
        } else {
            table = <div className="loader"></div>;
        }
        return (
            <div id="main-container" className="container">
                <div id="custom-panel">
                    <div className="row">
                        <div className="center-block"> 
                            <ControlPanel/>
                            <ControlPanelSearch/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="center-block"> 
                            {table}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;