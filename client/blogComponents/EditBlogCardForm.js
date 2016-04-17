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

function EditBlogCardForm(props) {
  return(
    <div className="container myContainer">
     <form onSubmit={ props.handleBlogEditSubmit }>
       <h3> Edit Blog </h3>
       <fieldset className="form-group">
         <label>title</label>
         <input onChange={props.onTitleChange} value={props.title} type="text" className="form-control"/>
       </fieldset>
       <fieldset className="form-group">
         <label>content</label>
         <input onChange={props.onContentChange} value={props.challenge}  type="text" className="form-control"/>
       </fieldset>
       <fieldset className="form-group">
         <label>image</label>
         <input onChange={props.onImgChange} value={props.img} type="text" className="form-control"/>
       </fieldset>
       <button className="btn btn-success-outline" type="submit"> Submit </button>
     </form>
     </div>
    )
};

module.exports = EditBlogCardForm;