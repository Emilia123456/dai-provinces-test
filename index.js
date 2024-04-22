import {getAllAsync, getById, insertProvince, deleteProvince} from './src/respository/province-repository.js';

const result = await getAllAsync(); 
console.log(result.rows);

const result1 = await getById(2);
console.log('Resultados: length', result1.rows.length);
console.log('result.rows[0]', result1.rows[0]);

await insertProvince();

const result2 = await deleteProvince("Jujuy");
console.log('Resultados: length', result2.rows.length);

