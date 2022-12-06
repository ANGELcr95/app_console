import fs from 'fs';

const file = './src/db/data.json' //desde la raiz del proyecto 

export const saveDB = (data)=>{
    fs.writeFileSync(file, JSON.stringify(data))
}

export const readDB = ()=>{
    if (!fs.existsSync(file)) {
        return null
    }
    const info = fs.readFileSync(file,   {encoding: 'utf8'})
    const data = JSON.parse(info)
    
    return data
}