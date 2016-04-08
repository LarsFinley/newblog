var React = require('react');


var NavBar = React.createClass({
  render: function() {

    if(this.props.activeComponent === 'blog'){
      var links = ['home', 'login', 'register'];
    } else if (this.props.activeComponent === 'home') {
      var links = ['blog', 'login', 'register']
    } else if (this.props.activeComponent === 'login') {
      var links = ['home', 'blog','register'];
    } else if (this.props.activeComponent === 'register') {
      var links = ['home', 'blog','login'];
    } else {
      var links = ['home', 'blog', 'login', 'register'];
    }

    var self = this;
    var link = links.map(function(item){
      return (
          <li className="nav-item" key={item} >
            <a className="nav-link" 
            onClick={ self.props.setActiveComponent.bind(null, item) } >{ item }</a>
          </li>
        )
    });
		return (
      <nav id="navbarPad" className="navbar navbar-light bg-faded ">
        <a className="navbar-brand" href="#">Lars Finley Martinson</a>
        <ul className="nav navbar-nav">
          <li><a data-scroll href="#who"><h3>Who I Am</h3></a></li>
          <li><a data-scroll href="#travels"><h3>Travels</h3></a></li>
          <li><a data-scroll href="#contact"><h3>Contact</h3></a></li>
          <li>
            <div className="dropdown dropMargin">
              <a data-scroll className="dropdown-toggle" data-toggle="dropdown"><h3>Blog</h3></a>
              <ul className="dropdown-menu">
                { link }
              </ul>
            </div>
          </li> 
        </ul>
      </nav>
      )
  }
});


module.exports = NavBar;
