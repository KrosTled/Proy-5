import App from '../App';
import UserInterfaz from '../userPanelGeneric.js';
import About from '../About';
import Error from '../Error.js';
import LoginTemplate from '../components/authorizations/login.js';
import RegisterTemplate from '../components/authorizations/register.js';

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
  }
]

  export default rutas