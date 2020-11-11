const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// gets cosin similarity computation
router.get('/:question', async (req, res) => {
	try {
		const uri =
			'https://us-central1-utd-faq-chatbot.cloudfunctions.net/find_answer_test?question=' +
			encodeURIComponent(req.params.question);
		const response = await fetch(uri);
		const json = await response.json();
		res.status(200).json(json);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
});

module.exports = router;
