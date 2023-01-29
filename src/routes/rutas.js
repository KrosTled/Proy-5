import App from '../App';
import UserInterfaz from '../userPanelGeneric.js';
import About from '../About';
import Error from '../Error.js';

const rutas = [
    {
      path:'/*',
      element:<Error/>//Home
    },{
    path:'/',
    element:<App/>//Home
  },{
    path:'/about',
    element:<About/>
  }
  ,{
    path:'/account',
    element:<UserInterfaz/>
  }]

  export default rutas