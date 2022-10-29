import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('user');
    navigate('/');
  }
  return (
    <div>
        <img
            alt='logo'
            className='logo'
             src='https://yt3.ggpht.com/ytc/AKedOLR09bCpy_XTq2scU91URc0pWG0EqS_Yc_Zg-r9pBQ=s900-c-k-c0x00ffffff-no-rj' />
      {auth ? <ul className="nav-ul">
        {/* here we are not using a href because it will re-render/refresh the page */}

        <li><Link to="/">Products</Link></li>
        <li><Link to="/add">Add Products</Link></li>
        <li><Link to="/update"> Update Products</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link onClick={logout} to="/signup">Logout({JSON.parse(auth)?.name})</Link></li>
      </ul>
        :
        <ul className="nav-ul-right">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      }
    </div>
  )
}

export default Nav;