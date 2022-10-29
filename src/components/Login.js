import React, {
    useState,
    useEffect
} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

    //here we have 2 states for 2 form varibales
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        //get the user in localStorage
        //if it exists means user is signed up we redirect to home page
        console.log("useEffect from login called");
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
        //Ask rahul ?????
        //how to use logger in frontend and backend ?
        //ask rahul ?????
        //how to use useEffect and how many time useEffect will render here ?
    },[])
    //[] dependancy means it will render only when when component mounts
    const handleLogin = async () => {
        const baseUrl = "http://localhost:8000/login";
        const postData = { email, password };
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
        navigate('/');
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
            <button className="appButton" type="button" onClick={handleLogin}>
                Log In
            </button>
        </div>
    );
};

export default Login;
