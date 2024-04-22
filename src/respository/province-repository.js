import config from '../db-config.js';
import pkg from 'pg' 
const { Client }  = pkg;

const client = new Client(config);
await client.connect();

async function getAllAsync() {
    let sql = `SELECT * from provinces`; 
    let result = await client.query(sql);
    return result.rows;
}

async function getById(id){
    let sql = 'SELECT * from provinces WHERE id=$1'; // Array con los valores. 
    const values = [id]; 
    let result = await client.query(sql, values); 
    return result;

    // En 'result.rows.length' tenemos un 1. 
    // En 'rows[0]' tenemos el resultado de la consulta (un objeto) 
}

async function insertProvince(){
    let sql = `INSERT INTO provinces (name, full_name, latitude, longitude, display_order)            
    VALUES                
        ($1, $2, $3, $4, $5)`; // Array con los valores.
    const valores = ['Jujuy', 'Provincia de Jujuy', -23.319974, -65.764427, 3]; 
    const resultado = await client.query(sql, valores); 
}

async function deleteProvince(name){
    let sql = 'DELETE from provinces WHERE name=$1'; // Array con los valores. 
    const parametro = [name]; 
    const output = await client.query(sql, parametro); 
    
    return output;
}



export { getAllAsync, getById, insertProvince, deleteProvince};
