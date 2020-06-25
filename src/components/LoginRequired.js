import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import pride from "../assets/img/pride.jpg";
import {Card, MDBLink, NavLink} from "mdbreact";
// import {MDBAlert, MDBBtn, MDBCardHeader} from 'mdbreact'
import {Alert} from "mdbreact";
import {Button} from "mdbreact";
import Home from "./Home";
import {Jumbotron} from "react-bootstrap";

export default class LoginRequired extends Component {
    componentDidMount() {

    }
    render() {
        return (
           <div>
               <Jumbotron>
               <h1>Welcome to LGBTQ+ Meet!</h1>
               <h3>LGBTQ+ Meet was created with the goal of making a safe space for all LGBTQ+ people. </h3>

               <h5>
                   Everyone,
                   no matter their sexual preference or gender identity, are welcome. Here, users can find meetups near them to hang out with like-minded people. Creating a meetup  is effortless. Simply create an account, and create a custom meetup with a title, description, map location, date/time, and even a category (ex.transgender/lesbian/non-binary, etc.).
               </h5>
               <br>
               </br>

           </Jumbotron>
            <Card className='card'>
                <Alert className='alert-warning'>To continue –– please either <b>create an account</b>, or <b>log in</b>!</Alert>

                    <Button className='btn-lg'><NavLink className='black-text' to={'/createaccount'}>Create Account</NavLink></Button>
                <Button className='btn-lg'><NavLink className='black-text' to={'/login'}>Login</NavLink></Button>


            </Card>
               <br>
               </br>
               <Jumbotron>
                   <br>
                   </br>
                   <h5>This is my final project from Flatiron School coding bootcamp, I'm currently adding features, redesigning, and polishing the app.</h5>
                   <br>
                   </br>
                   <h4>This site is currently being developed, find out more about the development process & upcoming features below! </h4>

                   <p>
                       <Button variant="primary" href={'https://github.com/boostinwrx/lgtbtq-meetups-frontend'}>Learn more</Button>
                   </p>
               </Jumbotron>
           </div>


        )
    }
}
