import 'colors'
import { showMenu, stop } from './helpers/messages.js'
import { 
    inquirerMenu, 
    inquireStop,
    listDeleteTask,
    question,
    readInput,
    showtoCompletedList
   } from './helpers/inquirer.js'
import Tasks from './models/tasks.js'
import { saveDB, readDB } from './helpers/saveFile.js'

const main = async () => {
    let opt = ''
    const tasks = new Tasks()
    const tasksDB = readDB() // LEO  LA BASE DE JSON Y LA  SOBRESCRIBO  PARA NO PERDER INFORMACION
    if (tasksDB) {
        tasks.loadTaskOfArrayJSON(tasksDB)
    }

    do {
        opt = await inquirerMenu()
        switch (opt) {
            case '1':
                const desc = await readInput('Descripcion:')
                tasks.createdTask(desc)
                break
            case '2':
                tasks.listCompleted()//  aqui transformo el object to array para verlo mejor
                break
            case '3':
                tasks.listCompletedPending(true)//  aqui transformo el object to array para verlo mejor
                break
            case '4':
                tasks.listCompletedPending()//  aqui transformo el object to array para verlo mejor
                break
            case '5':
                const ids = await showtoCompletedList(tasks.listadoArr)
                console.log(ids);
                tasks.toggleCompleted(ids)
                
                break
            case '6':
                await listDeleteTask(tasks.listadoArr)
                .then(async (id)=>{
                    if( id === '0') return
                    const answer = await question('Estas seguro de elimar esta tarea')
                    if (answer) {
                        tasks.deleteTask(id)
                        console.log('Tarea borrada correctamente');
                        return
                    }
                    console.log('Cancelado');
                })

                // tasks.deleteTask(id)
                break
        }
        
        saveDB(tasks.listadoArr)

        if (opt !== '0') await inquireStop()
    } while (opt !== '0');

  
    
    // stop()
}

main()