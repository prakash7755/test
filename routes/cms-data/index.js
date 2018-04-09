'use strict';
const path = require('path')
const express = require('express');
const router = express.Router();
const { CmsData } = require(path.resolve('./models'));


router.route('/')

.post((req, res, next) => {
	const cmsData = new CmsData(res.body)
	cmsData.save() 
	  .then(data => {
	  	res.json({message: 'updated Successfully', data})
	  })
	  .catch(error => {
	  	res.json({message: 'sorry...! server problem'});
	  })
})


.get((req, res, next) => {
	CmsData.find({})
	  .then(data => {
	  	res.json(data)
	  })
	  .catch(error => {
	  	res.json({message: 'sorry...! server problem'});
	  })
})

module.exports = router;