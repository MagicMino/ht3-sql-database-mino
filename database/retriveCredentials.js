//or native libpq bindings
//var pg = require('pg').native
import pg from 'pg';

import dotenv from 'dotenv';
dotenv.config();
const url=process.env.pgurl

var client = new pg.Client(url);

export default client;