/**
*	El siguiente archivo es la aplicación con la que arrancara todo el servidor del proyecto
*	En este se mandara a llamar a los diferentes modulos del proyecto para su ejecución en este caso
*	primero se manda a llamar al archivo que se 
*
*/

//librerias requeridas
var arranca = require('./config/route/router');


// se arranca el servidor
arranca.iniciar();