import React, { Component, Fragment } from 'react';
import { Loading } from 'react-simple-chatbot';
import ShowQueryCard from '../../ShowQueryCard/ShowQueryCard';

import './QuestionComponent.css';

class QuestionComponent extends Component {
	state = { questions: [], isLoaded: false };

	// componentDidUpdate(prevProps, prevState) {
	// 	const { question } = this.props.steps;
	// 	if (prevProps.question !== question) {
	// 		this.setState({ propsLoaded: true }, this.getIntentsFromDB());
	// 	}
	// }

	componentDidMount() {
		this.getIntentsFromDB();
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
						<ShowQueryCard questions={questions} />
					</div>
				) : (
					<Loading className="dark" />
				)}
			</Fragment>
		);
	}
}

export default QuestionComponent;
