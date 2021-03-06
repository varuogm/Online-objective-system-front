import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import {FaBars,FaTimes} from 'react-icons/fa'
import './Navbar.css';
import ContactUs from './pages/ContactUs';
import { IconContext } from 'react-icons/lib';
function Navbar() {
    const [click,setClick]= useState(false)

    const handleClick=()=> setClick(!click)
    const closeMobileMenu=()=> setClick(false)

    return (
        <>
     
        <div className="navbar">
            <div className="navbar-container container">
            <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
               
              Online Exams
            </Link>
           
            <ul className={click ? 'nav-menu active':'nav-menu'}>
               
                <li className="nav-item">
                <Link to="/ContactUs" className="nav-links" onClick={closeMobileMenu}>
                Contact Us
                </Link>
                </li>
               
                <li class="nav-item dropdown">
                <a class="nav-links dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Login
                </a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li className="dropdown-item">
                    <Link to="/student-log" className="nav-links" onClick={closeMobileMenu}>
                    Student
                    </Link>
                    </li>
                    <li className="dropdown-item">
                    <Link to="/admin-log" className="nav-links" onClick={closeMobileMenu}>
                    Admin
                    </Link>
                    </li>
                    {/* <li><a class="dropdown-item" href="#">Student</a></li>
                    <li><a class="dropdown-item" href="Adm_login.js">Admin</a></li> */}
                </ul>
                </li>
                {/* <li className="nav-item">
                <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
                Login
                </Link>
                </li> */}
            </ul>
            </div>
          
            
        </div> 
   
        </>
    )
}

export default Navbar
