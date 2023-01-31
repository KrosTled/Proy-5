import '../css/main.css';
import '../css/resumen.css';
import '../css/coreinterfaz.css'
import { useState } from 'react';
import axios from 'axios';



function Resumen(){
    const [deploy, setDeploy] = useState('');
    const [services, setServices] = useState({});
    const token = window.localStorage.getItem('jwt');
    axios.get('https://proy-5-api-production.up.railway.app/verify', {
    headers: {
        'Authorization': `Bearer ${token}`
    }
    })
    .then((res) => {
        setServices({deepLearn : res.data.deepLearn, entrenamiento: res.data.entrenamiento, analisis: res.data.analisis, equipo: res.data.equipo})
    })
    .catch((error) => {
    console.error(error)
    }) 
    return (
        <div className='deployment row'>
            <div className='col'>
                <div>
                    <div className='textResume'>Servicios Activos</div>
                    <div>{services.deepLearn? <div className="leftText" onClick={() => setDeploy('deapLearn')}>historial de Deeplearning AI</div>: ''} 
                    {services.entrenamiento? <div className="leftText" onClick={() => setDeploy('Entrenamiento')}>Entrenamiento de AI</div> : ''} 
                    {services.analisis? <div className="leftText" onClick={() => setDeploy('Entrenamiento')}>Analisis de Datos</div>: ''}  
                    {services.equipo? <div className="leftText" onClick={() => setDeploy('Equipo')}>Supervicion de nuestro equipo</div>: ''}</div>
                    
                </div>
            </div>
            <div className='col'>
                <div className='test'>
                    {deploy}
                </div>
            </div>
             
             
        </div>
    )
}

export default Resumen