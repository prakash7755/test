'use strict';
const bodyParser = require('body-parser');
const cmsData = require('./cms-data');

function routes(app){
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	app.use('/api', cmsData) 
}

module.exports = routes;