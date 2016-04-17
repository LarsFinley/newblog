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

var BlogListData = require('./BlogListData');
var BlogFormData = require('./BlogFormData');
var LoginData = require('../loginData');
var SingleBlogDetailData = require('./SingleBlogDetailData');

var Toggler = React.createClass({
	render: function() {
		return(
			<div className="container">
			  <div className="btn-group" data-toggle="buttons">
			    <button onClick={this.props.toggleActiveComp.bind(null, 'blog')}> Blog Display </button>
			    <button onClick={this.props.toggleActiveComp.bind(null, 'form')}> Create New Blog Post </button>
			  </div>
			</div>
			)
	}
});

var BlogBox = React.createClass({
	getInitialState: function() {
		return {
			activeBlogComponent: 'blog',
			activeBlogId: null,
			}
	},
	getId: function(someThing, id) {
		if(someThing === 'showOne'){
      return this.setState({ activeBlogId: id, activeBlogComponent: 'oneBlog' })
    } else if (someThing === 'editOne'){
      return this.setState({ activeBlogId : id, activeBlogComponent: 'editBlog' })
    } else {
      return null
    }
  },
	showComp: function() {
		{/*this function returns one function based on activeComp state*/} 
		if(this.state.activeBlogComponent === 'blog'){
			return <BlogListData getId={ this.getId } />
		} else if (this.state.activeBlogComponent === 'form') {
				return <BlogFormData toggleActiveComp={ this.toggleActiveComp }/>
		} else if (this.state.activeBlogComponent === 'oneBlog') {
      return <SingleBlogDetailData id={this.state.activeBlogId} />
    } else if (this.state.activeBlogComponent === 'editBlog') {
      return <EditBlogCardData id={ this.state.activeBlogId } toggleActiveComp={ this.toggleActiveComp } />
    } else {
			throw new Error("Invalid active component", this.state.activeBlogComponent)
    }
	},
	toggleActiveComp: function(name){
		this.setState({ activeBlogComponent: name })
	},
	render: function() {
		return (
			<div>
				<Toggler toggleActiveComp={this.toggleActiveComp}/>
				{ this.showComp() }
			</div>	
		)
	}
});

module.exports = BlogBox;