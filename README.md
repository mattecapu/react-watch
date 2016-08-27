# Watch
### HoC component to see what's going on with your components

## Install
The `npm`-way
```bash
npm i react-watch --save-dev
```

## Example

Use it like any HoC:

```js
import withWatching from 'react-watch';

const MyStatelessComponent = withWatching(({ a, b }) => <span>{a + b}</span>);

class MyClassComponent extends React.Component {
	render() {
		return (
			<p>
				<MyStatelessComponent />
				{this.props.children}
			</p>
		);
	}
}

MyClassComponent = withWatching(MyClassComponent);
```

Now looking at your console logs you should see something like
```
MyClassComponent will mount
MyClassComponent rendering
MyClassComponent rendered
MyStatelessComponent will mount
MyStatelessComponent rendering
MyStatelessComponent rendered
MyStatelessComponent did mount
MyClassComponent did mount
```
## API
### `withWatching(Component [, loggerFunction = console.log.bind(console) [, forceEnable = false]])`

* **`Component`**: a valid React component to watch. It will log *all* [lifecycle methods](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods).
* **`loggerFunction`** *(optional)*: use a custom log function
* **`forceEnable`** *(optional)*: enable the HoC also on non-development environments. If set to `false`, react-watch will be active only on `development` environment. See below.

## Environment detection

**react-watch will look at process.env.NODE_ENV and disable itself if it's not set to "development" environment**.

On the client, use something like [envify](https://github.com/hughsk/envify) to replace `process.env.NODE_ENV` with its value at build time. If you use a smart minifier, you will completely get rid of react-watch on production.

If react-watch can't detect `process.env.NODE_ENV`, **it will be disabled by default**.

**All this behavior can be overridden by setting `forceEnable` argument to `true`.**

## License

ISC
