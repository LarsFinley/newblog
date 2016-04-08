var React = require('react');
var BlogList = require('./BlogList');
var Loader = require('../Loader');

var BlogListData = React.createClass({

	getInitialState: function() {
		return {
			allBlog: null
		}
	},
	loadAllBlogsFromServer: function() {
		var self = this;
		$.ajax({
			url: '/api/post',
			method: 'GET',
		}).done(data => this.setState({ allBlog: data }));
	},
	componentDidMount: function() {
		this.loadAllBlogsFromServer();
	},
	render: function() {
		return this.state.allBlog ? <BlogList blogArray={this.state.allBlog} getId={ this.props.getId } /> : <Loader/>
	}
});

module.exports = BlogListData;

