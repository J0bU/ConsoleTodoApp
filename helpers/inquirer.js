const { read } = require('fs');
const inquirer = require('inquirer');
require('colors');

const menuOptions = [
 {
  type: 'list',
  name: 'option',
  message: '¿Qué desea hacer?',
  choices: [
   {
    value: 1,
    name: '1. Crear tarea'
   },
   {
    value: 2,
    name: '2. Listar tareas'
   },
   {
    value: 3,
    name: '3. Listar tareas completadas'
   },
   {
    value: 4,
    name: '4. Listar tareas pendientes'
   },
   {
    value: 5,
    name: '5. Completar tareas'
   },
   {
    value: 6,
    name: '6. Borrar tarea'
   },
   {
    value: 0,
    name: '0. Salir'
   },
  ]
 }
];

module.exports.inquirerMenu = async () => {
 console.clear();
 console.log('*************************'.cyan);
 console.log(' Seleccione una opción '.red);
 console.log('*************************\n'.cyan);

 const { option } = await inquirer.prompt(menuOptions);
 return option;
}

module.exports.inquirerPause = async () => {

 return await inquirer.prompt({ type: 'input', name: 'pause', message: `Presione ${ 'ENTER'.green } para continuar...`})
}
