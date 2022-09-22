import client from './retriveCredentials.js';

client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query("DROP TABLE IF EXISTS todos;", function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      console.log('deleteTable');
      // >> output: 2018-08-23T14:02:57.117Z
      client.end();
    });
  });