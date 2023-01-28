import './App.css';
import CoreInterfaz from './components/InterfazDeUsuario';
import Fotter from './components/fotter';

function UserInterfaz() {
  return (
    <div className="App">
      <CoreInterfaz/>
      <Fotter/>
    </div>
  );
}

export default UserInterfaz;
