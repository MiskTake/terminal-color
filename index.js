// Importamos la librería chalk
import chalk from 'chalk';

// Mensajes iniciales
console.log(chalk.blue('👋 ¡Bienvenido a la Terminal Parlante!'));
console.info(chalk.green('ℹ️ Esta terminal está viva... y tiene estilo.'));
console.warn(chalk.yellow('⚠️ Atención: Esto puede ponerse colorido.'));
console.error(chalk.red('❌ Error simulado: algo salió demasiado bien.'));
console.log(chalk.magenta('💡 Recuerda: la práctica hace al programador.'));

// BONUS: función básica
function saludar(nombre) {
  console.log(chalk.cyan(`Hola ${nombre}, ¡bienvenido al mundo JavaScript! 🌍`));
}

// Prueba de función
saludar("Equipo JS");

function mostrarEstado(){
  console.log(chalk.white('🚀 Inicio del programa... ¡que comience el caos controlado!'));
  console.info(chalk.blue('⚙️ Proceso en ejecución... o eso espero. Nadie lo sabe realmente.'));
  console.log(chalk.green('✅ ¡Finalización exitosa! Celebra con un snack, lo mereces.'));
}

mostrarEstado();

function simularError(){
  console.log(chalk.yellow('🙈 Advertencia: algo huele raro en el código... ¿fuiste tú?'));
  console.info(chalk.red('💥 Error crítico: el desarrollador necesita más café urgentemente.'));
  console.log(chalk.green('🦾 Recuperación épica completada. El héroe ha vuelto.'));
}

simularError();