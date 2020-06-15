import React, { Component } from 'react';
import { withFirebase } from '../../Firebase';
// import Preview from '../Preview/preview';
import axios from 'axios';
import {withRouter,Link} from 'react-router-dom';
const Register=()=>(
    
    <RegisterBase/>
)

const INITIAL_STATE = {
    username:'',
    email:'',
    mobile:'',
    city:'',
    state:'',
    zip:'',
    url:'',
    group:'',
    load:false
}

class RegisterForm extends Component{
    constructor(props){
        super(props);
        this.state={...INITIAL_STATE}
    }
    submit=(event)=>{
        event.preventDefault();
        const auth = this.props.authUser;
        console.log(auth);
        const users = {
            
            username:this.state.username,
            email:this.state.email,
            mobile:this.state.mobile,
            city:this.state.city,
            state:this.state.state,
            zip:this.state.zip,
            url:this.state.url,
            group:this.state.group
        }
            
        axios.post("https://admin-form-16a5a.firebaseio.com/users.json",users)
        .then((res)=>{
            console.log("Uploaded Successfully")
            this.setState({load:true});
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    onChange =(event)=>{
        this.setState({[event.target.name]:[event.target.value]});
    }
    render(){
        const {
            
            username,
            email,
            mobile,
            city,
            state,
            zip,
            url,
            group
        } = this.state

        if(this.state.load){
            return(
                <div className="alert alert-success" role="alert">
                    Successfully Registered for the Event
                </div>
            )
        }
        return(
            <div className="container">
                <h2>Registration Form</h2>
                <form onSubmit={this.submit}>
                <div className="row">
                    <div className="form-group col-md-7 mb-3">
                        <label>FullName</label>
                        <input type="text" className="form-control" name='username' value={username} 
                        onChange={this.onChange}
                        placeholder="Enter your fullname" />
                    </div></div>

                    <div className="row">
                        <div className="form-group col-md-7 mb-3">
                            <label>Email</label>
                            <input type="email" className="form-control"  name='email' value={email} 
                            onChange={this.onChange}
                            placeholder="Enter Email" />
                        </div>
                        <div class="form-group col-md-7 mb-3">
                            <label>Image Url</label>
                            <input type="text" className="form-control" name='url' value={url}
                            onChange={this.onChange}
                            placeholder="Enter Image URL" />
                        </div>
                    </div>
                    <div className="row">
                    <div className="form-group col-md-7 mb-3">
                        <label>Mobile Number</label>
                        <input type="text" className="form-control" name='mobile' value={mobile} 
                        onChange={this.onChange}
                        placeholder="Enter Mobile Number" />
                    </div></div>
                    <div className="form-row">
                        <div className="form-group col-md-6 mb-3">
                            <label>City</label>
                            <input type="text" className="form-control" name='city' value={city} 
                            onChange={this.onChange}
                            placeholder="City" />
                        </div>
                        <div className="form-group col-md-3 mb-3">
                            <label>State</label>
                            <input type="text" className="form-control" name='state' value={state} 
                            onChange={this.onChange}
                            placeholder="State" />
                        </div>
                        <div className="form-group col-md-3 mb-3">
                            <label>Zip Code</label>
                            <input type="text" className="form-control" name='zip' value={zip} 
                            onChange={this.onChange}
                            placeholder="ZIP CODE" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name='group' value={group} 
                            onChange={this.onChange} />
                            <label className="form-check-label">Self</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name='group' value={group} 
                            onChange={this.onChange} />
                            <label className="form-check-label">Group</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name='group'  value={group} 
                            onChange={this.onChange} />
                            <label className="form-check-label">Corporate</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name='group'  value={group} 
                            onChange={this.onChange} />
                            <label className="form-check-label">Others</label>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        {/* <button className="btn btn-primary"></button> */}
                    </div>        
                </form>
            </div>
        )
    }
}
const RegisterBase = withRouter(withFirebase(RegisterForm));
export default Register;
export {RegisterBase};