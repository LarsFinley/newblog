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
var CommentForm = require('./commentForm');

var CommentFormData = React.createClass({
  getInitialState: function(){
    return{
      body: null,
    }
  },

  handleSubmit: function(event){
    event.preventDefault();

    var data = {
      body: this.state.body
    };

    var self = this;

    $.ajax({
      url: '/api/blog/' + this.props.id + '/comment',
      method: 'POST',
      data: data,
      success: function(data){
        self.props.loadOneBlogFromServer();
      }.bind(this)
    });

    self.setState({ body:''});
  },
  onBodyChange: function(event){
    this.setState({ body: event.target.value });
  },

  render: function(){
    return(
      <CommentForm handleSubmit={ this.handleSubmit } onBodyChange={ this.onBodyChange } />
      )
  }
});

module.exports = CommentFormData;