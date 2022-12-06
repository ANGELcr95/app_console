import 'colors'
import inquirer from 'inquirer';

const menuOpt = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value:'1',
                name:`${'1.'.green} Crear tarea`
            },
            {
                value:'2',
                name:`${'2.'.green} Listar tareas`
            },
            {
                value:'3',
                name:`${'3.'.green} Listar tareas completadas`
            },
            {
                value:'4',
                name:`${'4.'.green} Listar tareas pendientes`
            },
            {
                value:'5',
                name:`${'5.'.green} Completar tarea(s)`
            },
            {
                value:'6',
                name:`${'6.'.green} Borrar tarea`
            },
            {
                value:'0',
                name:`${'0.'.green} Salir`
            },
        ],
    }
]


// ====== menu inicial ======

export const inquirerMenu = async () => {
    console.clear();
    console.log('================================'.green);
    console.log('         Select a option       '.white);
    console.log('================================'.green);
    
    const { opcion } = await inquirer.prompt(menuOpt)

    return opcion
}


// ====== leer input ====== 

const prompStop = [
    {
        type: 'input',
        name: 'stop',
        message: `Presione ${ 'ENTER'.green } para continuar`,
    }
]

export const inquireStop = async ()=>{
    console.log('\n');
    await inquirer.prompt(prompStop)
}


// ====== leer input ====== 

export const readInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate (value) {
                if( value.length === 0) {
                    return 'Por favor ingrese un valor'
                }
                return true
            }
        }
    ]

    const { desc } = await inquirer.prompt(question)
    return desc
}

// estrucuturo delete con el json de las tareas

export const listDeleteTask = async (tasks=[]) => {

    const choices = tasks.map((task, index)  => {
        const { desc, id } = task
        const idx = `${index + 1}.`.green

        let taskText = `${idx} ${desc}` 
        return {
            value: id,
            name: taskText
        }
    })

    choices.unshift({
        value: `0`,
        name: '0.'.green + ' Cancelar'
    })

    let menuTaskDelete = [
        {
            type: 'list',
            name: 'id',
            message: 'Que tarea deseas eliminar?',
            choices
        }
    ]

    const { id } = await inquirer.prompt(menuTaskDelete)
    return id
}

// require queston for be sure delete task


export const question = async(message) => {
    const question = [
        {
            type: 'confirm',
            name: 'answer',
            message,
        }
    ]

    const { answer } = await inquirer.prompt(question)
    return answer
}


// require queston for be sure delete task

export const showtoCompletedList = async (tasks=[]) => {

    const choices = tasks.map((task, index)  => {
        const { desc, id, completadoEnd } = task
        const idx = `${index + 1}.`.green

        let taskText = `${idx} ${desc}` 
        return {
            value: id,
            name: taskText,
            checked: completadoEnd ? true : false
        }
    })

    let menuTaskDelete = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(menuTaskDelete)
    return ids
}



