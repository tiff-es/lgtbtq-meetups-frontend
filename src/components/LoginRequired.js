import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import pride from "../assets/img/pride.jpg";
import {Card, MDBLink, NavLink} from "mdbreact";
// import {MDBAlert, MDBBtn, MDBCardHeader} from 'mdbreact'
import {Alert} from "mdbreact";
import {Button} from "mdbreact";
import Home from "./Home";

export default class LoginRequired extends Component {
    componentDidMount() {

    }
    render() {
        return (
           <div> <Home/>
            <Card className='card'>
                <Alert className='alert-warning'>To continue –– please either <b>create an account</b>, or <b>log in</b>!</Alert>

                    <Button className='btn-lg'><NavLink className='black-text' to={'/createaccount'}>Create Account</NavLink></Button>
                <Button className='btn-lg'><NavLink className='black-text' to={'/login'}>Login</NavLink></Button>


            </Card>
           </div>


        )
    }
}
