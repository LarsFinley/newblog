var React = require('react');

var BlogListData = require('./BlogListData');
var BlogFormData = require('./BlogFormData');
var LoginData = require('../loginData');

var Toggler = React.createClass({
	render: function() {
		return(
			<div className="container">
			  <div className="btn-group" data-toggle="buttons">
			    <button onClick={this.props.toggleActiveComp.bind(null, 'blog')}> Blog Display </button>
			    <button onClick={this.props.toggleActiveComp.bind(null, 'form')}> Create New Blog Post </button>
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
	getId: function(id) {
		return this.setState({ activeBlogId: id, activeBlogComponent: 'oneBlog' })
	},
	showComp: function() {
		/*this function returns one function based on activeComp state*/
		if(this.state.activeBlogComponent === 'blog'){
			return <BlogListData getId={ this.getId } />
		} else if (this.state.activeBlogComponent === 'form') {
				return <BlogFormData toggleActiveComp={ this.toggleActiveComp }/>
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
				helllo
					<Toggler toggleActiveComp={this.toggleActiveComp}/>
					{ this.showComp() }
				</div>	
			)
	}
});

module.exports = BlogBox;