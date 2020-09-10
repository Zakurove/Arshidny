import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";
import { DropdownButton, Dropdown, Form } from "react-bootstrap";
import "../../../static/css/user.css";
/**
 * Register
 */
export class Register extends Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, password2, role } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: "Passwords do not match" });
    } 
   
      const newUser = new FormData();
      newUser.append("username", this.state.username);
      newUser.append("password", this.state.password);
      newUser.append("email", this.state.email);

      this.props.register(newUser);
    
  };
 
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, email, password, password2 } = this.state;
    return (
      <div className="container pt-5 mt-3 pb-5 mb-3">
        <div className="d-flex justify-content-center">
          <div className="card" style={{ height: "400px" }}>
            <div className="card-header bg-gray">
              <h3 className="text-purple">Sign Up</h3>
            </div>
            <div className="card-body pb-5 bg-gray" >
              <form onSubmit={this.onSubmit}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user text-purple"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={this.onChange}
                    value={username}
                    placeholder="Username"
                  />
                </div>

                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-envelope text-purple"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={this.onChange}
                    value={email}
                    placeholder="Email"
                  />
                </div>

                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key text-purple"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={this.onChange}
                    value={password}
                    placeholder="Password"
                  />
                </div>

                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key text-purple"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    name="password2"
                    onChange={this.onChange}
                    value={password2}
                    placeholder="Verify password"
                  />
                </div>


                <div className="input-group form-group">
                  <input
                    type="submit"
                    className="btn  float-right login_btn btn-block text-purple"
                  />
                  
                </div>
              </form>
            </div>

            <div className="card-footer bg-gray">
              <div className="d-flex justify-content-center links text-purple">
                Already have an account?{" "}
                <Link to="/login" className="text-purple">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
