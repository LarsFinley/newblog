var React = require('react');
var Login= require = ('./login');

var LoginData = React.createClass({
	getInitialState: function() {
		console.log('getting initial state');
		return {
				userEmail: null,
        userPassword: null
		}
	},
	contextTypes: {
		sendNotification: React.PropTypes.func.isRequired
	},
	onEmailChange: function(e) {
		this.setState({ userEmail: e.target.value })
	},
	onPasswordChange: function(e) {
		this.setState({ userPassword: e.target.value })
	},
	handleLogin: function(e) {
		e.preventDefault();
		console.log('TRYING TO POST TO LOG IN');

		var myUserData = {
			email: this.state.userEmail,
			password: this.state.userPassword,
		};

		var self = this;
		$.ajax({
			url: '/login',
			method: 'POST',
			data: myUserData,
		}).done(function(data) {
				console.log(data);
				self.props.toggleActiveComp('home');
				self.context.sendNotification("You logged in correctly!");
			});

			this.setState({userEmail: '', userPassword: ''});
		},
		render: function() {
				console.log('render');
			return (
				<Login
					handleLogin={ this.handleLogin }
					onEmailChange= { this.onEmailChange }
					onPasswordChange= { this.onPasswordChange } />
		)
	}
});


module.exports = LoginData;