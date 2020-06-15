import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import  "./landing.css";

const LandingPage = () => (
  <div className="container">
    <h1 className="Heading">Event Registration</h1>
    <div className="row">
        <Link className="btn btn-success" style={{margin:"10px"}} to={ROUTES.LOGIN}>Login</Link>
        <Link className="btn btn-primary" style={{margin:"10px"}} to={ROUTES.SIGNUP}>Signup</Link>
    </div>
  </div>
);
 

 
export default LandingPage;