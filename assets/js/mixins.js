var ReactMixins = {
	getInitialState() {
		return {count:0}
	},
	componentWillMount() {
		console.log('will mount!');
	},
	incrementCount() {
		this.setState({count: this.state.count+1});
	}
}

var App = React.createClass({
	render() {
		return (
			<div>
				<Button txt="It's a button" />
				<br />
				<Label txt="It's a label" />
				<br />
				<br />
				<Button txt="It's a button" />
				<br />
				<Label txt="It's a label" />
			</div>
		)
	}
});

var Button = React.createClass({
	mixins:[ReactMixins],
	render() {
		return <button onClick={this.incrementCount}>{this.props.txt} - {this.state.count}</button>
	}
});

var Label = React.createClass({
	mixins:[ReactMixins],
	componentWillMount() {
		setInterval(this.incrementCount, 1000);
	},
	render() {
		return <label>{this.props.txt} - {this.state.count}</label>
	}
});

React.render(<App />, document.getElementById('main'));