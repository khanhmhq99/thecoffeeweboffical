import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidenav = () => {
    return (
        <ul className="sidenav" id="mobile-demo">
            <li><div className="user-view">
                <div className="background">
                    <img src="./img/background.jpg" />
                </div>
                <a href="#"><img src="./img/ava.jpg" className="circle" /></a>
                <a href="#"><span className="white-text name">KhanhMHQ</span></a>
                <a href="#"><span className="white-text email">KhanhMHQ@gmail.com</span></a>
            </div></li>
            <li><NavLink to='/signup'>Signup</NavLink></li>
            <li><NavLink to='/signin'>Login</NavLink></li>
            <li><NavLink to='/logout'>Logout</NavLink></li>

        </ul>
    )
}

export default Sidenav