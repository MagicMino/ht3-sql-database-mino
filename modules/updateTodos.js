import instantClient from '../database/retriveCredentials.js'


export async function updateTodos(newTask, id) {
    const client = instantClient();
    const queryText = `UPDATE todos SET task = '${newTask}' WHERE id = ${id} RETURNING *`;
    //console.log(newTask, queryText);
    let result = await client.query(queryText);
    console.log(result.rows);
    client.end();
    return result.rows
  };