import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactIf, { ReactChain, ReactElseIf, ReactElse } from './ReactIf';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			flag: 10,
		};
	}

	render() {
		return (
			<ReactChain>
				<ReactIf when={!this.state.flag}>
					<span>Simple react if 1</span>
				</ReactIf>
				<ReactElseIf when={this.state.flag}>
					<ReactChain>
						<ReactIf when={this.state.flag >= 1 && this.state.flag <= 3}>
							Nested in if
						</ReactIf>
						<ReactElseIf when={this.state.flag > 3 && this.state.flag <= 7}>
							Nested in elseif
						</ReactElseIf>
						<ReactElse>Nested in else </ReactElse>
					</ReactChain>
				</ReactElseIf>
				<ReactElse>
					<span>Simple react else</span>
				</ReactElse>
			</ReactChain>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
