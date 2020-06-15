import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import * as ROUTES from "../constants/routes";
import {withFirebase} from '../Firebase';
import { compose } from 'recompose';
import authUserContext from './context';

const withAuth = condition => Component =>{
    class withAuth extends Component{
        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
              authUser => {
                if (!condition(authUser)) {
                  this.props.history.push(ROUTES.LOGIN);
                }
              },
            );
          }
       
        componentWillUnmount() {
            this.listener();
        }
        
        render(){
            return(
                <authUserContext.Consumer>
                    {authUser =>
                    condition(authUser) ? <Component {...this.props} /> : null
                    }
                </authUserContext.Consumer>
            )
        }
    }
    return compose(
        withRouter,
        withFirebase,
      )(withAuth);
}
export default withAuth;