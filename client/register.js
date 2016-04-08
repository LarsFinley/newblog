const React = require('react');

function Register(props) {
  return(
  <div>
    <body className="login-bg loaded">
      <div className="container">
        <div id="modal" className="well login-wrapper center-block fade-in">
          <div className="login-logoWrapper">
            <h2 style={{textAlign: "center"}}>Register</h2>
          </div>
          <form  onSubmit={ props.handleRegister }>
            <div id="userInfo">
              <div className="form-group">
                <div className="input-group login-input-wrapper">
                  <span className="input-group-addon login-input" id="basic-addon1"><i className="fa fa-user"></i></span>
                  <input onChange={ props.onEmailChange }required type="text" className="form-control login-input" placeholder="Username"/>
                  </div>
                </div>
              <div className="form-group">
                <div className="input-group login-input-wrapper">
                  <span className="input-group-addon login-input" id="basic-addon1"><i className="fa fa-lock"></i></span>
                  <input onChange={ props.onPasswordChange } required type="password" className="form-control login-input" placeholder="Password"/>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-default btn-lg center-block login-submit">Register</button>
          </form> 
        </div>
      </div>
    </body>
  </div>
    )
};

module.exports = Register;