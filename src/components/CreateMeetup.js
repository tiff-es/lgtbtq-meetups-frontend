import React from "react";
import axios from 'axios'
import {connect} from 'react-redux'
import {addMeetup, updateMeetup, getCategories, axiosGetCategories} from "../actions/meetup";
import {Form, ButtonGroup, FormCheck} from "react-bootstrap";
import {Button} from "mdbreact";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import MapboxAutocomplete from 'react-mapbox-autocomplete';

class CreateMeetup extends React.Component{
    // state = {
    //     location: []
    // }
    _suggestionSelect = (result, lat, lng, text) => {
       console.log(result)
        this.handleLocationChange(result, lat, lng)
    }
    handleLocationChange = (result, lat, lng) => {
        this.setState({
            location: result,
            lat: lat,
            lon: lng
        })
    }
// ON SELECTION SELECT => _suggestionSelect handl(result, lat, lon) handleLocationChange, setState with result, lat, lon
   // omSubmit, post meetup
    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    postMeetup = (newMeetup) => {
        axios.post('http://localhost:3000/api/meetups', {newMeetup: newMeetup})
            .then(response => {
                this.props.addMeetup(response.data)
            })
            .catch(e => console.warn(e))
    }
    handleOnSubmit = (event) => {
        event.preventDefault()
        this.postMeetup(this.state)
        this.props.addMeetup(this.state)
    }


    componentDidMount() {
     this.props.axiosGetCategories()
    }

    render(){
        return(

            //         <div class='card-body'>
            //             Location: {meetup.location}
            //             Time: {meetup.time}
            //             Date: {meetup.date}
            //             Category: {meetup.category}
            //             Info: {meetup.info}

            <div id='create-meetup main-container' className='modal-body'>
                <h2  id='create-meetup header 'className='header-raised'>Create A New Meetup</h2>
                <Form id='create-meetup form' onSubmit={this.handleOnSubmit}>

                    <Form.Group id='create-meetup form-group name'onChange={this.handleInputChange}>
                        <Form.Label id='create-meetup form-label name'>Meetup Name</Form.Label>
                        <Form.Control id='name' type="text" placeholder="Meetup Name" />
                    </Form.Group>


                    <Form.Group id='create-meetup form-group location' controlId="formBasicUsername">
                        <Form.Label id='create-meetup form-label location'>Location</Form.Label>
                        <MapboxAutocomplete publicKey='pk.eyJ1IjoidGlmZmFueWFicmFoYW0iLCJhIjoiY2s1N2x6MnRpMDU3MjNscHMxdGRhcTZ6NiJ9.7D9NUZEVIS2O86VocLUXPQ'
                                            inputClass='form-control search'
                                            id='location'
                                            onSuggestionSelect={this._suggestionSelect}
                                            country='us'
                                            resetSearch={false}
                        />
                    </Form.Group>

                    <Form.Group id='create-meetup form-group time'onChange={this.handleInputChange}>
                        <Form.Label id='create-meetup form-label time'>Time</Form.Label>
                        <Form.Control id='time' type="time" placeholder="Choose Time" />
                    </Form.Group>
                    <Form.Group id='create-meetup form-group date'onChange={this.handleInputChange}>
                    <Form.Label id='create-meetup form-label date'>Date</Form.Label>
                    <Form.Control id='date' type="date" placeholder="Choose Date" />
                </Form.Group>

                    <Form.Group id='create-meetup form-group info'onChange={this.handleInputChange}>
                        <Form.Label id='create-meetup form-label category'>Event Category:</Form.Label>
                        <br/>

                        <Form.Check  inline label='Lesbian' type='radio' id='category' value='Lesbian'/>
                        <Form.Check  inline label='Gay' type='radio' id='category' value='Gay'/>
                        <Form.Check  inline label='Transgender/Genderqueer' type='radio' id='category' value='Transgender/Genderqueer'/>
                    </Form.Group>

                    <Form.Group id='create-meetup form-group info'onChange={this.handleInputChange}>
                        <Form.Label id='create-meetup form-label info'>Meetup Info</Form.Label>
                        <Form.Control id='info' type="text" placeholder="Meetup Info" />
                    </Form.Group>

                    <Button id='create-meetup submit-btn' variant='primary' className='submitButton' action={addMeetup()} type="submit"> Submit </Button>

                </Form>
            </div>
        )
    }


}


const mapStateToProps = (state) => {
    return{
        newMeetup: state.newMeetup,
        categories: state.categories

    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addMeetup: (newMeetup) => {
            dispatch(addMeetup(newMeetup))
        },
        axiosGetCategories: (categories) => {
            dispatch(axiosGetCategories(categories))

        }
     }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateMeetup)