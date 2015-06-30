var App = React.createClass({
		mixins: [React.addons.LinkedStateMixin],
		getInitialState: function() {
			return {
				name:'',
				email:''
			};
		},
		render: function() {
			return (
                <form>
                    <div>
                        <input valueLink={this.linkState('name')} type="text" placeholder="Name" />
                        <label>*{this.state.name}*</label>
                    </div>
                    <div>
                        <input valueLink={this.linkState('email')} type="text" placeholder="Email" />
                        <label>*{this.state.email}*</label>
                    </div>
                    <div>
                        <input valueLink={this.linkState('phone')} type="text" placeholder="Phone" />
                        <label>*{this.state.phone}*</label>
                    </div>
                </form>
			);
		}
});

React.render(React.createFactory(App)(), document.getElementById('main'));
