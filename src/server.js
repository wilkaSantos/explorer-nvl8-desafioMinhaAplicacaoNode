const express = require('express');
const database = require('./database/knex');
const routes = require('./routes');

const application = express();
const port = 8080;    

application.use(express.json());
application.use(routes);
database();

application.listen(port, ()=> console.log(`Porta em execucao ${port}.`));
