var React = require('react');
var dateFormat = require('dateformat');

function BlogCard(props) {
	var now = props.date;
		return (
			<div>	
				<div className="container">
					<div className="card blogCard">
					 	<div className="card-block ">
					   <h3 className="card-title"> { props.title } </h3>
					   <p> Created by <b>{ props.author }</b>, on <b>{ dateFormat(now, "fullDate") }</b> </p>
					   <h4 className="card-title"> { props.content } </h4>
					   <div className="panel-body"><img className="blog-img" src={props.image}/>
						   <h5 className="card-title"> { props.comment } </h5>
						   <button onClick={ props.getId.bind(null, props.id)} className="btn-primary">GO</button>
						 </div>						
						</div>
					</div>
				</div>
			</div>
		)
};


module.exports = BlogCard;