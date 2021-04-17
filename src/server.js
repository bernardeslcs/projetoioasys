const express = require('express');
const app = express();
const routes = require('./routes/routes');
//const env = require('dotenv');
require('./database');

app.use(express.json());

app.use(routes);


app.listen(3333);