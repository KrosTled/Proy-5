import App from '../App';
import UserInterfaz from '../userPanelGeneric.js';
import About from '../About';
import Error from '../Error.js';
import LoginTemplate from '../components/authorizations/login.js';
import RegisterTemplate from '../components/authorizations/register.js';
import { thingsIT } from '../components/elementosTienda';
import AnalisisCore from '../components/ProductPage/analisis';
import DeepLearnCore from '../components/ProductPage/deeplean';
import EntrenamientoCore from '../components/ProductPage/entrenamiento';
import EquipoCore from '../components/ProductPage/equipo';

const rutas = [
    {
      path:'/*',
      element:<Error/>//Home
    },{
    path:'/',
    element:<App/>//Home
  }
  ,{
    path:'/about',
    element:<About/>
  }
  ,{
    path:'/account',
    element:<UserInterfaz/>
  },{
    path:'/login',
    element:<LoginTemplate/>
  }
  ,{
    path:'/register',
    element:<RegisterTemplate/>
  },{
    path:thingsIT[0].ruta,
    element:<DeepLearnCore/>
  },{
    path:thingsIT[1].ruta,
    element:<EntrenamientoCore/>
  },{
    path:thingsIT[2].ruta,
    element:<AnalisisCore/>
  },{
    path:thingsIT[3].ruta,
    element:<EquipoCore/>
  }
]

  export default rutas