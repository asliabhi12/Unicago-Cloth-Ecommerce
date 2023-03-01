import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const barHandler = (e) =>{
    const bar= document.getElementById('bar');
const close= document.getElementById('close');
const nav=document.getElementById('navbar');


if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
  }
  return (
    <section id="header">
      <Link to="/"
        style={{ textDecoration: "none", color: "black", fontSize: "2rem" }}
      >
        Unicago
      </Link>
      <div>
        <ul id="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/register">Log in/Register</Link>
          </li>
          <li id="lg-bag">
            <i class="far fa-shopping-bag"></i>
          </li>
          <Link to="#" id="close">
            <i class="far fa-times"></i>
          </Link>
        </ul>
      </div>
      <div id="mobile">
        <Link to="/">
          <i class="far fa-shopping-bag"></i>
        </Link>
        <i id="bar" class="fas fa-outdent" onClick={barHandler}></i>
      </div>
    </section>
  );
}

export default Navbar;
