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
var CommentList = require('./CommentList');
var CommentFormData = require('./CommentFormData');

var SingleBlogDetails = React.createClass({
  render: function(){

var user = this.props.user ? this.props.user.local.email : null;
    return(
    <div>
      <div className="singleblogpost">
        <p>{this.props.oneBlog.title}</p>
        <img src={this.props.oneBlog.img}/>
        <p>{this.props.oneBlog.content}</p>
        <p>{this.props.oneBlog.date.substr(0,10)}</p>
        <CommentList commentsArray={this.props.oneBlog.comments}/>
        <CommentFormData loadOneBlogFromServer={ this.props.loadOneBlogFromServer } id={ this.props.oneBlog._id } />
      </div>
    </div>
    )
  }
});

module.exports = SingleBlogDetails;