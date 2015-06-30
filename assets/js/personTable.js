var PersonTable = React.createClass({
	getInitialState() {
		return {
			data: [
				{id: 1, fname: "Simon", lname: "Bailey"},
				{id: 2, fname: "Thomas", lname: "Burleson"},
				{id: 3, fname: "Will", lname: "Button"}
			]
		};
	},
	render() {
		var rows = this.state.data.map(function(person, i){
			return <PersonRow data={person} key={i} />
		})
		return <table>{rows}</table>
	}
});

var PersonRow = React.createClass({
	render() {
		return (
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.fname }</td>
				<td>{this.props.data.lname}</td>
			</tr>
		);
	}
});

React.render(<PersonTable />, document.getElementById('main'));
