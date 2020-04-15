import React from "react";
import API from "../API.js";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    API.signIn(this.state).then((json) =>
      this.props.signIn(json.email, json.token)
    );
  };

  render() {
    return (
      <div
        className="ui center aligned middle aligned grid"
        style={{ height: "100vh" }}
      >
        <div className="column" style={{ maxWidth: "450px" }}>
        <img
          src="https://res.cloudinary.com/jamradar/image/upload/v1586204803/Logo.jpg"
          alt="" style={{ maxWidth: "250px" }}
        />
          <h2 className="ui black center aligned header">
            <img
              src="https://res.cloudinary.com/jamradar/image/upload/v1586204803/Logo.jpg"
              className="ui image"
              alt=""
            />
            Log-in to your account
          </h2>
          <div className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui fluid left icon input">
                  <input
                    placeholder="E-mail address"
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                  />
                  <i aria-hidden="true" className="user icon"></i>
                </div>
              </div>
              <div className="field">
                <div className="ui fluid left icon input">
                  <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                  />
                  <i aria-hidden="true" className="lock icon"></i>
                </div>
              </div>
              <button
                className="ui teal large fluid button"
                onClick={this.handleSubmit}
                style={{ backgroundColor: "black" }}
              >
                Sign In
              </button>
            </div>
          </div>
          <div className="ui message">
            New to us? <a href="/sign-up">Sign Up</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInForm;
