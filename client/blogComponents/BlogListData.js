/*
Index
  Blog Box
    Blog List Data
      Blog List
        Blog Card
    Edit Blog Card Data
      Edit Blog Card Form
    Blog Form Data
      Blog Form
    Single Blog Detail Data
      Single Blog Detail
        Comment Form Data
          Comment Form
        Comment List
          Comment Card
*/
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
			url: '/api/blog',
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

