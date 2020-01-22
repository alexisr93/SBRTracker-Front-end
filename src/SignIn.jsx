import React from 'react';

class SignIn extends React.Component {
  render() {
    return (
      <div>
        <form className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>

          <label for="inputEmail">Username</label>
          <input
            type="email"
            id="inputUsername"
            className="form-control"
            placeholder="Enter username"
            required autofocus />

          <label for="inputPassword">Password</label>
          <input
            type="password"
            id="inputPassword"
            className="form-control mb-4"
            placeholder="Password"
            required />

          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">Copyright 2020</p>
        </form>
      </div>
    );
  }
}

export default SignIn;
