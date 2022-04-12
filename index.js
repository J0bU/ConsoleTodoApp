const { inquirerMenu, inquirerPause } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

require('colors');
const main = async () => {
 // let option;
 // do {
 //  option = await inquirerMenu();
 //  await inquirerPause();
 // }while(option !== 0)
 const tarea = new Tarea('Something here');
 console.log(tarea);
 const tareas = new Tareas();
 tareas._listado[tarea.id] = tarea;
 console.log(tareas);
}
main(); 