import React, { Component } from "react";

export default class TextArea extends Component {
	state = {
		value: ""
	};

	handleChange = event => {
		console.log(
			"Text area => handleChange => this.state.value: ",
			this.state.value
		);
		console.log(
			"Text area => handleChange => event.target.value: ",
			event.target.value
		);

		let styledVal = this.setState({ value: event.target.value });
	};
	render() {
		return (
			<textarea
				id="story"
				value={this.state.value}
				onChange={this.handleChange}
			/>
		);
	}
}