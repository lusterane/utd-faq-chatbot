const mongoose = require('mongoose');

const RecentQuestionSchema = mongoose.Schema({
	user: String,
	userType: String,
	date: Date,
	questionData: {
		userQuestion: String,
		faqQuestion: String,
		faqAnswer: String,
	},
});

module.exports = mongoose.model('RecentQuestions', RecentQuestionSchema);
