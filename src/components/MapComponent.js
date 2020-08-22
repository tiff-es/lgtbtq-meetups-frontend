import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import React,  { useState } from "react";
import {connect} from "react-redux";
import {axiosGetUsers} from "../actions/user";
import {getMapDefault, getMeetupLatLng} from "../actions/meetup";
import mapboxgl from "mapbox-gl";
import icon from '../assets/img/pindrop-512.png'
class MapComponent extends React.Component {
state = {
    meetup: {}
}
    componentDidMount() {
        this.props.getMapDefault()
    }



    render() {
        console.log(this.props.lat)
        const image = new Image(30, 30);
        image.src = icon
        const images = ['myImage', image];
        return (


            <Map
                zoom={this.props.map.zoom}
                center={[this.props.lon, this.props.lat]}
                   // ^^ Center from Lat/Lon that was recieved from MeetupCard  ^^
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: this.props.map.height,
                    width: this.props.map.width
                }}
            >

                <Layer type="symbol" id="symbol" layout={{ 'icon-image': 'myImage' }} images={images}>
                    {/*<  ^^   Feature coordinates={[this.props.map.lon, this.props.map.lat]}   ^^   />*/}
                    <Feature point={[this.props.lon, this.props.lat]} coordinates={[this.props.lon, this.props.lat]}/>
                {/*   ^^   Lon/Lat set on pointer icon   ^^   */}
                </Layer>
            </Map>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        map: state.meetups.map,
        coordinates: state.meetups.coordinates
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        getMapDefault: (mapParams) => {
            dispatch(getMapDefault(mapParams))
        }
    }
}

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoidGlmZmFueWFicmFoYW0iLCJhIjoiY2tlNHl0bmc0MDBnYjJxdGZxajY4dmxuOSJ9.o0VWhCTv4_hvqVVXobVuoQ"})


export default connect( mapStateToProps,mapDispatchToProps)(MapComponent)
