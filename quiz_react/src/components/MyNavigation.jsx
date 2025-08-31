import React, { useState } from 'react'; 
import quizl from '../assets/images/quizl.png';
import '../assets/css/Navigationstyle.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { Dropdown, Image } from "react-bootstrap";

const MyNavigation=()=>
  {
    const navigate=useNavigate();
    const [user, setUser]=useState(()=> 
    {
      const storedUser=localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    });
    const isLoggedIn=!!user;
    const handleLogout=()=> 
    {
      localStorage.removeItem("user");
      setUser(null);
      alert("Logged out successfully!");
      navigate('/');
    };

    return (
      <div className='mainn'>
        <div className='name_logo'>
          <div className='heading_name'>
            <h1><strong>Programming</strong></h1>
          </div>
          <div className='logon'>
            <img src={quizl} alt="Logo" width={300} height={200} />
          </div>
        </div>
        <div className='navn'>
          <ul className="nav_link">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-active" : ""}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "nav-active" : ""}>About</NavLink></li>
            <li><NavLink to="/contactus" className={({ isActive }) => isActive ? "nav-active" : ""}>Contact</NavLink></li>
            {!isLoggedIn ? (
              <li><NavLink to="/login" className={({ isActive }) => isActive ? "nav-active" : ""}>Login</NavLink></li>
            ) : (
              <li>
                <div className="profile-section">
                  <Dropdown align="end">
                    <Dropdown.Toggle className='img_center' as={Image} src={user?.image ? `http://localhost:3000/uploads/${user.image}` : quizl} alt="Profile" roundedCircle />
                    <Dropdown.Menu>
                      <Dropdown.Item as={NavLink} to="/vprofile">My Profile</Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/test-list">View Quiz History</Dropdown.Item>
                      <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
};

export default MyNavigation;
