//import { pool } from '../database/retriveCredentials.js';
//import client from '../database/retriveCredentials.js';


// async function getTodos () {const response = await client.query('SELECT * FROM todos;');
// return response.rows}


// async function getTodos () {const response = await client.connect(function(err) {
//     if(err) {
//       return console.error('could not connect to postgres', err);
//     }
//     client.query(`SELECT * FROM todos`,
//     async function(err, result) {
//     if(err) {
//     return console.error('error running query', err);
//     }
//     console.log(result.rows);
//      //>> output: 2018-08-23T14:02:57.117Z
//     client.end();
//     });
//   }); return response
// };

// export async function getTodos() {
//     console.log("getTodos started")
//     const result = await pool.query(
//       `SELECT * FROM todos`);
//    console.log("getTodos 2 started")
// return result.rows
//     }


// export default getTodos;
//console.log (getTodos());

import instantClient from '../database/retriveCredentials.js'

export async function getTodos() {
  const client = instantClient();
  let result = await client.query('SELECT NOW() AS "theTime"');
  console.log(result.rows);
  client.end();
  return result.rows[0].theTime
};