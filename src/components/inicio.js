import './css/inicio.css';
import './css/main.css';
import fondo from './Img/fondo.svg'
import Fotter from './fotter';
import NavBar from './navBar.js';
import ListadoThings from './catalogo';
import companyBuilding from './Img/companyBuilding.png';
import { useEffect } from 'react';

function InicioComp(){
    return (
        <div className='heightBg' style={{height:'700px'}} >
            <div className='col contenido'>
                <div>
                    <div className="row">
                        <div className="col imgZone">
                            <div className="imgContainer">
                                <img className='imgInicio' src={companyBuilding} alt="Company builing.jpg"/>
                            </div>
                        </div>
                        <div className="col iniText">
                            <h2>IAlchimist</h2>
                            <p>Somos una compañia especializada en inteligencias artificiales empleadas en diversas areas,
                                Hemos trabajado con diversas compañias para generar soluciones practicas y de facil uso para
                                que nuestros clientes tengan una buena experiencia.
                            </p>
                            <p>
                                Tambien contamos con el hardware necesario para el entrenamiento de las IA en los casos
                                que sea necesario.
                                De igual forma contamos con profecionales que podran acompañar en los procesos de implementacion de las mismas.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    )
}

function IntroCatalogo(){
    return(
        <div>
            <ListadoThings/>
        </div>
    )
}

function Inicio(){
    useEffect(() => {   
        document.title = `Inicio`;  
    });
    return(
        <div style={{
            backgroundImage: `url(${fondo})`,
            height:'1500px' 
          }}>
            <NavBar/>
            <div>
                <InicioComp/>
                <IntroCatalogo/>
            </div>
            <Fotter/>
        </div>
    )
}

export default Inicio