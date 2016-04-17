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


var BlogJumbotron = React.createClass({
	render: function() {
		return(
			<div className="jumbotron">
			  <h1 className="display-3">Hello, world!</h1>
			  <p className="lead">Blog.</p>
			  <hr className="m-y-2"></hr>
			  <p>Blogyyyyyyyyyyyyyyyyyy.</p>
			</div>
			)
	}
});

module.exports = BlogJumbotron;
