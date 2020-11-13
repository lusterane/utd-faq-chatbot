import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import React, { Component, Fragment } from 'react';

import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

import './RecentlyAsked.css';

class RecentlyAsked extends Component {
	state = {
		showStudent: false,
		showFaculty: false,
		showRefresh: false,
		refreshTime: ''
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
		this.setState({showRefresh: true, refreshTime: new Date()})
	};

	async getRecentlyAsked(userType) {
		console.log('HTTP CALL: getRecentlyAsked');
		const endpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:5000';
		const response = await fetch(endpoint + `/recentlyAsked/` + userType)
			.then((res) => res.json({ message: 'Recieved' }))
			.then(
				(result) => {
					if (result.length !== 0)  {
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
					
					}
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
		const { showStudent, showFaculty, student, faculty, showRefresh, refreshTime } = this.state;

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
					{showStudent && student? (
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

					{showFaculty && faculty ? (
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
					{showRefresh ? <div className="refresh-message">Refreshed {refreshTime.toString()}</div> : ''}
				</div>
			</Fragment>
		);
	}
}

export default RecentlyAsked;
