'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CmsData = new Schema({
	aboutp1: {type: String},
	aboutp2: {type: String},
	aboutp3: {type: String},
	product: {type: String},
	services: {type: String},
    email: {type: String, unique: true},
    email1: {type: String, unique: true},
    mobile: {type: Number},
    mobile1: {type: Number},
    address: {type: String}
})


module.exports = mongoose.model('CmsDatas', CmsData);