import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import '../../../static/css/user.css';
/**
 * Login
 */
export class Login extends Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    username: '',
    password:'',
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username,
    this.state.password);
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    if(this.props.isAuthenticated) {
      return <Redirect to="/" />
    }

    const { username, password } = this.state
    return (

      <div className="container pt-5 mt-3">
      	<div className="d-flex justify-content-center h-100">
      		<div className="card" style={{height: "350px"}}>
      			<div className="card-header bg-gray">
      				<h3 text-purple>Login</h3>
      			</div>
      			<div className="card-body bg-gray">

              <form  onSubmit={this.onSubmit}>

                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user text-purple"></i></span>
                  </div>
                  <input type="text"
                  className="form-control"
                  name="username"
                  onChange={this.onChange}
                  value={username}
                  placeholder="Username"
                  />
                </div>


      					<div className="input-group form-group">
      						<div className="input-group-prepend">
      							<span className="input-group-text"><i className="fas fa-key text-purple"></i></span>
      						</div>
                  <input type="password"
                  className="form-control"
                  name="password"
                  onChange={this.onChange}
                  value={password}
                  placeholder="Password"
                  />
      					</div>


      					<div className="form-group">
      						<input type="submit" className="btn text-purple float-right login_btn"/>

      					</div>
      				</form>
      			</div>

      			<div className="card-footer bg-gray">
      				<div className="d-flex justify-content-center links text-purple" >
      					Don't have an account?<Link to="/register" className=" text-purple">Register</Link>
      				</div>
      			</div>
      		</div>
      	</div>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
