let ReactIf;
let ReactElseIf;
ReactIf = ReactElseIf = (props) => {
	let output = null;
	console.log('ReactIf');

	if (props.when) {
		output = props.children;
	}

	return output;
};

function ReactElse(props) {
	let output = null;

	if (props.children) {
		output = props.children;
	}

	return output;
}

function ReactChain(props) {
	let links = props.children;
	let output = null;

	for (let i = 0; i < links.length; i++) {
		try {
			if (
				links[i].type.name !== 'ReactIf' &&
				links[i].type.name !== 'ReactElseIf' &&
				links[i].type.name !== 'ReactElse'
			) {
				console.error('Not a valid conditional component');
				return output;
			}
		} catch (e) {
			console.error('Not a valid conditional component');
			return output;
		}
	}

	for (let i = 0; i < links.length; i++) {
		if (links[i].props.when) {
			output = links[i];
			break;
		}
	}

	if (output === null && links[links.length - 1].type.name === 'ReactElse') {
		output = links[links.length - 1];
	}

	return output;
}

export { ReactChain, ReactElseIf, ReactElse };
export default ReactIf;
