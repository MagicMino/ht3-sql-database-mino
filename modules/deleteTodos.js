import instantClient from '../database/retriveCredentials.js'

export async function deleteTodos(id) {
  const client = instantClient();
  let result = await client.query(`DELETE FROM todos WHERE id = ${id} RETURNING *`);
  console.log(result.rows);
  client.end();
  return result.rows
};