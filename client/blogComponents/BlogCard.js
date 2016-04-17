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
var dateFormat = require('dateformat');

function BlogCard(props) {
	console.log(props.getId);
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
							  <button onClick={ props.getId.bind(null, 'showOne', props.id) } className="btn-primary">GO</button>
								<button onClick={ props.getId.bind(null, 'editOne', props.id) } className="btn btn-primary"> Edit </button>
						 </div>						
						</div>
					</div>
				</div>
			</div>
		)
};


module.exports = BlogCard;