import React, {useState, useEffect} from "react";
import NavBar from "./navBar";
import './css/coreinterfaz.css'
import UserImg from './Img/UserImg.png';
import Resumen from "./userInterfaz/resumen.js";
import Servicio from "./userInterfaz/Servicios";
import Contacto from "./userInterfaz/contacto";
import FAQ from "./userInterfaz/FAQ";



function CoreInterfaz(){
    const [userMode, changeUserMode] = useState(<Resumen/>);

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
                                <div>Nombre de usuario</div>
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