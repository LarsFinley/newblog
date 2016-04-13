var React = require('react');
var dateFormat = require('dateformat');

function BlogCard(props) {
	var now = props.date;
		return (
			<div className="container">
				<div className="card">
				 <div className="card-block">
				   <h3 className="card-title"> { props.title } </h3>
				   <h4 className="card-title"> { dateFormat(now, "fullDate") } </h4>
				   <h4 className="card-title"> { props.content } </h4>
				   <img src={ props.img } />
				   <h5 className="card-title"> { props.author } </h5>
				   <h5 className="card-title"> { props.comment } </h5>
				   <button onClick={ props.getId.bind(null, props.id)} className="btn-primary">GO</button>
				 	</div>
				 </div>
				</div>
			</div>
		)
};


module.exports = BlogCard;