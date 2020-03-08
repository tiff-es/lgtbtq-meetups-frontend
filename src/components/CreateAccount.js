import React from "react";
import NavBar from "./NavBar";
import {connect} from "react-redux";
import {userPostFetch} from '../actions/user'
import 'bootstrap/dist/css/bootstrap.css';
import {FormGroup, FormText} from "react-bootstrap";
import {Button} from "mdbreact";
import {Form} from "react-bootstrap";
import {CardBody, CardText} from "react-bootstrap/Card";
import {AxiosInstance as axios} from "axios";

class CreateAccount extends React.Component{

    state = {
        username: '',
        password: '',
        name: '',
        picture: '',
        bio: '',
        pronouns: ''
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });

    }



    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.userPostFetch(this.state)
        // this.props.dispatch({type: 'LOGIN', currentUser: {username: this.state.username, password: this.state.username}})    }
    }

    //wire up mapDispatchToProps

    render() {
        return(
            <div id='create-account main-container' className='modal-body'>
                <h2 id='create-account header 'className='header-raised'>Create Account</h2>
                <Form id='create-account form'onSubmit={this.handleOnSubmit}>

                    <Form.Group id='create-account form-group username'onChange={this.handleInputChange} controlId="formBasicUsername">
                        <Form.Label id='create-account form-label username'>Username</Form.Label>
                        <Form.Control id='username' type="text" placeholder="Create Username" />
                    </Form.Group>


                    <Form.Group id='create-account form-group password' onChange={this.handleInputChange} controlId="formBasicPassword">
                        <Form.Label id='create-account form-label password'>Password</Form.Label>
                        <Form.Control id='password' type="password" placeholder="Create Password" />
                    </Form.Group>
                    <br/>
                    <FormText id='create-account form-text'><h5 id='create-account tell-us-about-yourself text'>Tell Us About Yourself!</h5></FormText>

                    <Form.Group id='create-account form-group name' onChange={this.handleInputChange} controlId="formBasicName">
                        <Form.Label id='create-account form-label name'>Name</Form.Label>
                        <Form.Control id='name' type="text" placeholder="Enter Preferred Name" />
                    </Form.Group>

                    <Form.Group id='create-account form-group bio' onChange={this.handleInputChange} controlId="formBasicBio">
                        <Form.Label id='create-account form-label Bio'>Bio</Form.Label>
                        <Form.Control id='bio' type="text" placeholder="Tell Us About Yourself!" />
                    </Form.Group>

                    <Form.Group id='create-account form-group pic-url' onChange={this.handleInputChange} controlId="formBasicPicture">
                        <Form.Label id='create-account form-label pic-url'>Profile Picture</Form.Label>
                        <Form.Control id='picture' type="text" placeholder="Enter an image URL for your profile picture" />
                    </Form.Group>

                    <Form.Group id='create-account form-group pronouns' onChange={this.handleInputChange} controlId="formBasicPronouns">
                        <Form.Label id='create-account form-label pronouns'>Preferred Pronouns</Form.Label>
                        <Form.Control id='pronouns' type="text" placeholder="What are your preferred pronouns?" />
                    </Form.Group>





                    <Button id='create-account submit-btn' variant='primary' className='submitButton' type="submit"> Submit </Button>
                </Form>
            </div>


        )}

}

const mapDispatchToProps = (dispatch) => {
    return {
        userPostFetch: (userInfo) => {
            dispatch(userPostFetch(userInfo))
        }
    }
}

export default connect(null,mapDispatchToProps)(CreateAccount)