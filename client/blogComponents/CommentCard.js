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
var React =require('react');

var CommentCard = React.createClass({
  render: function(){
    return(
      <div>
        <p>{this.props.body}</p>
        <p>{this.props.date}</p>
        <p>{this.props.username}</p>
        <button onClick={props.getId.bind(null, 'deleteComment', props.id)} type="button" className="btn btn-warning">Delete Comment</button>
      </div>
        )
  }
});

module.exports = CommentCard;