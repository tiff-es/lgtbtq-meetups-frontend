// import React, {useState} from 'react';
// import './assets/css/App.css';
// import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
// import {connect} from "react-redux";
// import Login from "./components/Login";
// import createHistory from "history/createBrowserHistory";
// import Home from "./components/Home";
// import CreateAccount from "./components/CreateAccount";
// import CreateMeetup from "./components/CreateMeetup";
// import UsersContainer from "./containers/UsersContainer";
//
// import NavBar from "./components/NavBar"
// import MeetupsContainer from './containers/MeetupsContainer'
//
// import MapComponent from "./components/MapComponent";
// import {AuthContext} from "./auth";
// import PrivateRoute from "./PrivateRoute";
//
//
// function App(props) {
//     // localStorage.getItem('token') === nil ? :
//
//     return (
//             // <BrowserRouter history={history}>
//             //     <div>
//             //         <NavBar className='navbar'/>
//             //
//             //         <Switch>
//             //             <Route path='/meetups' component={MeetupsContainer} />
//             //
//             //             <Route exact path="/" component={Home}/>
//             //             <Route path="/createaccount" component={CreateAccount}/>
//             //             <Route path="/createmeetup" component={CreateMeetup}/>
//             //
//             //             <Route path="/login" component={Login}/>
//             //             {/* Wrap 37-42 in conditional to see if token is in localStorage otherwise route to login*/}
//             //             <Route path='/users' component={UsersContainer}/>
//             //             {/*<Route path='/meetups' component={MeetupsContainer}/>*/}
//             //             <Route path='/map' component={MapComponent}/>
//             //             <Route path="/*" component={() => 'NOT FOUND'}/>
//             //         </Switch>
//             //     </div>
//             // </BrowserRouter>
//
//     )
//
// }
//
// const mapStateToProps = (state) => {
//     console.log(state)
//
//     return {
//         isLoggedIn: state.users.isLoggedIn
//         // isLoggedIn: state.currentUser
//     }
// }
//
// export default connect(mapStateToProps)(App);
