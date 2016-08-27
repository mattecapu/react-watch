import React from 'react';
import ReactDOM from 'react-dom';

import withWatching from '../index.js';

const Kid = withWatching(({ a }) => <span>{a*a}</span>, undefined, true);

class Test extends React.Component {
	constructor() {
		super();
		this.state = { foo: 1 };
	}
	componentDidMount() {
		setTimeout(() => this.setState({ foo: 5 }), 1000);
	}
	render() {
		return <p><Kid a={this.state.foo} /></p>;
	}
}

Test = withWatching(Test, undefined, true);

window.addEventListener(
	'DOMContentLoaded',
	() => ReactDOM.render(
		<Test />,
		document.getElementById('rr')
	)
);
