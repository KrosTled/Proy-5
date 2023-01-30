import React, { useState } from "react";
import './css/navBar.css';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Logo from './Img/Logo.png';


// Ejemplo implementando el metodo POST:
async function verify(data = {}) {
  const tokenExample = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Q3NDE5NzMzMDk5YzI4NTRmYTM2MDciLCJpYXQiOjE2NzUwNTgyMDR9.02kgeUhvhmCbH4GSnZTSXsfRkS5oaj696H7mPbP3dU0'
  // Opciones por defecto estan marcadas con un *
  try{
    let response = await fetch("https://proy-5-api-production.up.railway.app/verify", {
    method: 'get', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization':'Bearer '+ tokenExample,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json();
  }catch(err){
    return err;
  }
  
   // parses JSON response into native JavaScript objects
}
const answer = async () => {
  let result = await verify();
  return result
  
}

function NavBar(){
  const [logged, loggedInOut]= useState(false)
  answer().then(resultado => {
    console.log(resultado)
    // loggedInOut(resultado)
    
  })
  console.log(logged)
    // useEffect(
      // answer = verify()
    // )
    
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