import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactIf from './ReactIf';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			flag: true,
		};
	}

	render() {
		return (
			<ReactIf when={this.state.flag}>
				<span>Simple react if</span>
			</ReactIf>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
