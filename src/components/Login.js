import React,{useState, 
    // useEffect
} from "react";

const Login = () => {

    //here we have 2 states for 2 form varibales
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    const handleLogin = () => {
        console.log(email, password);
    }

  return (
    <div className="login">
    <h1>Login</h1>      
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* here on onclick event we are calling the hadleLogin function */}
      <button  className="appButton" type="button" onClick={handleLogin}>
        Log In
      </button>
    </div>
  );
};

export default Login;
