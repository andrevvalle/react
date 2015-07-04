var Alert = React.createClass({
	render() {
		return (
			<div className="alert alert-warning" role="alert">Campo INPUT obrigatorio!</div>
		);
	}
});

var TodoList = React.createClass({
	render: function() {
		var createItem = function(itemText, index) {
			return <li key={index + itemText}>{itemText}</li>;
		};
		return <ul>{_.map(this.props.items, createItem)}</ul>;
	}
});

var TodoApp = React.createClass({
	
	getInitialState() {
		return {
			items: [],
			text: ''
		};
	},
	
	onChange(e) {
		this.setState({
			text: e.target.value
		});
	},
	
	handleSubmit(e) {
		e.preventDefault();

		if(this.state.text.length === 0)
			React.render(<Alert />, document.getElementById('alert'));
		else{
			
			React.unmountComponentAtNode(document.getElementById('alert'));

			this.state.items.push(this.state.text)
			this.setState({
				text: ""
			});
		}
	},

	render() {
		return (
		  <div>
		    <h3>TodoList</h3>
		    <div id="alert"></div>
		    <TodoList items={this.state.items} />
		    <form onSubmit={this.handleSubmit}>
		      <input onChange={this.onChange} value={this.state.text} />
		      <button>{'Add #' + (this.state.items.length + 1)}</button>
		    </form>
		  </div>
		);
	}

});

React.render(<TodoApp />, document.getElementById('main'));