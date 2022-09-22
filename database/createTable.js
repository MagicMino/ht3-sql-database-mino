import client from './retriveCredentials.js';

client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query(`CREATE TABLE IF NOT EXISTS todos (
        id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, task TEXT);`, function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      console.log('createdTable');
      // >> output: 2018-08-23T14:02:57.117Z
      client.end();
    });
  });

