var React = require('react');

function BlogCard(props) {
		return (
			<div className="container">
				<div className="card">
				  <div className="card-block">
				    <h3 className="card-title"> { props.title } </h3>
				    <h4 className="card-title"> { props.date } </h4>
				    <h4 className="card-title"> { props.content } </h4>
				    <h4 className="card-title"> { props.image } </h4>
				    <h5 className="card-title"> { props.author } </h5>
				    <h5 className="card-title"> { props.comment } </h5>
				    <button onClick={ props.getId.bind(null, props.id)} className="btn-primary">GO</button>
				  </div>
				</div>
			</div>	
			)
	};


module.exports = BlogCard;