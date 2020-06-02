import React from "react";
import {Toolbar, GridList, BottomNavigation} from "@material-ui/core";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Alert, Form, Popover} from "react-bootstrap";
import {Button, MDBAlert} from "mdbreact";

import axios from 'axios'
import {login} from '../actions/login'
import {clearMessage, userLoginFetch} from "../actions/user";
// send JWT as a header in every request sent to the backend


class Login extends React.Component{
    state = {
        username: "",
        password: "",
        success: ''
    }

componentWillUnmount(){
}

    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        } );
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.userLoginFetch(this.state)

         setTimeout(() => {this.props.history.push('/') && this.props.clearMessage() }, 2000)


        // this.props.dispatch({type: 'LOGIN', currentUser: {username: this.state.username, password: this.state.username}})    }
    }
    //wire up mapDispatchToProps
    render() {
        return(
            <div id='login main-container' className='modal-body'>
                { (this.props.error) ?
                    <MDBAlert id='success-alert'className="alert alert-danger" role="alert">
                        {this.props.error}
                    </MDBAlert> : ''}

                { (this.props.success !== '') ?
                    <MDBAlert id='success-alert' className="alert alert-success" role="alert">
                        You're Logged In! <br/>      {this.props.success}
                    </MDBAlert> : ''}
                {}



                <h2 id='login-header' className='header-raised'> Login</h2>
                <Form id='login form' onSubmit={this.handleOnSubmit}>

                    <Form.Group id='login form-group username'onChange={this.handleInputChange} >
                        <Form.Label id='login form-label username'>Username</Form.Label>
                        <Form.Control id='username' type="text" placeholder="Username" />
                    </Form.Group>


                    <Form.Group id='login form-group password' onChange={this.handleInputChange} >
                        <Form.Label id='login form-label password'>Password</Form.Label>
                        <Form.Control id='password' type="password" placeholder="Password" />
                    </Form.Group>

                    <Button id='login submit-btn' variant='primary' className='submitButton' type='submit'> Submit </Button>
                </Form>
            </div>


        )

    }

}

const mapStateToProps = (state) => {
    return {
        error: state.users.error,
        success: state.users.success
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userLoginFetch: (userInfo) => {
            dispatch(userLoginFetch(userInfo))
        },
        clearMessage: () => {dispatch(clearMessage())}
    };
}

export default connect(mapStateToProps ,mapDispatchToProps)(Login)