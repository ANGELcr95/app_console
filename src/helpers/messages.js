import 'colors'
import readLine from 'readline'

export const showMenu = () => {

    return new Promise((resolve) => {
        // console.clear();
        console.log('================================');
        console.log('         Select a option       ');
        console.log('================================');

        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tareas(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir \n`);

        const rl= readLine.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        rl.question('Seleccione una opcion: ', (opt)=>{
            rl.close();
            resolve(opt)
        })
    })
}


export const stop = ()=>{
    return new Promise((resolve, reject) => {
        const rl= readLine.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        rl.question(`Presione ${ 'ENTER'.green } para continuar` , (opt)=>{
            rl.close();
            resolve()
        })
    })
}
