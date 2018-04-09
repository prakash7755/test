'use strict';
const path = require('path')
const express = require('express');
const router = express.Router();
const { CmsData } = require(path.resolve('./models'));


router.route('/')

.post((req, res, next) => {
	const product = req.body.product.split(',');
	const services = req.body.services.split(',');
    req.body.product = product;
    req.body.services = services;
	const cmsData = new CmsData(req.body);
	try{
		const result = cmsData.save();
		if (!result) {
			return res.json({message: 'Not Updated Successfully'})
		}
		 res.json({message: 'updated Successfully'})
	}
	catch(error){
		next(error)
	}
})


.get(async(req, res, next) => {
	try {
		const result = await CmsData.find({})
		if (result.length === 0) {
			return res.json({message: 'No Data Found In DataBase'})
		}
       res.json(result)
	}
	catch (error){
		next(error)
	}
})

module.exports = router;