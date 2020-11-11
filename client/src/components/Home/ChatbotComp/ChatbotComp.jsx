import ChatBot from 'react-simple-chatbot';

import React, { Component, Fragment } from 'react';
import QuestionComponent from './QuestionComponent/QuestionComponent';

import './ChatbotComp.css';

class ChatBotComp extends Component {
	state = {};
	render() {
		return (
			<Fragment>
				<div className="chatbot-wrapper">
					<ChatBot
						steps={[
							// {
							// 	id: '1',
							// 	message: "Hello, what's your name?",
							// 	trigger: 'name',
							// },
							// {
							// 	id: 'name',
							// 	user: true,
							// 	trigger: '3',
							// },
							// {
							// 	id: '3',
							// 	message: 'Hi {previousValue}, are you faculty or student?',
							// 	trigger: '4',
							// },
							// {
							// 	id: '4',
							// 	user: true,
							// 	trigger: 'question',
							// },
							{
								id: '1',
								message: 'Ask me any question about UTD',
								trigger: 'question',
							},
							{
								id: 'question',
								user: true,
								trigger: 'question_component',
							},
							{
								id: 'question_component',
								component: (
									<QuestionComponent
										updateQuestions={this.props.updateQuestions}
									/>
								),
								waitAction: true,
							},
						]}
					/>
				</div>
			</Fragment>
		);
	}
}

export default ChatBotComp;
