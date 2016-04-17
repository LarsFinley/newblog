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
var SingleBlogDetails = require('./SingleBlogDetails');

var SingleBlogDetailData = React.createClass({
  getInitialState: function(){
    return{
      oneBlog: null,
    }
  },
  loadOneBlogFromServer: function(){
    var self = this;
    const ajaxProps = {
      url: '/api/blog/' + this.props.id,
      method: 'GET',
    };
    // console.log(ajaxProps);
    $.ajax(ajaxProps).done(function(data){
      self.setState({oneBlog: data})
    })
  },


  componentDidMount: function(){
    this.loadOneBlogFromServer();
  },

  render: function(){
    return this.state.oneBlog ? <SingleBlogDetails loadOneBlogFromServer={ this.loadOneBlogFromServer } oneBlog={ this.state.oneBlog } id={ this.props.id } /> : null;
  }

});

module.exports = SingleBlogDetailData;