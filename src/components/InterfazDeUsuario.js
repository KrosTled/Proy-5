import React, {useState, useEffect} from "react";
import NavBar from "./navBar";
import './css/coreinterfaz.css'
import UserImg from './Img/UserImg.png';
import Resumen from "./userInterfaz/resumen.js";
import Servicio from "./userInterfaz/Servicios";
import FAQ from "./userInterfaz/FAQ";
import axios from 'axios';
import auth from "./authorizations/isAuth";
import { useNavigate } from "react-router-dom";

export const UserAndServicesContext =  React.createContext('');




function CoreInterfaz(){
    const navigate = useNavigate()
    const [userMode, changeUserMode] = useState(<Resumen/>);
    const [username, setUsername] = useState('Username');
    const [services, setServices] = useState({});
    const token = window.localStorage.getItem('jwt');
    axios.get('https://proy-5-api-production.up.railway.app/verify', {
    headers: {
        'Authorization': `Bearer ${token}`
    }
    })
    .then((res) => {
        setUsername(res.data.username)
        setServices({deepLearn : res.data.deepLearn, entrenamiento: res.data.entrenamiento, analisis: res.data.analisis, equipo: res.data.equipo})
    })
    .catch((error) => {
    }) 
    // De forma similar a componentDidMount y componentDidUpdate  
    useEffect(() => {   
        document.title = `Mi cuenta`;  
    });
    return (
        <div className="bgCore">
            <div className="navBg">
            <NavBar/>
            </div>
            
            <div className="col">
                <div className="bgNormal row">
                    <div className="col">Mi cuenta</div>
                    <div className="col">
                    <div className="logoutButton" onClick={() => {
                        auth.logout()
                       navigate('/')
                    }}>Logout</div> 
                    </div>
                     
                </div>
                <div className="upRow row">
                    <div className="col">
                        <div className="upRow row">
                            <div className="upRow col">
                            <img src={UserImg} className="userImg" />
                            </div>
                            
                            <div className="upRow col">
                                <div>Nombre de Usuario: {username}</div>
                            </div>
                        </div>
                    </div>
                    <div className="upRow col">
                        <div className="row">
                        Servicios:  {services.deepLearn? ' -Deeplearn-': ''} {services.entrenamiento? ' -Entrenamiento- ': ''} {services.analisis? ' -Analisis- ': ''}  {services.equipo? ' -Equipo- ': ''}
                        </div>
                    </div>  
                </div>
                <div className=" lowerRow row">
                    <div className="leftCol bglower">
                        <div className="leftText" onClick={() => changeUserMode(<Resumen/>)}>Resumen</div>
                        <div className="leftText" onClick={() => changeUserMode(<Servicio/>)}>Contratar Servicio</div>
                        <div className="leftText" onClick={() => changeUserMode(<FAQ/>)}>Preguntas Frecuentes</div>
                        {/* <div className="leftText" onClick={() => getUserAndServices().then(result => {
                        setUsername(result.username)
                        setServices(result.services)
                        }) }>Preguntas Frecuentes</div> */}
                    </div>
                    <div className="bgContainers rightCol bglower col">
                        <div>
                            <UserAndServicesContext.Provider value={services}>
                                {userMode}
                            </UserAndServicesContext.Provider>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoreInterfaz