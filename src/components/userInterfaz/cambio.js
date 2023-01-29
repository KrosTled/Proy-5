import Resumen from "./resumen"
import Servicio from "./Servicios"

var elementoCambiante = 'Resumen'

function cambiarLaForma(element){
    elementoCambiante = element 
}

function CambiaForma(){
    if(elementoCambiante = 'Resumen'){
        console.log('Pase Resumen');
        return(<Resumen/>)
    }
    if(elementoCambiante = 'Servicio'){
        console.log('Pase servicio');
        return(<Servicio/>)
    }
}
export {CambiaForma, cambiarLaForma}