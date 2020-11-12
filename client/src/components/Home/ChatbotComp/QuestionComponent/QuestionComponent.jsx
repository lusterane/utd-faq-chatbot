import React, { Component, Fragment } from 'react';
import { Spinner } from 'react-bootstrap';
import ShowQueryCard from '../../ShowQueryCard/ShowQueryCard';

import './QuestionComponent.css';

class QuestionComponent extends Component {
	state = { questions: [], isLoaded: false };

	componentDidMount() {
		this.getIntentsFromDB();
		this.updateUserModel();
	}

	updateUserModel = () => {
		const { name, type, question } = this.props.steps;
		this.props.handleName(name.message)
		this.props.handleUserType(type.message)
	}

	handleAnsweredQuestion = (faqQuestion, faqAnswer) => {
		const { question } = this.props.steps;
		this.props.handleQuestionsAnswered(question, faqQuestion, faqAnswer);
	}

	async getIntentsFromDB() {
		console.log('HTTP CALL: getQuestionQuery');
		const endpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:5000';
		const response = await fetch(endpoint + `/question/` + this.props.steps.question.message)
			.then((res) => res.json({ message: 'Recieved' }))
			.then(
				(result) => {
					this.setState({
						questions: JSON.parse(JSON.stringify(result)),
						isLoaded: true,
					});
					localStorage.setItem('query', JSON.parse(JSON.stringify(result)));
					return result.status;
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					console.log('error');
					this.setState({
						error,
					});

					return error.status;
				}
			);

		let data = await response;

		return data;
	}
	render() {
		const { questions, isLoaded } = this.state;
		return (
			<Fragment>
				{isLoaded ? (
					<div className="dark normal-font-size">
						<ShowQueryCard questions={questions} handleAnsweredQuestion={this.handleAnsweredQuestion} />
					</div>
				) : (
					<Spinner animation="border" variant="dark" role="status">
  						<span className="sr-only">Loading...</span>
					</Spinner>
				)}
			</Fragment>
		);
	}
}

export default QuestionComponent;
