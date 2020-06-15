import React from 'react'
import * as ROUTES from '../constants/routes'
import { Link } from 'react-router-dom';
import Logout from '../Pages/Login/logout';
import {authUserContext} from '../Session'
const Navbar=({authUser})=>(
    
    <div>
        <authUserContext.Consumer> 
            {authUser =>
                authUser ? <NavWithAuth /> : <NavWithoutAuth />
            }
        </authUserContext.Consumer>
    </div>
)


const NavWithoutAuth = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand">FORM</a>
                <ul className="navbar-nav mr-auto ">
                    <li className="nav-item active">
                        <Link className="nav-link" to={ROUTES.LANDING}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={ROUTES.SIGNUP}>Sign Up</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={ROUTES.LOGIN}>Login</Link>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link">Contacts</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};


const NavWithAuth = (props) => {
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand">FORM</a>
                <ul className="navbar-nav mr-auto ">
                    <li className="nav-item active">
                        <Link className="nav-link" to={ROUTES.REGISTER}>Home</Link>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link">Contacts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><Logout/></a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};


export default Navbar;