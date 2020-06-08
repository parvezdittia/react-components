import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactIf, { ReactChain, ReactElse } from './ReactIf';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			flag: 1,
		};
	}

	render() {
		return (
			<ReactChain>
				<ReactIf when={!this.state.flag}>
					<span>Simple react if 1</span>
				</ReactIf>
				<ReactIf when={!this.state.flag}>
					<span>Simple react if 2</span>
				</ReactIf>
				<ReactElse>
					<span>Simple react else</span>
				</ReactElse>
			</ReactChain>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
