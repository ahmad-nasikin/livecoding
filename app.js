'use strict'

const express = require('express')
const bodyParser = require('body-parser')

var app = express();

var index = require('./router/index');


app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', index);
app.use('/movies', movies);


app.listen(3006, () => {
  console.log('listening on port 3006...');
})
