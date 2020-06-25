import React from "react";
import NavBar from "./NavBar";
import {connect} from "react-redux";
import {CardTitle, MDBCardBody, MDBCardHeader, MDBCardTitle} from "mdbreact";
import {Card} from "mdbreact";
import {Jumbotron, Button,Carousel} from "react-bootstrap";
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
                {/*<Card id='home-card'>*/}
                {/*    <MDBCardTitle className='card-header text-lg-left' align='center' id='home-card header'><h2>Welcome to LGBTQ Meet!</h2></MDBCardTitle>*/}
                {/*    <MDBCardHeader className='card-header'><h4><i>About Us</i></h4></MDBCardHeader>*/}
                {/*        <MDBCardBody className='card-body'>*/}
                {/*            <p>*/}
                {/*                <h5>LGBTQ+ Meet was created with the goal of making a safe space for all LGBTQ+ people. </h5>*/}
                {/*                Everyone,*/}
                {/*                no matter their sexual preference or gender identity, are welcome. Here, users can find meetups near them to hang out with like-minded people. Creating a meetup  is effortless. Simply create an account, and create a custom meetup with a title, description, map location, date/time, and even a category (ex.transgender/lesbian/non-binary, etc.).*/}
                {/*            </p>*/}
                {/*        </MDBCardBody>*/}
                {/*</Card>*/}
                {/*<button onClick={() => this.state.getUsers()}>Get Users</button>*/}
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1573225063823-21ec7ba08e64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1645&q=80"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Queer & Proud!</h3>
                            <p>Credit: "Queer & Proud" - Pride parade in Geneva (Switzerland), July 2019. - Delia Giandeini</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1579039437500-824bdcbb93fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Site is built by a proud trans developer, created with care, for the queer community</h3>
                            <p>Credit: @kylewilliamurban (Unsplash)</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1573044208566-d7c4f700dd3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1645&q=80"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Be your true self, be proud, meet supportive queer friends in your community!</h3>
                            <p>Credit: July 7th 2019, pride parade day in Geneva - Delia Giandeini(Unsplash) </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel><br>
    </br>
        <Jumbotron>

            <h5>This is my final project from Flatiron School coding bootcamp, I'm currently adding features, redesigning, and polishing the app. This is still a concept at the moment, but I hope to create a safe space for LGBTQ+ people to meet here.</h5>
            <br>
            </br>
            <h4>This site is currently being developed, find out more about the development process & upcoming features below! </h4>

            <p>
                <Button variant="primary" href={'https://github.com/boostinwrx/lgtbtq-meetups-frontend'}>Learn more</Button>
            </p>
        </Jumbotron>

            </div>


    )}
}
//




connect()(Home)