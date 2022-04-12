const { resolve } = require('path');

require('colors');

module.exports.mostrarMenu = () => {

 return new Promise(resolve => {
  console.clear();
  console.log('*************************'.cyan);
  console.log(' Seleccione una opción '.red);
  console.log('*************************\n'.cyan);
 
  console.log(`${'1.'.green} Crear tarea`);
  console.log(`${'2.'.green} Listar tareas`);
  console.log(`${'3.'.green} Listar tareas completadas`);
  console.log(`${'4.'.green} Listar tareas pendientes`);
  console.log(`${'5.'.green} Completas tarea(s)`);
  console.log(`${'6.'.green} Borrar tarea`);
  console.log(`${'0.'.green} Salir \n`);
 
  const leerLinea = require('readline').createInterface({
   input: process.stdin,
   output: process.stdout
  });
 
  leerLinea.question('Selecciona una opción: ', (opt) => {
   leerLinea.close();
   resolve(opt);
  });
 });

}

module.exports.pausarMenu = () => {
 return new Promise(resolve => {

  const leerLinea = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
 });

 leerLinea.question(`Presione ${ 'ENTER'.red } para continuar...`, (opt) => {
  leerLinea.close();
  resolve();
 });
 });
}

