const fs = require('fs')
const tareas = JSON.parse(fs.readFileSync('./db/tareas.json','utf-8'))
const comandos = JSON.parse(fs.readFileSync('./db/comandos.json','utf-8'))
module.exports = {                                        
agregarTarea : function(titulo, estado) {
    let nuevaTarea = {                              
        'Título' : titulo,
        'Estado' : estado
    }
    tareas.push(nuevaTarea)
    fs.writeFileSync('./db/tareas.json',JSON.stringify(tareas),'utf-8')
    console.log('Tarea agregada con éxito')
},
listarTareas : function() {
        tareas.forEach(tarea => {
        console.log(tarea);
    });
},
filtrarTareas : function(filtro) {
    let tareasFiltradas = tareas.filter(tarea => tarea.Estado === filtro || tarea.Título.includes(filtro))
    return console.log(tareasFiltradas);
},
deshacer : function() {
      tareas.pop()
      fs.writeFileSync('./db/tareas.json',JSON.stringify(tareas),'utf-8')
      console.log('La última tarea agregada fue eliminada con éxito');
},
listarComandos : function() {
    comandos.forEach(comando => {
    console.log(comando)});
}}