import React from 'react'
import './UI/Navbar.css'
import logo from '../images/logo.png'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar(props) {
    
  return (
    <>
    
        <nav className={props.click ? 'nav activeNav' : 'nav'}>
            <div className="navitems">
                <div className="logo relative">
                    <img src={logo} alt="logo" />
                    <h3>Game Developer</h3>
                </div>
                <ul className='navlinks'>
                    <li><a href="#home">About</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#courses">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/saif-touzi/" rel='noreferrer' target="_blank" ><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.facebook.com/saif.touzi" rel='noreferrer' target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#git"><i className="fa-brands fa-github" rel='noreferrer' target="_blank"></i></a>
                </div>
            </div>
        </nav>
        <div className="menu" onClick={props.onClick}>
            <FontAwesomeIcon icon={faBars} />
        </div>
    </>
    
    

  )
}

export default Navbar