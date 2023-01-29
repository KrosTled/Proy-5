import './css/inicio.css';
import './css/main.css';
import fondo from './Img/fondo.svg'
import Fotter from './fotter';
import NavBar from './navBar.js';
import desafios from './Img/desafios.png';
import PosiblesProblemas from './Img/PosiblesProblemas.png';

function About(){
    return (
        <div className='heightBg' style={{height:'1300px'}} >
            <div className='col contenido'>
                <div>
                    <div className="row">
                        
                        <div className="col iniText">
                            <h2>Nuestra vision</h2>
                            <p>
                                Como compañía siempre hemos visto como una posibilidad la automatización de los
                                 trabajos que menos quiere hacer la gente para así generar una mejor calidad de vida en general,
                                  requiriendo menos gente para grandes cantidades de trabajo y así reducir los costos en general para que
                                   tanto las compañías como sus usuarios se vean beneficiados.
                            </p>
                            <p>
                                Por ello nuestro equipo de especialistas ha trabajado y estudiado el área de las inteligencias artificiales,
                                llegando al punto de poder llamarnos una compañía especializada en dicha área.
                            </p>
                        </div>
                        <div className="col imgZone">
                            <div className="imgContainer">
                                <img className='imgInicio' src={desafios} alt="Nuestra Vision.jpg"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col imgZone">
                            <div className="imgContainer">
                                <img className='imgInicio' src={PosiblesProblemas} alt="Posibles problematicas.png"/>
                            </div>
                        </div>
                        
                        <div className="col iniText">
                            <h2>Posibles problemas</h2>
                            <p>
                                Estamos al tanto de las posibles problemática que podría atraer una automatización masiva de distintos sectores laborales,
                                para ello como compañía contamos con cursos gratuitos de informática para poder adecuarse a los nuevos puestos laborales
                                que se podrían generarse después de automatizarlos.
                            </p>
                        </div>
                       
                    </div>
                </div>
                
            </div>
            
        </div>
        
    )
}
function AboutCore(){
    return(
        <div style={{
            backgroundImage: `url(${fondo})`,
            height:'1500px' 
          }}>
            <NavBar/>
            <div>
                <About/>
            </div>
            <Fotter/>
        </div>
    )
}

export default AboutCore