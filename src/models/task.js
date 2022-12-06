import { v4 as uuidv4 } from 'uuid';

class Task {
    id = ''
    desc = ''
    completadoEnd = null

    constructor(desc){
        this.id = uuidv4()
        this.desc = desc
        this.completadoEnd = null
    }
}


export default Task