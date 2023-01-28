import './css/main.css';
import './css/fotter.css';

function Fotter(){
    return (
        <div className="contenido footerCont">
            <div   className='row' >
                <div className='col' >
                    <div>
                        <h6 className="Nombre">Pagina hecha por Matias Parada</h6>         
                    </div>
                    <div>
                        <h6 className="Nombre">Todo lo escrito en esta pagina es con fines ilustrativos, ningun producto existe realmente.</h6>         
                    </div>
                </div>
                <div className='col'>
                    <div>
                        <h6 className="Nombre">Github:  <a>https://github.com/KrosTled</a></h6>          
                    </div>
                    <div>
                        <h6 className="Nombre">De igual forma gran parte de las imagenes fueron generadas por una AI ( Midjourney )</h6>          
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Fotter