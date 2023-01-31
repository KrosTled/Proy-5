import '../css/inicio.css';
import '../css/main.css';
import fondo from '../Img/fondo.svg'
import Fotter from '../fotter';
import NavBar from '../navBar.js';
import analisisImg from '../Img/EngeenierTeam.png';

function Equipo(){
    return (
        <div className='heightBg' style={{height:'700px'}} >
            <div className='col contenido'>
                <div>
                    <div className="row">
                        
                        <div className="col iniText">
                            <h2>Equipo de supervicion de especialistas</h2>
                            <p>
                                Nuestro equipo de ingenieros dedicara tiempo a la semana para la supervisión y el apoyo del proyecto en el cual se solicitó, para que de esta forma se puede llevar a cabo de forma limpia y con la menor cantidad de inconvenientes posibles.
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
function EquipoCore(){
    return(
        <div style={{
            backgroundImage: `url(${fondo})`,
            height:'900px' 
          }}>
            <NavBar/>
            <div>
                <Equipo/>
            </div>
            <Fotter/>
        </div>
    )
}

export default EquipoCore