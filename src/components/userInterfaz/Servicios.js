import '../css/main.css';
import '../css/servicios.css'
import bgCards from '../Img/bgCards.svg'
import Card from 'react-bootstrap/Card';
import {thingsIT} from '../elementosTienda.js';
import axios from 'axios';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from 'react';


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
    const [services, setServices] = useState({deepLearn: true, entrenamiento: true, analisis: true, equipo: true});
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
    }) 
    return (
      thingsIT.map((element) => (
        <div className='col'>
          <Card
        style={{
          width: '240px',
          height: '28rem',
          backgroundImage: `url(${bgCards})`,
          
        }}
        key={element.id}
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
        <div style={{width: '240px', margin: '10px 0px 0px 0px'}}>
          {!services[element.patch] ? <PayPalScriptProvider options={{ "client-id": "AW3kimMvTqRz_Q46BAvJSRreeNe-K6UTuv2hzuQXmTY57HyJvlTXAhj09OZK1tqJ4BGpL2x3fkowRwa9" }}>
                <PayPalButtons style={{ layout: "horizontal" }} 
                
                createOrder={(data, actions) => {
                      return actions.order.create({
                              purchase_units: [
                                  {
                                      amount: {
                                          // currency_code: "CLP",
                                          value: element.precio,
                                      },
                                  },
                              ],
                          })
                  }}
                  onApprove={function (data, actions) {
                      return actions.order.capture().then(function () {
                        contratarServicio(element.patch)
                      });
                }} />
          </PayPalScriptProvider>:<div></div>}
        </div>
        
        </div>
            
        ))   
  )
}

function Servicio(){
  console.log(process.env.EXAMPLE)
    return (
        <div className='width'>
            <div className='width'>
            A veces tardan en aparecer los botones de Paypal, se agradece la paciencia.
                <div className='width row'>
                  <ThingsElement/>
                </div>
            </div>
        </div>
    )
}

export default Servicio