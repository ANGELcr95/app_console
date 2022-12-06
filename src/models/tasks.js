/**
 * _listado
 *    { 'uuid-123712-12344-3: { id:12, desc:asd, completadoEN: 923123}},
 */
import 'colors'
import Task from './task.js'

class Tasks {
    _listado = {}

    constructor(){
        this._listado = {}
    }

     // tranfor de  object to array
     get listadoArr () {
        const listado  = []
        Object.keys(this._listado).forEach(key => {
            const task = this._listado[key]
            listado.push(task)
        })
        return listado
    }

    deleteTask(id = ''){
        if (this._listado[id]) {
            delete this._listado[id]
        }
    }

    toggleCompleted (ids = []){
        ids.forEach(id => {
            const task = this._listado[id]
            if (!task.completadoEnd) {
                task.completadoEnd = new Date().toISOString()
            }
        })

        this.listadoArr.forEach( task => {
            if (!ids.includes(task.id)) {
                this._listado[task.id].completadoEnd = null
            }
        })
    }


    // creo la tarea empujando  y va al listado
    createdTask( desc = ''){
        const task = new Task(desc)
        this._listado[task.id] = task;
    }

    // recupero del json y va para el listado
    loadTaskOfArrayJSON( tasks = []){
        tasks.forEach(task => this._listado[task.id] = task)
    }

    listCompleted(){
        this.listadoArr.forEach((task, i) => {
            const idx = `${i + 1}.`.green
            const {desc, completadoEnd} = task
            const status = completadoEnd ? 'Completado'.green : 'Pendiente'.red
            
            console.log(`${idx} ${desc} :: ${status}`);
            
        })
    }

    listCompletedPending(bool) {
        let counter = 0;
        this.listadoArr.forEach((task) => {
            const {desc, completadoEnd} = task
            const status = completadoEnd ? completadoEnd.green : 'Pendiente'.red
            if (bool && completadoEnd){
                counter += 1
                const index = `${counter}.`.green
                console.log(`${index} ${desc} :: ${status}`);
            } else if(!bool && !completadoEnd){
                counter += 1
                const index = `${counter}.`.green
                console.log(`${index} ${desc} :: ${status}`);
            }
        })
    }
}


export default Tasks