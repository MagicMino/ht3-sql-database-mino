import instantClient from '../database/retriveCredentials.js'


export async function postTodos(newTask) {
    const client = instantClient();
    const queryText = `INSERT INTO todos(task) VALUES('${newTask}') RETURNING *;`;
    //console.log(newTask, queryText);
    let result = await client.query(queryText);
    console.log(result.rows);
    client.end();
    return result.rows
  };
// INSERT INTO table_name(column1, column2, …)
// VALUES (value1, value2, …);