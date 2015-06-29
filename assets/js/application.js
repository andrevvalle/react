(function(Reflux, actions, global){
	
	var person = global.Oi.person = {
		"name": "John Doe",
		"age": "23"
	}

	Oi.store = Reflux.createStore({
		listenables: [actions],
		onUpdateAge(value) {
			person.age = value;
			this.trigger({person});
		},
		getInitialState() {
			return {
				person: person
			}
		}
	});

})(window.Reflux, window.Oi.Actions, window);