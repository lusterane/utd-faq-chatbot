import ChatBot from 'react-simple-chatbot';

import React, { Component, Fragment } from 'react';
import QuestionComponent from './QuestionComponent/QuestionComponent';

import './ChatbotComp.css';
import TriggerYesQuestion from '../../TriggerComponents/TriggerYesQuestion';

class ChatBotComp extends Component {
	state = {};
	render() {
		{}
		return (
			<Fragment>
				<div className="chatbot-wrapper">
					<ChatBot
						width={'500px'}
						steps={[
							{
								id: '1',
								message: "Hello, what's your name?",
								trigger: 'name',
							},
							{
								id: 'name',
								user: true,
								trigger: '3',
							},
							{
								id: '3',
								message: 'Hi {previousValue}, are you faculty or student?',
								trigger: 'type',
							},
							{
								id: 'type',
								user: true,
								trigger: '4',
							},
							{
								id: '4',
								message: 'Good to know!',
								trigger: '5',
							},
							
							{
								id: '5',
								message: 'Ask me any question about UTD (ex: How do I apply to UTD?)',
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
										handleName={this.props.handleName} 
										handleUserType={this.props.handleUserType} 
										handleQuestionsAnswered={this.props.handleQuestionsAnswered}
									/>
								),
								trigger: '10'
							},
							{
								id: '10',
								message: 'Do you have another question?',
								delay: 15000,
								trigger: 'loop_question'
							},
							{
								id: 'loop_question',
								options: [
									{ value: 1, label: "Yes, another question.", trigger: 'another question'},
									{ value: 2, label: "No, I'm good.", trigger: 'exit'}
								]
							},
							{
								id: 'another question',
								message: 'No problem! What other question may you have?',
								trigger: 'question',
							},
							{
								id: 'exit',
								message: 'Thanks for using UTD Chatbot!',
								end: true
							}
						]}
					/>
				</div>
			</Fragment>
		);
	}
}

export default ChatBotComp;
