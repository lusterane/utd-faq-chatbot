const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const RecentQuestion = require('../models/recentQuestion');

router.post('/', (req, res) => {
	const request = req.body;
	const recentQuestion = new RecentQuestion({
		user: request.user,
		userType: request.userType.toUpperCase(),
		date: Date.now(),
		questionData: {
			userQuestion: request.questionData.userQuestion,
			faqQuestion: request.questionData.faqQuestion,
			faqAnswer: request.questionData.faqAnswer,
		},
	});

	// saves in database
	recentQuestion
		.save()
		.then((data) => {
			// send back the data
			res.status(200).send(data);
		})
		.catch((err) => {
			// send back error message
			res.status(500).send({
				message: err,
			});
		});
});

router.delete('/:userType', (req, res) => {
	const userType = req.params.userType;
	RecentQuestion.deleteMany({ userType: userType.toUpperCase() })
		.then((data) => {
			res.status(200).send(data);
		})
		.catch((err) => {
			res.status(500).send({ message: err });
		});
});

router.get('/:userType', (req, res) => {
	const userType = req.params.userType.toUpperCase();
	RecentQuestion.find({ userType: userType })
		.then((data) => {
			res.status(200).send(data);
		})
		.catch((err) => {
			res.status(500).send({ message: err });
		});
});

module.exports = router;
