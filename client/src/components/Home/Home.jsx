import React, { Component, Fragment } from 'react';

import ChatbotComp from './ChatbotComp/ChatbotComp';
import ShowQueryCard from './ShowQueryCard/ShowQueryCard';
import { Spinner, Alert } from 'react-bootstrap';

import './Home.css';
import UserModel from './UserModel/UserModel';
import CurrentScrapedSites from './CurrentScrapedSites/CurrentScrapedSites';
import RecentlyAsked from './RecentlyAsked/RecentlyAsked';

class Home extends Component {
	state = { questions: [],
		name: '',
		userType: '',
		questionData: {},
    };

    handleName = (name) => {
        this.setState({ name: name})
    }

    handleUserType = (userType) => {
        this.setState({ userType: userType })
    }

    handleQuestionsAnswered = (question, faqQuestion, faqAnswer) => {
        this.setState({ questionData : { question, faqQuestion, faqAnswer} })
    }

	updateQuestions = (questions) => {
		this.setState({ questions: questions });
	};

	
	render() {
		const {name, userType, questionData} = this.state;
		return (
			<Fragment>
				<Alert variant="success">
					I'm on free-tier hosting. The page may load slowly or crash!
					<br></br>
					<br></br>
					Please wait at least <b>15s</b> for stuff to load or refresh. Thank you!!
				
				
				</Alert>
				<div className="home-wrapper">
					<ChatbotComp
						updateQuestions={this.updateQuestions}
						handleName={this.handleName}
						handleUserType={this.handleUserType}
						handleQuestionsAnswered={this.handleQuestionsAnswered}
					/>
					<div>
						<RecentlyAsked />
						<UserModel name={name} userType={userType} questionData={questionData} />
						<CurrentScrapedSites />
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Home;
