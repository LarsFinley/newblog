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
var EditBlogForm = require('./EditBlogForm');


var EditBlogData = React.createClass({
	getInitialState: function(){
		return{
			title: null,
			content: null,
			author: null,
			img: null,
			date: null,
			comments: null,
		}
	},
	loadOneBlogFromServer: function() {
		var self = this;
		$.ajax({
			url: '/api/post/oneBlog/' + this.props.id,
			method: 'GET',
		}).done(function(data) {
			console.log("loaded one blog from server", data);
			self.setState({ 
				title: data.title,
				content: data.content,
				author: data.author,
				date: data.date,
				img: data.img,
				comments: data.comments,
			})
		})
	},
	componentDidMount: function(){
    this.loadOneBlogFromServer();
  },
  updateBlogForm: function(blog){
    $.ajax({
      url: '/api/blog/' + this.props.id,
      dataType: 'json',
      type: 'PUT',
      data: blog,
      success: function(data){
        this.loadOneBlogFromServer();
        this.props.toggleActiveComp('oneBlog');
      }.bind(this),
      error: function(xhr, status, err){
        console.error(status, err.toString());
      }.bind(this)
    });
  },
	contextTypes: {
		sendNotification: React.PropTypes.func.isRequired
	},
	onTitleChange: function(e) {
		this.setState({ title: e.target.value })
	},
	onContentChange: function(e) {
		this.setState({ content: e.target.value })
	},
	onImgChange: function(e) {
		this.setState({ img: e.target.value })
	},
	componentDidMount: function() {
		this.loadOneBlogFromServer()
	},
	submitBlogToServer: function(e) {
			e.preventDefault();
			
			var data = {
				title: this.state.title,
				content: this.state.content,
				img: this.state.img,
			};
			console.log("loaded aaaaaaaa", data);

			var self = this;
			$.ajax({
				url: '/api/post/oneBlog/' + this.props.id,
				method: 'PUT',
				data: data,
			}).done(function(data) {
				console.log(data);
				self.props.toggleActiveComp('blog');//we want it to redirect to the fish page
				self.context.sendNotification("Hey you edited a blog post!!!!!");
			});
		},
	render: function(){
		return (<EditBlogForm
							onTitleChange={this.onTitleChange}
							onLengthChange={this.onLengthChange}
							onImgChange={this.onImgChange}
							onContentChange={this.onContentChange}
							onDateChange={this.onDateChange}
							onCommentsChange={this.onCommentsChange}
							submitBlogToServer={this.submitBlogToServer}
								{...this.state} /> 
							)
							}
					
	});

module.exports = EditBlogData;

