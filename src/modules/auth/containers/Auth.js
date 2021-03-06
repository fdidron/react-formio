import React, {Component} from 'react';
import {Link} from 'react-router';
import FormioView from '../../../FormioView';
import {default as LoginView} from './Login';
import {default as RegisterView} from './Register';
import NavLink from '../../../components/NavLink';

export default class AuthView extends FormioView {
  component = class Auth extends Component {
    render() {
      const {location, Login, Register} = this.props;
      const {config} = this.props.formio.auth;
      return (location.pathname === '/' + config.path) ?
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="panel panel-default login-container">
              <div className="panel-heading">
                Login
              </div>
              <div className="panel-body">
                <Login />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="panel panel-default register-container">
              <div className="panel-heading">
                Register
              </div>
              <div className="panel-body">
                <Register />
              </div>
            </div>
          </div>
        </div> :
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-default">
              <div className="panel-heading" style={{paddingBottom: 0, borderBottom: 'none'}}>
                <ul className="nav nav-tabs" style={{borderBottom: 'none'}}>
                  <NavLink to={'/' + config.path + '/login'}>Login</NavLink>
                  <NavLink to={'/' + config.path + '/register'}>Register</NavLink>
                </ul>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-lg-12">
                    {this.props.children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>;
    }
  }

  mapStateToProps = () => {
    return {
      Login: this.formio.auth.config.Login || LoginView,
      Register: this.formio.auth.config.Register || RegisterView
    };
  }
}
