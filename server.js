'use strict';
const express = require('express');
const app = express();
const { db } = require('./models')
const port = process.env.PORT || 3000;

require('./routes')(app)



app.listen(port, () => {
	console.log(`App Listen port @ ${ port }`)
})