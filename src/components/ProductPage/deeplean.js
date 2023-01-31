import '../css/inicio.css';
import '../css/main.css';
import fondo from '../Img/fondo.svg'
import Fotter from '../fotter';
import NavBar from '../navBar.js';
import analisisImg from '../Img/IAdeeplearning.jpg';

function DeepLearn(){
    return (
        <div className='heightBg' style={{height:'700px'}} >
            <div className='col contenido'>
                <div>
                    <div className="row">
                        
                        <div className="col iniText">
                            <h2>AI con DeepLearning</h2>
                            <p>
                                Nuestro equipo de desarrollo realizar la creación de una AI con la capacidad de deepleaning con el fin que sea solicitado por el cliente, se probara en entornos básicos para probar que esta este aprendiendo adecuadamente.
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
function DeepLearnCore(){
    return(
        <div style={{
            backgroundImage: `url(${fondo})`,
            height:'900px' 
          }}>
            <NavBar/>
            <div>
                <DeepLearn/>
            </div>
            <Fotter/>
        </div>
    )
}

export default DeepLearnCore