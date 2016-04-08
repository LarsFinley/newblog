var React = require('react');
var ReactDOM = require('react-dom');
var BlogApp = require('./blogApp.js');
var NavBar = require('./navbar.js');
var Notifier = require('./notifier');
var Login = require('./login');
var Register = require('./register');
var Home = require('./home');


var App = React.createClass({
  getInitialState: function() {
    return {
      activeComponent: 'home'
    }
  },
  setActiveComponent: function(componentName) {
    console.log("Found Comp: ", componentName);
    this.setState({
      activeComponent: componentName
    })
  },
  showWhichComponent: function() {
  	console.log("here");
    switch(this.state.activeComponent) {
        case 'home':
            return <Home/>
            break;
        case 'blog':
            return <BlogApp/>
            break;
        case 'login':
        	// console.log('got to login');
            return <Login/>
            break;
        case 'register':
            return <Register/>
            break;
        default:
            return <Home/>
    };
  },
  render: function() {
    return (
      <div>
        <Notifier>
          <NavBar activeComponent={this.state.activeComponent} setActiveComponent={ this.setActiveComponent }/>
            <div>
              { this.showWhichComponent() }
            </div>
        </Notifier>
      </div>           
      )
  }
});

ReactDOM.render(
  <App />, document.getElementById('app')
);