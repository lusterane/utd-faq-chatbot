import React, { Component, Fragment } from 'react';

import ChatbotComp from './ChatbotComp/ChatbotComp';
import ShowQueryCard from './ShowQueryCard/ShowQueryCard';
import { Button } from 'react-bootstrap';

import './Home.css';

class Home extends Component {
	state = { questions: [] };

	updateQuestions = (questions) => {
		this.setState({ questions: questions });
	};
	render() {
		return (
			<Fragment>
				<div className="home-wrapper">
					<ChatbotComp updateQuestions={this.updateQuestions} />
					<Button variant="outline-dark">Dark</Button>
				</div>
			</Fragment>
		);
	}
}

export default Home;
