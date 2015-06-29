/** @jsx React.DOM */

(function(Reflux, Namespace, global){
	
	// var App = React.createClass({
		
	// 	mixins: [Reflux.connect(Namespace.store)],
	// 	getInitialState() {
	// 		return {
	// 			name: "",
	// 			age: 0
	// 		}
	// 	},
	// 	handleSubmit(event) {
	// 		event.preventDefault();
	// 		var age = this.state.age
			
	// 		Namespace.store.onUpdateAge(age);
	// 	},
	// 	update(e) {
	// 		this.setState({age: e.target.value});
	// 	},
	// 	render() {
	// 		return (<FormRen 
	// 					name={this.state.person.name}
	// 					age={this.state.person.age}
	// 					change={this.update}
	// 					submit={this.handleSubmit} />);
	// 	}

	// });

	// var FormRen = React.createClass({
	// 	render() {
	// 		return (
	// 			<div>
	// 				<p>Name: {this.props.name}</p>
	// 				<p>Age: {this.props.age}</p>
	// 				<form className="form-inline" onSubmit={this.props.submit}>
	// 					<input type="number" className="form-control" ref="number" onChange={this.props.change} />
	// 					<input type="submit" className="btn" value="Update Age"/>
	// 				</form>
	// 			</div>);
	// 	}
	// });

	// React.render(<App />, document.getElementById('main'));

	var Button = React.createClass({
	  getInitialState:function(){
	    return {val: 0}
	  },
	  update: function(){
	    this.setState({val: this.state.val+10});
	  },
	  render:function(){
	    return <button onClick={this.update}>{this.state.val}</button>
	  },
	  componentDidMount:function(){
	    console.log('mounted');
	  },
	  componentWillUnmount:function(){
	    console.log('bye!');
	  },
	});

	var App = React.createClass({
	  mount: function(){
	    React.render(<Button />, document.getElementById('app'));
	  },
	  unmount: function(){
	    React.unmountComponentAtNode(document.getElementById('app'));
	  },
	  render:function(){
	    return (
	      <div>
	        <button onClick={this.mount}>Mount</button>
	        <button onClick={this.unmount}>Unmount</button>
	        <div id="app"></div>
	      </div>
	      );
	  }
	});

	React.render(<App />, document.body);

})(window.Reflux, window.Oi, window);