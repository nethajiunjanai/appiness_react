import Login from "../components/login";
import React from 'react';
import {connect} from 'react-redux';
import { authenticateUser } from '../store/actions/authenticateUser';
import '../styleSheets/login.scss';

const login = (props)=>{
    const onSubmit=(userName,password)=>{
       props.dispatch(authenticateUser(userName,password))
    }
    return (<div>
       <Login validUser={props.validUser} history={props.history} dispatch={props.dispatch} onSubmit={(userName,password)=>onSubmit(userName,password)}/>
    </div>)
};

const mapStateToProps = (state)=>{
   return {validUser: state.authenticateUser.validUser}
};

export default connect(mapStateToProps)(login);