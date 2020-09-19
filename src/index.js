import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider, connect} from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from "./store";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
import MeetupsContainer from "./containers/MeetupsContainer";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import CreateMeetup from "./components/CreateMeetup";
import Login from "./components/Login";
import UsersContainer from "./containers/UsersContainer";
import MapComponent from "./components/MapComponent";
import history from "./history";
import {AUTHENTICATED, SAVE_USER} from "./actions/actionTypes";
import requireAuth from "./components/hoc/RequireAuth";
import noRequireAuth from "./components/hoc/NoRequireAuth";
import LoginRequired from "./components/LoginRequired";
import UserProfilePage from "./components/UserProfilePage";
import { PersistGate } from 'redux-persist/integration/react'
import {useHistory} from "react-router";
const store = configureStore()

// moved userToken to App && changed API_URL
// const API_URL =' https://lgbtq-meetup-api.herokuapp.com/'
const API_URL =' http://localhost:3000/'
]

ReactDOM.render(
    <Provider store={store}>
        {/*<PersistGate loading={null} persistor={persistor} >*/}
        <BrowserRouter history={history} apiUrl={API_URL}>
            <App store={store}/>

            { /*VVV VV V  VV      MOVED TO APP  VV     VV VV VV */ }
            {/*    <NavBar className='navbar'/>*/}
            {/*        <Route path='/meetups' component={requireAuth(MeetupsContainer)} />*/}
            {/*    <Route path='/my_profile' component={requireAuth(UserProfilePage)} />*/}

            {/*    <Route exact path="/" component={requireAuth(Home)}/>*/}
            {/*        <Route path="/createaccount" component={noRequireAuth(CreateAccount)}/>*/}
            {/*        <Route path="/createmeetup" component={requireAuth(CreateMeetup)}/>*/}
            {/*        <Route path="/login" component={noRequireAuth(Login)}/>*/}
            {/*        /!* Wrap 37-42 in conditional to see if token is in localStorage otherwise route to login*!/*/}
            {/*        <Route path='/myprofile' component={requireAuth(UserProfilePage)}/>*/}
            {/*        /!*<Route path='/meetups' component={MeetupsContainer}/>*!/*/}
            {/*        <Route path='/map' component={MapComponent}/>*/}
            {/*    <Route path='/loginrequired' component={noRequireAuth(LoginRequired)}/>*/}

            {/*    <Route  path="/*" component={Home}>*/}
            {/*            <Redirect to={'/'}/>*/}
            {/*        </Route>*/}
            {/*</App>*/}
        </BrowserRouter>
        {/*</PersistGate>*/}
    </Provider>,
    document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();