import React, { Component } from 'react';

class TriggerYesQuestion extends Component {
	state = {};

	componentDidMount() {
		this.props.triggerNextStep();
	}

	render() {
		return <div></div>;
	}
}

export default TriggerYesQuestion;
