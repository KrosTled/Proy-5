import React, {useState, useEffect} from "react";
import NavBar from "./navBar";
import './css/coreinterfaz.css'
import UserImg from './Img/UserImg.png';
import Resumen from "./userInterfaz/resumen.js";
import Servicio from "./userInterfaz/Servicios";
import Contacto from "./userInterfaz/contacto";
import FAQ from "./userInterfaz/FAQ";
import { verify } from "./authorizations/auth";
import { useNavigate } from "react-router-dom";

const getUserAndServices = async () =>{
    let userAndServices = {}
    if(localStorage.getItem('jwt')){
        await verify(localStorage.getItem('jwt')).then(response => userAndServices = {username: response.username, services: response.services})
        return userAndServices
    }else{
        const navigate = useNavigate
        navigate('/')
    }
}

function CoreInterfaz(){
    const [userMode, changeUserMode] = useState(<Resumen/>);
    const [username, setUsername] = useState('Username');
    const [services, setServices] = useState('Username');
    getUserAndServices().then(result => {
        setUsername(result.username)
        setServices(result.services)
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
                </div>
                <div className="upRow row">
                    <div className="col">
                        <div className="upRow row">
                            <img src={UserImg} className="col userImg" />
                            <div className="upRow col">
                                <div>{username}</div>
                                <div>Rol:</div>
                            </div>
                        </div>
                    </div>
                    <div className="upRow col">Ningun servicio contratado</div>  
                </div>
                <div className=" lowerRow row">
                    <div className="leftCol bglower">
                        <div className="leftText" onClick={() => changeUserMode(<Resumen/>)}>Resumen</div>
                        <div className="leftText" onClick={() => changeUserMode(<Servicio/>)}>Contratar Servicio</div>
                        <div className="leftText" onClick={() => changeUserMode(<Contacto/>)}>Ponte en contacto</div>
                        <div className="leftText" onClick={() => changeUserMode(<FAQ/>)}>Preguntas Frecuentes</div>
                    </div>
                    <div className="bgContainers rightCol bglower col">
                        <div>
                            {userMode}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoreInterfaz