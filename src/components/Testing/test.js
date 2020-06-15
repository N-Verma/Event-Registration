import React, { Component } from 'react';
import axios from 'axios';

class test extends Component{
    state={
        user:'siddhant',
        password:'siddhant12345'
    }
    clickedHandler=()=>{
        const users={
            username:this.state.user,
            password:this.state.password
        }
        axios.post("https://admin-form-16a5a.firebaseio.com/users.json",users)
        .then(res=>console.log(res))
        .catch(error=>console.log(error))
    }
    render(){
        return(
            <div>
                <button type="submit" onClick={this.clickedHandler} >Click</button>
            </div>
        )
    }
}

export default test;