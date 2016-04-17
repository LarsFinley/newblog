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
var EditBlogCardForm = require('./EditBlogCardForm');

var EditBlogCardData = React.createClass({
  getInitialState: function(){
    return{
      title: null,
      content: null,
      img: null,
    }
  },
  loadOneBlogFromServer: function(){
    var self = this;
    $.ajax({
      url: '/api/blog/' + this.props.id,
      method:'GET',
    }).done(function(data){
      self.setState({
        title: data.title,
        content: data.content,
        img: data.img,
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

 onTitleChange: function(event){
  this.setState({title: event.target.value})
 },
 onContentChange: function(event){
  this.setState({content: event.target.value})
 },
 onImgChange: function(event){
  this.setState({img: event.target.value})
 },
 handleBlogEditSubmit: function(e){
  e.preventDefault();

    var title = this.state.title;
    var content = this.state.content;
    var img = this.state.img;
   
    this.updateBlogForm({ title: title, content: content, img: img });
    this.setState({ title: '', content: '', img: ''})
 },

 render: function(){
  return (
    <div>
    <EditBlogCardForm handleBlogEditSubmit={this.handleBlogEditSubmit} onTitleChange={this.onTitleChange} onContentChange={this.onContentChange} onImgChange={this.onImgChange} {...this.state}/>
    </div>
    )
 }

});


module.exports = EditBlogCardData;