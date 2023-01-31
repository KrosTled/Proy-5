import '../css/inicio.css';
import '../css/main.css';
import fondo from '../Img/fondo.svg'
import Fotter from '../fotter';
import NavBar from '../navBar.js';
import analisisImg from '../Img/computerCience.png';

function Analisis(){
    return (
        <div className='heightBg' style={{height:'700px'}} >
            <div className='col contenido'>
                <div>
                    <div className="row">
                        
                        <div className="col iniText">
                            <h2>Analisis de datos</h2>
                            <p>
                                Nuestro equipo de especialistas realizara un informe completo, en el cual se ira punto por punto añadiendo de donde proviene cada información, de esta forma sea una lectura más rápida y se podrá profundizar de manera fácil en los archivos que están relacionados al momento.
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
function AnalisisCore(){
    return(
        <div style={{
            backgroundImage: `url(${fondo})`,
            height:'900px' 
          }}>
            <NavBar/>
            <div>
                <Analisis/>
            </div>
            <Fotter/>
        </div>
    )
}

export default AnalisisCore