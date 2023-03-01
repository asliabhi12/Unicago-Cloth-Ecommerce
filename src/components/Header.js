import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <section id="header">
    <a href="#" style={{textDecoration: "none", color: "black", fontSize: "2rem"}}>Unicago</a>
    <div>
        <ul id="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Shop">Shop</Link></li>
            <li><a href="/Contact">Contact</a></li>
            <li><Link to="/register">Log in</Link></li>
           
        </ul>
    </div>
    
</section>

  );
}

export default Navbar;
