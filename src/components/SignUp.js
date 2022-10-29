import React,{useState, useEffect} from "react";
import axios from "axios";
import { 
    
    useNavigate } from "react-router-dom";
// ask rahul ?
// when and how redirect and useNavigate is used ?
// and what is difference between these two ?

const SignUp=()=>{
        
    //here we have 3 states for 3 form varibales
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    //ask rahul ???
    //whether all these fileds can be put in one usestate in form of oject or array
    //and which approach will be good
    const navigate = useNavigate();
    useEffect(() => {
      //get the user in localStorage
      //if it exists means user is signed up we redirect to home page
      console.log("useEffect from signup called");  
      const auth = localStorage.getItem('user');
      if(auth){
        navigate('/');
      }
      //Ask rahul ?????
      //how to use logger in frontend and backend ?
      //ask rahul ?????
      //how to use useEffect and how many time useEffect will render here ?
    },)
    
    //Ask rahul whether this function is ok or not
    const collectData = async() =>{
        const baseUrl = "http://localhost:8000/register";
        const postData = {name,email,password};
        const result = await axios.post(baseUrl, postData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            // also ask rahul ????
            // meaning of Accept, Content-Type charset=UTF-8

        });
        let data = result.data;    
        console.log(data);
        
        //here data is in form of object, to store the object in localStorage,
        //we first need to convert te object into the string
        localStorage.setItem("user", JSON.stringify(data));
        navigate('/login');
    }

    return(
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" placeholder="Enter Name"
            value={name} onChange={(e)=>setName(e.target.value)}
             />
            <input className="inputBox" type="text" placeholder="Enter Email" 
            value={email} onChange={(e)=>setEmail(e.target.value)}
            />
            <input className="inputBox" type="password" placeholder="Enter password"
            value={password} onChange={(e)=>setPassword(e.target.value)}
            />
            {/* here on onclick event we are calling the collectData function */}
            <button onClick={collectData} className="appButton" type="button">Sign Up</button>
        </div>
    )
}
export default SignUp;