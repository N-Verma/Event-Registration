import React , {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {SignUpLink} from '../Signup/signup'
import { withFirebase } from '../../Firebase';
import * as ROUTES from '../../constants/routes'
const LoginPage = () => (
    <div>
        <LoginForm/>
        <div  className="row justify-content-md-center">
        <SignUpLink/>
        </div>
        
    </div>
)
const INITIAL_STATE ={
    email:'',
    password:'',
    error:null
}
class LoginFormBase extends Component{
    constructor(props){
        super(props);
        this.state={...INITIAL_STATE}
    }
    onSubmit=(event)=>{
        event.preventDefault();
        const { email, password } = this.state;
 
        this.props.firebase.doSignInWithEmailAndPassword(String(email), String(password))
            .then(authUser => {
                    this.setState({ ...INITIAL_STATE });
                    if(authUser.user.email==='vermaisat@gmail.com'){
                        this.props.history.push(ROUTES.ADMINPATH);
                    }
                    else{
                        this.props.history.push(`/register/${authUser.user.uid}`);
                    }
                })
            .catch(error => {
                    this.setState({ error });
                });
    }

    onChange =(event)=>{
        this.setState({[event.target.name]:[event.target.value]});
    }

    render(){
        const {
            email,
            password,
            error
        } = this.state;
        
        return(
            <div className="container">
            <div className="row justify-content-md-center"> 
            <form onSubmit={this.onSubmit}>
            <h2>Login</h2>
                
                <div className="form-group">
                    <label>Email</label>
                    <input name='email' value={email}  onChange={this.onChange}
                    type="email" className="form-control" 
                    placeholder="Enter Email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input name='password' value={password}  onChange={this.onChange}
                    type="password" className="form-control"
                    placeholder="Password" />
                </div>
                <button  className="btn btn-success" type="submit">Login</button>
                {error && <p>{error.message}</p>}
            </form></div></div>
        )
    }

}

const LoginForm = withRouter(withFirebase(LoginFormBase));
export default LoginPage;
export {LoginForm};