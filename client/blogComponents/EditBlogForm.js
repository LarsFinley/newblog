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

function EditBlogForm(props) {
	return (
	<div className="jumbotron newBlog">
				<form onSubmit={ props.submitBlogToServer }>
					<h3> Edit Your Blog Post </h3>
				  <fieldset className="form-group">
				    <label>Title</label>
				    <input onChange={ props.onTitleChange }  type="text" className="form-control" />
				  </fieldset>
				  <fieldset className="form-group">
				    <label>Content</label>
				    <input onChange={ props.onContentChange }  type="text" className="form-control" />
				  </fieldset>
				  <fieldset className="form-group">
				    <label>Image URL</label>
				    <input onChange={ props.onImgChange } type="text" className="form-control" />
				  </fieldset>
				  <button type="submit" className="btn btn-success">Submit Your Edit</button>
				</form>
			</div>
		)
};

module.exports = EditBlogForm;