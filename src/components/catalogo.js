import './css/Menu.css'
import bgCards from './Img/bgCards.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';

import {thingsIT} from './elementosTienda.js';

function ThingsElement(){
    const navigate = useNavigate();
    return (
      thingsIT.map((element) => (
            <Card
        style={{
          width: '18rem',
          height: '30rem',
          backgroundImage: `url(${bgCards})`,
          cursor:'pointer'
        }}
        key={element.id}
        className='cardFromArray'
        onClick={() => navigate(element.ruta)}
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
function ListadoThings(){
    
     
        return (
        <div>
            <div>
                <div className='menuElements'>
                    <Container>
                        <h2 className='menuTitulo'>Servicios</h2>
                        <div className='menuArrayCards'>
                            <ThingsElement/>  
                        </div>
                        <h5 className='footerCatalog'>Para cualquier adquisicion de un producto hacerse desde panel de usuario</h5>
                    </Container> 
                </div>  
            </div>
        </div>
  )
}

export default ListadoThings