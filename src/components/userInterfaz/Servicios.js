import '../css/main.css';
import '../css/servicios.css'
import bgCards from '../Img/bgCards.svg'
import Card from 'react-bootstrap/Card';
import {thingsIT} from '../elementosTienda.js';
import axios from 'axios';


const contratarServicio = async (servicio) =>{
  const token = window.localStorage.getItem('jwt');
  axios.patch('https://proy-5-api-production.up.railway.app/updateService',{
          "token": token,
          "service": servicio
      },  {
  headers: {
      'Authorization': `Bearer ${token}`
  }
  })
}

function ThingsElement(){
    return (
      thingsIT.map((element) => (
            <Card
        style={{
          width: '240px',
          height: '28rem',
          backgroundImage: `url(${bgCards})`,
          cursor: 'pointer'
        }}
        key={element.id}
        className='cardFromArray'
        onClick={() => contratarServicio(element.patch)}
      >
        <Card.Body>
          <Card.Img className='imgCard' variant="top" src={element.img}/>
          <Card.Title tag="h5">
            {element.nombre}
          </Card.Title>
          <Card.Subtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Descripcion:
          </Card.Subtitle>
          <Card.Text>
            {element.ingredientes}
          </Card.Text>
        </Card.Body>
        </Card>
        ))   
  )
}

function Servicio(){
  console.log(process.env)
    return (
        <div className='width'>
            <div className='width'>
              Para contratar servicios hacer click
                <div className='width row'>
                  <ThingsElement/>
                </div>
            </div>
        </div>
    )
}

export default Servicio