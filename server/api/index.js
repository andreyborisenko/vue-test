const express = require('express');
const router = express.Router();
const methods = require('./sortings');
const bodyParser = require('body-parser');
const parser = require('./parser');

router.use(bodyParser.json());

router.use((req, res) => {
	console.log('here')
	res.end()
})

router.get('/methods', async (req, res) => {
	res.send(Object.keys(methods));
})

router.post('/sort/:method', async (req, res, next) => {
	let method =req.params.method
	console.log(`${method} exists in methods ? ${method in methods}`)

	if (method in methods) {
		data = parser(req.body)
		return res.send(methods[method](data));
	}
	
	next()
});

router.use((req, res) => {
	res.end();
})

module.exports = router;