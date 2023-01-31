import React, {  useEffect, useState } from "react";
import './css/navBar.css';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Logo from './Img/Logo.png';
import auth from "./authorizations/isAuth.js";
import { verify } from "./authorizations/auth";

async function testLogged(){
  if(window.localStorage.getItem('jwt')){
    await verify(window.localStorage.getItem('jwt')).then(() => {
      auth.login()
  })
  }else{
    auth.logout()
  }
}

function NavBar(){
  
  const [logged, setLogged] = useState(true)
  useEffect(() => {   
    testLogged().then(() => setLogged(auth.isAuthenticated()) )
  }); 
  return(
    <nav>
        <div>
          <div className="imgContainer">
            <img className="imgLogo" src={Logo} alt="logo"/>
          </div>
        </div>
        <div className="col">
          <div className="contentNav row">
            <div className="col navElement"><Link className="linkDecoration" to={'/'}>Inicio</Link></div>
            <div className="col navElement"><Link className="linkDecoration" to={'/about'}>Sobre nosotros</Link></div>
            {logged?<div className="col navElement"><Link className="linkDecoration" to={'/account'}>Mi cuenta</Link></div>: <div className="col navElement"><Link className="linkDecoration" to={'/login'}>Iniciar Seccion/ Registrarse</Link></div>}
            
          </div>
        </div>
  
      </nav>
  )
}

export default NavBar