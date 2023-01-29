import {thingsIT} from '../elementosTienda.js';


function PageCore(numArr){
    useThing = thingsIT[0]
    return(
        <div>
            <div>
                {useThing.nombre}
            </div>
            <div>
                {useThing.ingrediente}
            </div>
            <div>
                {useThing.id}
            </div>
        </div>
    )
}