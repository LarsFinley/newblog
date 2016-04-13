var React = require('react');

function BlogForm(props) { //Pure rendering method, only needs to render, STATELESS FUNCTION!!!!
	console.log(props);
	return (
		<div className="jumbotron newBlog">
			<form onSubmit={ props.submitBlogToServer }>
				<h3> Enter A New Blog Post </h3>
				<fieldset className="form-group newBlog">
					<label>Title</label>
					<input onChange={ props.onTitleChange } type="text" className="form-control" />
				</fieldset>
				<fieldset className="form-group newBlog">
					<label>Content</label>
					<input onChange={ props.onContentChange } type="text" className="form-control" />
				</fieldset>
				<fieldset className="form-group newBlog">
					<label>Image URL</label>
					<input onChange={ props.onImgChange } type="text" className="form-control" />
				</fieldset>
				<button type="submit" className="btn btn-success">Submit</button>
			</form>
		</div>
		)
};

module.exports = BlogForm;
