import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import React, { Component, Fragment } from 'react';

import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

import './RecentlyAsked.css';

class RecentlyAsked extends Component {
	state = {
		student: {},
		faculty: {},
		showStudent: false,
		showFaculty: false,
	};

	componentDidMount() {
		this.getRecentlyAsked('student');
		this.getRecentlyAsked('faculty');
	}

	toggleShowStudent = () => {
		this.setState({ showStudent: !this.state.showStudent });
	};

	toggleShowFaculty = () => {
		this.setState({ showFaculty: !this.state.showFaculty });
	};

	refreshComponent = () => {
		this.getRecentlyAsked('faculty');
		this.getRecentlyAsked('student');
	};

	async getRecentlyAsked(userType) {
		console.log('HTTP CALL: getRecentlyAsked');
		const endpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:5000';
		const response = await fetch(endpoint + `/recentlyAsked/` + userType)
			.then((res) => res.json({ message: 'Recieved' }))
			.then(
				(result) => {
					const { questionData, user, userType, date } = result[0];
					userType === 'FACULTY'
						? this.setState({
								faculty: {
									user: user,
									userType: userType,
									date: date,
									questionData: questionData,
								},
						  })
						: this.setState({
								student: {
									user: user,
									userType: userType,
									date: date,
									questionData: questionData,
								},
						  });
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
		const { showStudent, showFaculty, student, faculty } = this.state;

		return (
			<Fragment>
				<div className="recently-asked-wrapper card-border">
					<FontAwesomeIcon
						className="refresh-button"
						onClick={this.refreshComponent}
						icon={faSyncAlt}
					/>

					<div>
						<b>Recently asked by student:</b>{' '}
					</div>
					{showStudent ? (
						<div className="show-recent-wrapper">
							<div>Name: {student.user}</div>
							<div>Date: {student.date}</div>
							<div>user_Q: {student.questionData.userQuestion}</div>
							<div>Q: {student.questionData.faqQuestion}</div>
							<div>A: {student.questionData.faqAnswer}</div>
						</div>
					) : (
						''
					)}
					<Button
						variant="outline-light normal-text-size"
						onClick={this.toggleShowStudent}
					>
						SHOW
					</Button>

					<div>
						<b>Recently asked by faculty: </b>
					</div>

					{showFaculty ? (
						<div className="show-recent-wrapper">
							<div>Name: {faculty.user}</div>
							<div>Date: {faculty.date}</div>
							<div>user_Q: {faculty.questionData.userQuestion}</div>
							<div>Q: {faculty.questionData.faqQuestion}</div>
							<div>A: {faculty.questionData.faqAnswer}</div>
						</div>
					) : (
						''
					)}

					<Button
						variant="outline-light normal-text-size"
						onClick={this.toggleShowFaculty}
					>
						SHOW
					</Button>
				</div>
			</Fragment>
		);
	}
}

export default RecentlyAsked;
