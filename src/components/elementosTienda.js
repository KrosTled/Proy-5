import img1 from './Img/IAdeeplearning.jpg';
import img2 from './Img/training.png';
import img3 from './Img/computerCience.png';
import img4 from './Img/EngeenierTeam.png';

const thingsIT = [{
    id:0,
    nombre:'AI con DeepLearning',
    ingredientes:'Se realizara la creacion de una AI con la capacidad de aprendizaje con relacion a la nececidad del cliente.',
    img:img1,
    ruta:'/deepLearning',
    patch:'deepLearn',
    precio:'7.800',
},{
    id:1,
    nombre:'Entrenamiento bajo vigilancia',
    ingredientes:'Se entrenara una IA con capacidad de aprendizaje en conjunto con una vigilancia para que sea optimo.',
    img:img2,
    ruta:'/entrenamiento',
    patch:'entrenamiento',
    precio:'5.000'
},{
    id:2,
    nombre:'Servicios de analisis de datos',
    ingredientes:'Se entregara formacion de distintas apps que permitan la visualizacion de una gran cantidad de datos.',
    img:img3,
    ruta:'/analisis-de-datos',
    patch:'analisis',
    precio:'6.500'
},{
    id:3,
    nombre:'Equipo de supervicion de especialistas',
    ingredientes:'Se podra a dispocicion de el cliente un grupo de especialistas para que el proyecto salga lo mejor posible.',
    img:img4,
    ruta:'/apoyo-y-supervision',
    patch:'equipo',
    precio:'6.500'
}
]

export {thingsIT}