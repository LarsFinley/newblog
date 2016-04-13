var React = require('react');
var BlogForm = require('./BlogForm');


var BlogFormData = React.createClass({
	getInitialState: function() {
		return{
			title: null,
			content: null,
			author: null,
			img: null,
			date: null,
		}
	},
	contextTypes: {
		sendNotification: React.PropTypes.func.isRequired
	},
	onTitleChange: function(e) {
		this.setState({ title: e.target.value })
		console.log(this.state.title);
	},
	onContentChange: function(e) {
		this.setState({ content: e.target.value })
		console.log(this.state.content);
	},
	onImgChange: function(e) {
		this.setState({ img: e.target.value })
		console.log(this.state.img);
	},
	submitBlogToServer: function(e) {
		e.preventDefault();
	
		var blog = {};
		blog.title = this.state.title.trim();
		blog.content = this.state.content.trim();
		blog.img = this.state.img.trim();

		console.log(blog);

		this.newBlogPost(blog);
		this.setState({ title: '', content: '', img: '' })
	},
	newBlogPost : function(blog){
		$.ajax({
			url: '/api/post',
			method: 'POST',
			data: blog,
	success: function(data) {
		this.props.toggleActiveComp('blog');
		console.log(data);
	}.bind(this),
		error: function(xhr, status, err){
			console.error('/api/post', status, err.toString())
		}.bind(this)
		})
	},
	render: function() {
		return (
			<BlogForm
				submitBlogToServer = { this.submitBlogToServer }
				onTitleChange = { this.onTitleChange }
				onContentChange = { this.onContentChange }
				onDateChange = { this.onDateChange }
				onImgChange = { this.onImgChange } 
				onAuthorChange  = { this.onAuthorChange }/>
		)
	}
});

module.exports = BlogFormData;