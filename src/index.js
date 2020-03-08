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
import createHistory from "history/createBrowserHistory";
import {AUTHENTICATED} from "./actions/actionTypes";
import requireAuth from "./components/hoc/RequireAuth";
import noRequireAuth from "./components/hoc/NoRequireAuth";
import LoginRequired from "./components/LoginRequired";
import UserProfilePage from "./components/UserProfilePage";

const store = configureStore()
const history = createHistory()
const userToken = localStorage.getItem('token')

if(userToken) {
    store.dispatch({ type: AUTHENTICATED });
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <div>
                <NavBar className='navbar'/>
                    <Route path='/meetups' component={requireAuth(MeetupsContainer)} />
                    <Route exact path="/" component={requireAuth(Home)}/>
                    <Route path="/createaccount" component={noRequireAuth(CreateAccount)}/>
                    <Route path="/createmeetup" component={requireAuth(CreateMeetup)}/>
                    <Route path="/login" component={noRequireAuth(Login)}/>
                    {/* Wrap 37-42 in conditional to see if token is in localStorage otherwise route to login*/}
                    <Route path='/myprofile' component={requireAuth(UserProfilePage)}/>
                    {/*<Route path='/meetups' component={MeetupsContainer}/>*/}
                    <Route path='/map' component={MapComponent}/>
                <Route path='/loginrequired' component={noRequireAuth(LoginRequired)}/>

                <Route  path="/*" component={Home}>
                        <Redirect to={'/'}/>
                    </Route>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();