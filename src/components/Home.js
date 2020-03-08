import React from "react";
import NavBar from "./NavBar";
import {connect} from "react-redux";
import {CardTitle, MDBCardBody, MDBCardHeader, MDBCardTitle} from "mdbreact";
import {Card} from "mdbreact";
export default class Home extends React.Component{
    // state = { users: []
    //     // username: '',
    //     //    password: ''
    // }
// componentDidMount() {
//
// }

    render() {
        return(
            <div id='home main-container'>
                <Card id='home-card'>
                    <MDBCardTitle className='card-header text-lg-left' align='center' id='home-card header'><h2>Welcome to LGBTQ Meet!</h2></MDBCardTitle>
                    <MDBCardHeader className='card-header'><h4><i>About Us</i></h4></MDBCardHeader>
                        <MDBCardBody className='card-body'>
                            <p>
                                <h5>LGBTQ+ Meet was created with the goal of making a safe space for all LGBTQ+ people. </h5>
                                Everyone,
                                no matter their sexual preference or gender identity, are welcome. Here, users can find meetups near them to hang out with like-minded people. Creating a meetup  is effortless. Simply create an account, and create a custom meetup with a title, description, map location, date/time, and even a category (ex.transgender/lesbian/non-binary, etc.).
                            </p>
                        </MDBCardBody>
                </Card>
                {/*<button onClick={() => this.state.getUsers()}>Get Users</button>*/}
                


            </div>

    )}
}
//




connect()(Home)