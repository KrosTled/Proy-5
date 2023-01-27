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
          <div className="col">Inicio</div>
          <div className="col">Donde encontrarnos</div>
          <div className="col">Mi cuenta</div>
        </div>
      </div>

    </nav>
  )
}

export default NavBar