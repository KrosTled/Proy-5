import '../css/main.css';
import '../css/FAQ.css';

function FAQ(){
    return (
        <div>
            <div className='FAQContainer'>
                <div className='AskFAQ'> 
                    ¿Porque no aparecen los precios en el inicio?
                </div>
                <div>
                    Ya que contamos con un servicio totalmente personalizado, los servicios cuentan con un pago base y no con uno total. 
                </div>
            </div>
            
            <div className='FAQContainer'>
                <div className='AskFAQ'>
                    ¿Tenemos un edificio que sea de área comercial de compañía?
                </div>
                <div>
                    No contamos con un edificio completo, pero parte de nuestro edificio de desarrollo e investigación contamos con salas para llevar a cabo reuniones con los clientes que lo requieran. 
                </div>
            </div>
            
            <div className='FAQContainer'>
                <div className='AskFAQ'>
                    ¿El equipo de ingenieros esta solo con nuestro proyecto?
                </div>
                <div>
                    Se evaluará el requerimiento de tiempo requerido por proyecto y se puede llegar a estar a tiempo completo, pero si es una supervisión leve no estarán solo con su proyecto pero tendrá un costo menor por obvios motivos.
                </div>
            </div>
            
            <div className='FAQContainer'>
                <div className='AskFAQ'>
                ¿Es una AI requerida para todo?
                </div>
                <div>
                No, pero como va avanzando el mundo desde nuestro punto de vista es de ayuda una consejería para ser vanguardistas en las áreas sin ellas aún. 
                </div>
            </div>

        </div>
    )
}

export default FAQ;