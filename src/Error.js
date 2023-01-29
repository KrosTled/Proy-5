import './App.css';
import './components/css/main.css';
import './components/css/error.css';
import {Link} from 'react-router-dom';

function Error() {
  return (
    <div className="App">
      <div style={{height: '955px'}}  className='bg row'>
        <div className='col'>
          <div className='message'>Esta pagina no existe</div>
          <Link className="linkDecoration return" to={'/'}>Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
