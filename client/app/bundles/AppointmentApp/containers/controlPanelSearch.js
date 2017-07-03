import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userAction from '../actions/userAction';


const mapStateToProps = (state) => ({ 
    panelForm: state.controlPanelCreateFormReducer,
});
const mapDispatchToProps = (dispatch) => {
    return  bindActionCreators({ 
        resetQuery: userAction.AppointmentResetQuery,
        sendQuery: userAction.AppointmentQuery

    }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: null
        }
        this.setSearch = this.setSearch.bind(this);
    }
    setSearch(e,val) {
        this.setState({ query: val});
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


    render () {

        return (
            <div className="row">
                <form className="form-inline">
                    <div className="form-group">
                        <input className="text" className="form-control" 
                         placeholder="search by description"
                         onChange={this.setSearch}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e)=> this.handleSubmit(e,create)}>Search</button>
                </form>
            </div> 
        )
    }
}

