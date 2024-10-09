import React from 'react';
import { Link } from 'react-router-dom';


function Navbar(){
    return(
        <nav className='nav'>

            <Link id = "nav_title" to ="/home"><img id = "logo" src = {require("./images/Run_Wild_Logo_Grnback.png")} alt="Run Wild Logo"></img>RunWild</Link>
            <ul className="nav_links">
                <li>
                    <Link className = "navLink" to = "/story">Our Story</Link>
                </li>
                <li>
                    <Link className = "navLink" to = "/games">Games</Link>
                </li>
                <li>
                    <Link className = "navLink" to = "/films">Films</Link>
                </li>
                <li>
                    <Link className = "navLink" to = "/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;