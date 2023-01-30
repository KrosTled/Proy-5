import '../css/inicio.css';
import '../css/main.css';
import '../css/login.css';
import fondo from '../Img/fondo.svg'
import Fotter from '../fotter';
import { Link, useNavigate} from 'react-router-dom';
import {verify, login} from './auth';

function LoginForm(){
    const navigate = useNavigate();
    function startLogin(username, password) {
        login(username, password).then(response => response.json()).then(json => {
            window.localStorage.setItem('jwt',json.token)
            navigate("/");
        });
        
      }

    return (
        <div className='heightBg' style={{height:'900px'}} >
            <div style={{height:'900px'}} className='withoutMargins width row'>
                <div className='withoutMargins width col'>
                    <div className='containerUser' >
                        <div className='containerTitulo'><h2 className='titulo'>Login</h2></div>
                        <form className='formularioUser'>
                            <div className='divform'>
                                <label>Usuario</label>
                                <input type={'text'}/>  
                            </div>
                            <div className='divform'>
                                <label>Contraseña</label>
                                <input type={'password'}/>  
                            </div>
                            <button onClick={(e) => {
                                e.preventDefault()
                                startLogin(e.target.parentElement.childNodes[0].childNodes[1].value, e.target.parentElement.childNodes[1].childNodes[1].value);
                                
                            }}>Enviar</button>

                            <div className='linkContainer'><Link className="registerGoto" to={'/register'}>No tengo cuenta</Link></div>
                            
                        </form> 
                    </div>
                    <div className='return'>
                        <Link className="linkText" to={'/'}>Volver al Inicio</Link>
                        </div>
                </div>
            </div> 
        </div>
        
    )
}
function LoginTemplate(){
    return(
        <div style={{
            backgroundImage: `url(${fondo})`,
            height:'1100px' 
          }}> 
            <div>
                <LoginForm/>
            </div>
            <Fotter/>
        </div>
    )
}

export default LoginTemplate