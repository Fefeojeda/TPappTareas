const modTareas = require("./Tareas/index.js");
const process = require('process')
let inputTexto = process.argv[2]

switch (inputTexto) { 
    case 'listar' :
        modTareas.listarTareas(); 
        break;
    case undefined: console.log("¡Atención! Tienes que ingresar una acción --- Para visualizar lo que puedes hacer, ingresa la palabra comandos en la terminal --");
    break;
    case 'comandos' : 
        modTareas.listarComandos();
    break;
    case 'filtrar' :
        modTareas.filtrarTareas(process.argv[3]);
        break;
    case 'agregar' :
        let titulo = process.argv[3];
        let estado = process.argv[4];
        modTareas.agregarTarea(titulo,estado)
        break;
    case 'deshacer' :
        modTareas.deshacer()
    break;
    default:
        console.log('No entiendo qué quieres hacer'); break;
}