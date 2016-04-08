var React = require('react');
var Register= require = ('./register');

var RegisterData = React.createClass({
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
	handleRegister: function(e) {
		e.preventDefault();
		console.log('TRYING TO REGISTER');

		var myUserData = {
			email: this.state.userEmail,
			password: this.state.userPassword,
		};

		var self = this;
		$.ajax({
			url: '/signup',
			method: 'POST',
			data: myUserData,
		}).done(function(data) {
				console.log(data);
				self.props.toggleActiveComp('home');
				self.context.sendNotification("You created a new user!");
			});

			this.setState({userEmail: '', userPassword: ''});
		},
		render: function() {
				console.log('render');
			return (
				<Register
					handleRegister={ this.handleRegister }
					onEmailChange= { this.onEmailChange }
					onPasswordChange= { this.onPasswordChange } />
		)
	}
});


module.exports = RegisterData;