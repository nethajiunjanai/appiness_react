import React, { Component } from 'react';
import { TextField, Button } from 'react-md';
import { getDashboardData } from '../store/actions/dashboard';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    };

    componentWillReceiveProps(nextProps){
      if(nextProps.validUser)
      {
           nextProps.dispatch(getDashboardData())
           nextProps.history.push('/dashboard')
      }
    };
    
    handleChange = (field,value) => {
        this.setState({[field]: value })
    };

    render() {
        const { onSubmit,validUser } = this.props;
        return (<div className="login">
                <TextField
                    id="username"
                    label="Username"
                    lineDirection="center"
                    className="md-cell md-cell--bottom"
                    onChange={value => this.handleChange('userName',value)}
                    error={!(validUser || validUser === null)}
                />
                <TextField
                    id="password"
                    label="Enter your password"
                    type="password"
                    className="md-cell md-cell--bottom"
                    onChange={value => this.handleChange('password',value)}
                    error={!(validUser || validUser === null)}
                    errorText={'Username/password is invalid'}
                />
                <Button raised primary onClick={() => onSubmit(this.state.userName,this.state.password)}>Login</Button>
        </div>)
    }
};

export default Login;