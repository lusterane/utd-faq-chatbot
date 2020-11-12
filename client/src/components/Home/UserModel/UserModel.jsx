import React, { Component, Fragment } from 'react';

import './UserModel.css';

class UserModel extends Component {
	state = {};

	render() {
		const { name, userType, questionData } = this.props;
		return (
			<Fragment>
				<div className="user-model-wrapper card-border">
					<div>
						<b>USER MODEL</b>
					</div>
					<div>Name: {name}</div>
					<div>User Type: {userType}</div>
					<div>
						Question: {questionData.question ? questionData.question.message : ''}
					</div>
					<div>Matched FAQ Question: {questionData ? questionData.faqQuestion : ''}</div>
					<div>Matched FAQ Answer: {questionData ? questionData.faqAnswer : ''}</div>
				</div>
			</Fragment>
		);
	}
}

export default UserModel;
