import { Fragment } from 'react';

import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './ShowQueryCard.css';

class ShowQueryCard extends Component {
	state = {
		currentCosinSim: '',
		currentQuestion: '',
		currentAnswer: '',
		index: 0,
		showAnswer: '',
	};

	componentDidMount() {
		this.updateCurrentQuestion(0);
	}

	toggleShowAnswer = () => {
		this.setState({ showAnswer: !this.state.showAnswer });
	};
	handleIndexIncrement = () => {
		const { index } = this.state;

		const { response } = this.props.questions;

		if (index != response.length - 1) {
			this.updateCurrentQuestion(this.state.index + 1);
		}
	};

	handleIndexDecrement = () => {
		const { index } = this.state;

		if (index != 0) {
			this.updateCurrentQuestion(this.state.index - 1);
		}
	};

	updateCurrentQuestion = (index) => {
		const { response } = this.props.questions;

		this.setState({
			index: index,
			currentCosinSim: response[index][0],
			currentQuestion: response[index][1],
			currentAnswer: response[index][2],
		});
	};

	render() {
		const { currentAnswer, currentCosinSim, currentQuestion, index, showAnswer } = this.state;
		const { response } = this.props.questions;
		return (
			<Fragment>
				<div className="card-wrapper">
					<div className="direction-wrapper">
						<FontAwesomeIcon
							className={index == 0 ? 'grey left-arrow' : 'left-arrow'}
							onClick={this.handleIndexDecrement}
							icon={faChevronLeft}
						/>
						<FontAwesomeIcon
							className={
								index == response.length - 1 ? 'grey right-arrow' : 'right-arrow'
							}
							onClick={this.handleIndexIncrement}
							icon={faChevronRight}
						/>
					</div>
					<div className="text-response">
						<b>Cosin Similarity:</b> {currentCosinSim}
					</div>
					<div className="text-response">
						<b>Question:</b> {currentQuestion}
					</div>
					{showAnswer ? (
						<div className="text-response">
							<b>Answer:</b> {currentAnswer}
						</div>
					) : (
						''
					)}
				</div>
				<Button variant="outline-dark">Dark</Button>
			</Fragment>
		);
	}
}

export default ShowQueryCard;
