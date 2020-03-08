import React from "react";
import {Card} from "react-bootstrap";
import Moment from 'react-moment'
import MapComponent from "./MapComponent";
import {connect} from 'react-redux'
import {getMapDefault, getMeetupLatLng} from "../actions/meetup";
import {MDBCard, MDBCardBody, MDBCardHeader, MDBCardTitle} from "mdbreact";

class MeetupCard extends React.Component {
// state = {
//   liked: false
// }
    render() {
        // const handleClick = () => {
        //   this.setState((state) => ({
        //       liked: !state.liked
        //   }))
        //     console.log('liked',this.state.liked)
        //
        // }
        return (
            <MDBCard className='card'>

                <MDBCardHeader className='header'><h3><b>{this.props.name}</b></h3></MDBCardHeader>
                <MDBCardTitle className='header'><h5><b>{this.props.info}</b></h5></MDBCardTitle>
                {/*<button onClick={handleClick}>{this.state.liked ? '♥' : '♡'}</button>*/}
                <MDBCardBody className='header'> Location: <b>{this.props.location}</b></MDBCardBody>
                <MapComponent lat={this.props.lat} lon={this.props.lon} meetup={this.props}/>
                {/* ^^  latitude, longitude, this.props passed down via this.props  ^^ */}
                <MDBCardBody className='body'>Start Time: <b><Moment date={this.props.time} format='hh:mm A'> </Moment></b>
                    <br/>Date: <b><Moment format='ddd MMM DD, YYYY'>{this.props.date}</Moment></b>

                </MDBCardBody>

            </MDBCard>

        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//
//     return {
//         getMapCoordinates: (meetup) => {
//             dispatch(getMeetupLatLng(meetup))
//         }
//     }
// }
export default MeetupCard