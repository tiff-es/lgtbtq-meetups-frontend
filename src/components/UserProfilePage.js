
import React from "react";
import NavBar from "./NavBar";
import {connect} from "react-redux";
import {CardTitle, MDBCardBody, MDBCardHeader, MDBCardTitle} from "mdbreact";
import {Card} from "mdbreact";
import {getMeetupLatLng} from "../actions/meetup";
import {getProfileFetch, getUsers, loginUser, saveUser} from "../actions/user";
export default class UserProfilePage extends React.Component{
    // state = { users: []
    //     // username: '',
    //     //    password: ''
    // }

    componentDidMount() {
        this.props.getProfileFetch()

        console.log(this.props.currentUser)

    }

    render() {
        console.log(this.props.currentUser)
        return(
            <div id='profile main-container'>
                <Card id='home-card'>
                    <MDBCardTitle className='card-header text-lg-left' align='center' id='home-card header'><h2>My Profile</h2></MDBCardTitle>
                    <MDBCardHeader className='card-header'>{`Welcome ${this.props.currentUser.name}`}</MDBCardHeader>
                    <MDBCardBody className='card-body'>
                        <p>

                        </p>
                    </MDBCardBody>
                </Card>
                {/*<button onClick={() => this.state.getUsers()}>Get Users</button>*/}



            </div>

        )}
}
//
const mapStateToProps = (state) => {
    return {
       currentUser: state.currentUser.userInfo
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        getProfileFetch: (user) => {
            dispatch(getProfileFetch(user))
        }
    }
}


connect(mapDispatchToProps, mapStateToProps)(UserProfilePage)