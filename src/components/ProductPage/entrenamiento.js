import '../css/inicio.css';
import '../css/main.css';
import fondo from '../Img/fondo.svg'
import Fotter from '../fotter';
import NavBar from '../navBar.js';
import analisisImg from '../Img/training.png';

function Entrenamiento(){
    return (
        <div className='heightBg' style={{height:'700px'}} >
            <div className='col contenido'>
                <div>
                    <div className="row">
                        
                        <div className="col iniText">
                            <h2>Entrenamiento bajo vigilancia   </h2>
                            <p>
                                Con el hardware de nuestra compañía realizaremos el entrenamiento de una AI hasta una fase avanzada, durante el entrenamiento se le ira notificando cada vez que la AI haga un aprendizaje notable.
                            </p>
                            <p>
                                Precaucion: Al contratar este servicio se realizará una revisión a su solicitud para la evaluación del tiempo que nuestro equipo deba dedicarle a lo largo de las semanas que se requiera, para así establecer el precio que corresponda.
                            </p>
                            <p>
                                Recordamos que para contratar el servicio se debe hacer desde la interfaz de usuario    
                            </p>
                        </div>
                        <div className="col imgZone">
                            <div className="imgContainer">
                                <img className='imgInicio' src={analisisImg} alt="Nuestra Vision.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    )
}
function EntrenamientoCore(){
    return(
        <div style={{
            backgroundImage: `url(${fondo})`,
            height:'900px' 
          }}>
            <NavBar/>
            <div>
                <Entrenamiento/>
            </div>
            <Fotter/>
        </div>
    )
}

export default EntrenamientoCore