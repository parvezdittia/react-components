function ReactIf(props) {
	let output = null;
	console.log('ReactIf');

	if (props.when) {
		output = props.children;
	}

	return output;
}

function ReactChain(props) {
	let links = props.children;
	let output = null;
	console.log('ReactChain');

	for (let i = 0; i < links.length; i++) {
		try {
			if (links[i].type.name !== 'ReactIf') {
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

	return output;
}

export { ReactChain, ReactElse };
export default ReactIf;
