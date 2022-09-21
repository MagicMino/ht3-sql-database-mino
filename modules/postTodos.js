import instantClient from '../database/retriveCredentials.js'

export async function postTodos(task) {
  const client = instantClient();
  let result = await client.query(`INSERT INTO todos(task) VALUES (${task})`);
  console.log(result.rows);
  client.end();
  return result.rows
};

// INSERT INTO table_name(column1, column2, …)
// VALUES (value1, value2, …);