import React from "react";
import './css/navBar.css';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Logo from './Img/Logo.png';



function NavBar(){
    return (
    <nav>
      <img className="imgLogo" src={Logo} alt="logo"/>
      <div className="col">
        <div className="contentNav row">
          <div className="col navElement"><Link className="linkDecoration" to={'/'}>Inicio</Link></div>
          <div className="col navElement"><Link className="linkDecoration" to={'/about'}>Sobre nosotros</Link></div>
          <div className="col navElement"><Link className="linkDecoration" to={'/account'}>Mi cuenta</Link></div>
        </div>
      </div>

    </nav>
  )
}

export default NavBar