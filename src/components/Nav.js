import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup');
  }
  return (
    
    <div>
        <ul className="nav-ul">
            {/* here we are not using a href because it will re-render/refresh the page */}
            
               <li><Link to="/">Products</Link></li>
               <li><Link to="/add">Add Products</Link></li>
               <li><Link to="/update"> Update Products</Link></li>
               <li><Link to="/profile">Profile</Link></li>
               <li><Link to="/login">Login</Link></li>
               {/* if auth exists means if user exists in localstorage show the logout button else show the SignUp Button */}
               <li>{auth?<Link onClick={logout} to="/signup">Logout</Link>:<Link to="/signup">Sign Up</Link>}</li>
        </ul>

    </div>
  )
}

export default Nav;