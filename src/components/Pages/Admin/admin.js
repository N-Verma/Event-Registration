import React,{useState, Component} from 'react';
 import axios from 'axios';
import * as ROUTES from '../../constants/routes';
import { faEnvelope,faPhoneAlt, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AdminPage extends Component {
  constructor(props){
    super(props);
    this.state={
      list:[]
    }
  }
 componentDidMount=()=>{
   axios.get("https://admin-form-16a5a.firebaseio.com/users.json")
   .then((res)=>{
     var arr=[];
     var k = Object.keys(res.data);
     for(var i=0;i<k.length;i++){
       arr.push(res.data[k[i]]);
     }
     this.setState({list:arr});
   })
   .catch((err)=>{
     console.log(err);
   })
 }
 render(){
  var usersList = this.state.list.map((item,i)=>{
    return(
      
      <div className="col-md-4" key={i} >
      <div className=" card border-primary w-80 text-white bg-success mb-3" >
        <img className=" card-img-top" style={{height:"250px"}} src={item.url[0]} alt="profile pic"/>
         <h5 className="card-header">{item.username[0]}</h5>
        <div className="card-body">
         <p className="card-text"><FontAwesomeIcon icon={faEnvelope}/> {item.email[0]}</p>
         <p className="card-text"><FontAwesomeIcon icon={faPhoneAlt}/> {item.mobile[0]}</p>
         <p className="card-text"><FontAwesomeIcon icon={faAddressCard}/> {item.city[0]}, {item.state[0]}</p>
        </div>
      </div>
      </div>
      
    )
  })
  return(
  <div className="container">
    <div className="row" style={{paddingTop:"10px"}}>
      {usersList}
    </div>
  </div>
  )}
};
 
export default (AdminPage);