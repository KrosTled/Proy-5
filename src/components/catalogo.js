import NavBar from './navBar.js';
import './css/Menu.css'
import bgCards from './Img/bgCards.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';



import {thingsIT} from './elementosTienda.js';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img style={"width:18rem"} variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function ThingsElement(){
    return (
      thingsIT.map((element) => (
            <Card
        style={{
          width: '18rem',
          height: '28rem',
          backgroundImage: `url(${bgCards})` 
        }}
        key={element.id}
        className='cardFromArray'
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

function Catalogo(){
    return (
    <div>
        <NavBar/>   
        <div className='bgHeigtMenu' >
            <div className='menuElements'>
                <Container>
                  <div className='ConjuntoDeElementos'>
                    <h2 className='menuTitulo'>Servicios</h2>
                    <div className='menuArrayCards'>
                        <ThingsElement/>  
                    </div>
                  </div>  
                </Container> 
            </div>  
        </div>
    </div>
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
                        <h5 className='footerCatalog'>Para cualquier adquisicion de un producto hacer desde panel de usuario</h5>
                    </Container> 
                </div>  
            </div>
        </div>
  )
}

export default ListadoThings