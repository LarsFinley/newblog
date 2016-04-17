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
var CommentCard = require('./commentCard');


var CommentList = React.createClass({
  getInitialState: function(){
      return{
        activeComponent: "commentCard",
        activeCommentId: null,
      }
  },
  getId: function(type, id){
      if(type === 'showOneComment'){
        return this.setState({ activeCommentId: id, activeComponent: 'commentCard'})
      } else {
        return null
      }
    },
  handleCommentDelete: function() {
    var self = this;
  },

  render: function(){
      var comments = this.props.commentsArray.map(function(c){
        var user = c.user && c.user.local ? c.user.local.username : "no user";
        var b = c.body ? c.body : null
      return <CommentCard body={b} date={c.date.substr(0,10)} username={user} getId={self.getId}/>
    });

    return(
      <div>
        { comments }
      </div>
      )
  }
});

module.exports = CommentList;