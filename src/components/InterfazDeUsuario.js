import NavBar from "./navBar";
import './css/coreinterfaz.css'
import UserImg from './Img/UserImg.png';

function CoreInterfaz(){
    return (
        <div className="bgCore">
            <NavBar/>
            <div className="col">
                <div className="bgNormal row">
                    <div className="col">Mi cuenta</div>  
                </div>
                <div className=" row">
                    <div className="col">
                        <div className="row">
                            <img src={UserImg} style={{height:'100px', width:'100px'}}className="col" />
                            <div className="col">Nombre de usuario</div>
                        </div>
                        <div></div>
                    </div>
                    <div className="col">CCC</div>  
                </div>
                <div className="row">
                    <div className="col">BBB</div>
                    <div className="col">AAA</div>
                </div>
            </div>
        </div>
 
        
    )
}

export default CoreInterfaz;