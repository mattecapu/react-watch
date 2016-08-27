import React from 'react';

export default function withWatching(Wrapped, loggerFunction = console.log.bind(console), forceEnable = false) {
	if (!forceEnable && typeof process === 'undefined') {
		return Wrapped;
	} else if (!forceEnable && "development" !== process.env.NODE_ENV) {
		return Wrapped;
	} else {
		const name = Wrapped.name || Wrapped.displayName || 'Anonymous';

		return (
			class Watcher extends React.Component {
				static displayName = `Watcher(${name})`;

				componentWillMount() {
					loggerFunction(name, 'will mount.');
				}
				componentDidMount() {
					loggerFunction(name, 'did mount.');
				}
				componentWillReceiveProps(newProps) {
					loggerFunction(name, 'will receive new props:', newProps);
				}
				componentWillUpdate() {
					loggerFunction(name, 'will update.');
				}
				componentDidUpdate() {
					loggerFunction(name, 'did update, current state:', this.state);
				}
				componentWillUnmount() {
					loggerFunction(name, 'will unmount.');
				}

				render() {
					try {
						loggerFunction(name, 'is rendering...');
						return <Wrapped {...this.props} />
					} finally {
						loggerFunction(name, 'finished render.');
					}
				}
			}
		);
	}
};
