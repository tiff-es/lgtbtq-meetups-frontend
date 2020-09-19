import React, {Component} from "react";
import {Toolbar, ButtonGroup, MenuList, GridListTileBar, CardHeader, TableHead} from "@material-ui/core";
import {Route, NavLink, Link,Switch, BrowserRouter as Router} from "react-router-dom";
import pride from '../assets/img/pride.jpg'
import  {MDBNavbar} from "mdbreact";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/css/navbar.css'
import {NavbarBrand, NavDropdown} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import connect from "react-redux/lib/connect/connect";
import {clearMessage, userLoginFetch} from "../actions/user";
import Icon from '../assets/img/LGBTQ-meetups-icons_1_black_600-02.png'
export default class NavBar extends Component {
state = {
    token: null
}
componentDidMount() {
    this.tokenTest()
}
    tokenTest(){
      const  token = localStorage.getItem('token')
        {token ? this.setState({token: true}) :  this.setState({token: false})}
    }

    render(){
        const login = () => {  return(              <NavLink to="/login"><Button id='logIn'className='nav-pills'><div className='nav-fill'>Login</div></Button></NavLink>
        )}

        const logOut = () => {  return(              <a><Button onClick={localStorage.removeItem('token') && this.props.history.push('/loginrequired')} className='nav-fill'><div className='nav-link font-weight-bold black-text'>Log Out</div></Button></a>
        )}


        return(
            <MDBNavbar id='navbar' className='nav-flex-icons aqua-gradient'>

                    <NavbarBrand>
                        <img src={Icon} style={{width:75, marginTop: -7}} />
                        LGBTQ+ Meetups!
                    </NavbarBrand>

                {this.loggedIn}
                <NavLink to="/"><Button className='nav-pills'><div className='nav-fill'>Home</div></Button></NavLink>
                <NavLink to="/createaccount"><Button className='nav-pills'><div className='nav-fill '>Create Account</div></Button></NavLink>
                { login()  }
                <NavLink to="/meetups"><Button className='nav-pills'><div className='nav-fill'>Meetups</div></Button></NavLink>

                <NavLink to="/createmeetup"><Button className=' nav-pills '><div className='nav-fill'>Create Meetup</div></Button></NavLink>
                {/*<NavLink to='/myprofile'><Button className='btn btn-default'><div className='nav-link'>My Profile </div> </Button> </NavLink>*/}
                {this.state.token ? logOut() : ''}

            </MDBNavbar>



        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.users.authenticated
    }
}


connect (mapStateToProps)(NavBar)