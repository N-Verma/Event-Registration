import React , {Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../../Firebase';

const SignUpPage = () => (
    <div>
        <SignUpForm/>
    </div>
)
const INITIAL_STATE ={
    username:'',
    email:'',
    pass1:'',
    pass2:'',
    error:null,
}
class SignUpFormBase extends Component{
    constructor(props){
        super(props);
        this.state={...INITIAL_STATE}
    }
    onSubmit=(event)=>{
        event.preventDefault();
        const { email, pass1 } = this.state;
 
        this.props.firebase.doCreateUserWithEmailAndPassword(String(email), String(pass1))
            .then(authUser => {
                    this.setState({ ...INITIAL_STATE });
                    this.props.history.push(`/register/${authUser.user.uid}`);
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
            username,
            email,
            pass1,
            pass2,
            error
        } = this.state;
        // const isInvalid =
        //     pass1 !== pass2 ||
        //     pass1 === '' ||
        //     email === '' ||
        //     username === '';
        return(
            <div className="container">
            <div className="row justify-content-md-center"> 
            <form onSubmit={this.onSubmit}>
            <h2>Sign Up</h2>
                <div className="form-group">
                    <label>Username</label>
                    <input name='username' value={username}  onChange={this.onChange}
                    type="text" className="form-control"
                    placeholder="Enter Username" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input name='email' value={email}  onChange={this.onChange}
                    type="email" className="form-control"
                    placeholder="Enter Email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input name='pass1' value={pass1}  onChange={this.onChange}
                    type="password" className="form-control"
                    placeholder="Password" />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input name='pass2' value={pass2}  onChange={this.onChange}
                    type="password" className="form-control" 
                    placeholder="Confirm Password" />
                </div>
                <button  className="btn btn-primary" type="submit">Submit</button>
                {error && <p>{error.message}</p>}
            </form></div></div>
        )
    }

}

const SignUpLink = () => (
    <p>
      Don't have an account? <Link to={ROUTES.SIGNUP}>Sign Up</Link>
    </p>
);
const SignUpForm = withRouter(withFirebase(SignUpFormBase));
export default SignUpPage;
export {SignUpForm,SignUpLink};