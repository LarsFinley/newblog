var React = require('react');
var BlogForm = require('./BlogForm');


var BlogFormData = React.createClass({
	getInitialState: function() {
			return{
				blogTitle: null,
				blogContent: null,
				blogAuthor: null,
				blogImg: null,
				blogDate: null,
			}
		},
		contextTypes: {
			sendNotification: React.PropTypes.func.isRequired
		},
		onTitleChange: function(e) {
			this.setState({ blogTitle: e.target.value })
		},
		onContentChange: function(e) {
			this.setState({ blogContent: e.target.value })
		},
		onAuthorChange: function(e) {
			this.setState({ blogAuthor: e.target.value })
		},
		onImageChange: function(e) {
			this.setState({ blogImage: e.target.value })
		},
		onDateChange: function(e) {
			this.setState({ blogDate: e.target.value })
		},
		submitBlogToServer: function(e) {
			e.preventDefault();
			
			var data= {
				title: this.state.blogTitle,
				content: this.state.blogContent,
				author: this.state.blogAuthor,
				image: this.state.blogImage,
				date: this.state.blogDate,
			};

			var self = this;
			$.ajax({
				url: '/api/post',
				method: 'POST',
				data: data,
			}).done(function(data) {
				console.log(data);
				self.props.toggleActiveComp('blog');
				self.context.sendNotification("Hey you added a blog post!");
			});

			this.setState({blogTitle: '', blogContent: '', blogAuthor: '', blogImage: '', blogDate: ','});
		},
		render: function() {
			return (
				<BlogForm
					submitBlogToServer={ this.submitBlogToServer }
					onTitleChange= { this.onTitleChange }
					onContentChange= { this.onContentChange }
					onDateChange= { this.onDateChange }
					onImageChange= { this.onImageChange } 
					onAuthorChange= { this.onAuthorChange }/>
		)
	}
});

module.exports = BlogFormData;