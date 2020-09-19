import React, {useState} from 'react';
import './assets/css/App.css';
import {connect} from "react-redux";
import NavBar from "./components/NavBar";
import {Redirect, Route} from "react-router-dom";
import requireAuth from "./components/hoc/RequireAuth";
import MeetupsContainer from "./containers/MeetupsContainer";
import UserProfilePage from "./components/UserProfilePage";
import Home from "./components/Home";
import noRequireAuth from "./components/hoc/NoRequireAuth";
import CreateAccount from "./components/CreateAccount";
import CreateMeetup from "./components/CreateMeetup";
import Login from "./components/Login";
import MapComponent from "./components/MapComponent";
import LoginRequired from "./components/LoginRequired";
import {getProfileFetch} from "./actions/user";
import {AUTHENTICATED, SAVE_USER} from "./actions/actionTypes";

// cons

class App extends React.Component {
state = {
    currentUser: null
}


    componentDidMount = () => {
        this.props.getProfileFetch()
        console.log(this.props)
    //    this seems to be properly fetching profile after migration from index
    }

    render() {
        const currentUserCallback = (currentUser) =>{
            debugger
        }

        return (

            <div>
                <NavBar className='navbar'/>
                <Route path='/meetups' component={requireAuth(MeetupsContainer)}/>
                <Route path='/my_profile' component={requireAuth(UserProfilePage)}/>

                <Route exact path="/" component={requireAuth(Home)} />
                <Route path="/createaccount" component={noRequireAuth(CreateAccount)}/>
                <Route path="/createmeetup" component={requireAuth(CreateMeetup)}/>
                <Route path="/login"currentUserCallback={()=>this.currentUserCallback} component={noRequireAuth(Login)}/>
                {/* Wrap 37-42 in conditional to see if token is in localStorage otherwise route to login*/}
                <Route path='/myprofile' currentUser={this.props.currentUser} component={requireAuth(UserProfilePage) }/>
                {/*<Route path='/meetups' component={MeetupsContainer}/>*/}
                <Route path='/map' component={MapComponent}/>
                <Route path='/loginrequired' component={noRequireAuth(LoginRequired)}/>

                <Route path="/*" component={Home}>
                    <Redirect to={'/'}/>
                </Route>
            </div>
        )

    }
}
const mapStateToProps = state => ({
    currentUser: state.users.currentUser
})

const mapDispatchToProps = dispatch => ({
    getProfileFetch: () => dispatch(getProfileFetch())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
