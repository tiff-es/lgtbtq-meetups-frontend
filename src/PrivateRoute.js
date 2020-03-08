
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./auth";
import {connect} from "react-redux";
import {axiosGetUsers} from "./actions/user";

const PrivateRoute = ( { component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      props.isLoggedIn === true
            ? <Component {...props} />
            : console.warn('Nope')
    )}
           />
)



const mapDispatchToProps = (dispatch) => {
    return{
        axiosGetUsers: (users) => {
            dispatch(axiosGetUsers(users))
        }
    }

}
//
// let mapStateToProps = (state) => {
//     console.log(state)
//     return {isLoggedIn: state.users.isLoggedIn}
// }

export default connect(null, mapDispatchToProps)(PrivateRoute);