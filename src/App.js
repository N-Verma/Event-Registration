import React, { Component } from 'react';
import Navbar from './components/Navbar/navbar';
import Register from './components/Pages/Register/register';
import './App.css';
import * as ROUTES from './components/constants/routes';
import {withFirebase} from './components/Firebase'
import LOGIN from './components/Pages/Login/login';
import SIGNUP from './components/Pages/Signup/signup';
import LANDING from './components/Pages/Landing/landing';
import ADMIN from './components/Pages/Admin/admin';
import {authUserContext} from './components/Session';
import { BrowserRouter as Router,Route } from 'react-router-dom';
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            forms:[],
            authUser:null
        }
    }
    componentDidMount(){
        this.listener=this.props.firebase.auth.onAuthStateChanged(user=>{
            user?this.setState({authUser:user}):this.setState({authUser:null});
        })
    }
    componentWillUnmount() {
        this.listener();
    }
    
    render(){
        return(
            <authUserContext.Provider value={this.state.authUser} >
            <Router>
                <Navbar/>
                <Route exact path={ROUTES.LANDING} component={LANDING}/>
                <Route  path={ROUTES.REGISTER} component={Register} />
                <Route exact path={ROUTES.LOGIN} component={LOGIN} />
                <Route exact path={ROUTES.SIGNUP} component={SIGNUP} />
                <Route exact path={ROUTES.ADMINPATH} component={ADMIN}/>
            </Router>
            </authUserContext.Provider>
            
        )
    }

}

export default withFirebase(App);
