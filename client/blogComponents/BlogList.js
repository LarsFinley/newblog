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
    Single Blog Card Data
      Single Blog Card
        Comment Form Data
          Comment Form
        Comment List
          Comment Card
*/
var React = require('react');
var BlogCard = require('./BlogCard');


function BlogList(props) {
		//map through data and pass it to blog card; 
		var allBlogs = props.blogArray.map(item => {
			return(
			    <BlogCard
			    getId = { props.getId }
			    id = { item._id }
					title = { item.title }
					content = { item.content } 
					author = { item.author }
					img = { item.img }
					date = { item.date }
					comment = { item.comment } />
				);
		})
		return (
			<div className="blog-flex">
				{ allBlogs }
			</div>	
			)
	};

BlogList.propTypes = {
	blogArray: React.PropTypes.array.isRequired
};

module.exports = BlogList;