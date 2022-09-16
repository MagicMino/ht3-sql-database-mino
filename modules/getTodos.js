
import client from '../database/retriveCredentials.js';


async function getTodos () {const response = await client.query('SELECT * FROM todos;');
return response.rows}

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
//      >> output: 2018-08-23T14:02:57.117Z
//     client.end();
//     });
//   }); return response
// };

export default getTodos;
//console.log (getTodos());