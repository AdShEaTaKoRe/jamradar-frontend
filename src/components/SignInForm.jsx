import React from "react";
import API from "../API.js";
import { Form, Button, Message } from "semantic-ui-react"

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

        <div className="signin">
          <h2 className="ui black center aligned header">
            Log-in to your account
          </h2>
          <Form warning={true} onSubmit={this.handleSubmit} size="large">
            {/* <div className="ui stacked segment"> */}
              <Form.Field >
                <div className="ui fluid left icon input">
                  <input
                    placeholder="E-mail address"
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                  />
                  <i aria-hidden="true" className="user icon"></i>
                </div>
              </Form.Field>
              <Form.Field>
                <div className="ui fluid left icon input">
                  <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                  />
                  <i aria-hidden="true" className="lock icon"></i>
                </div>
                </Form.Field>
              <Button
                className="ui teal large fluid button"
                style={{ backgroundColor: "black" }}
              >
                Sign In
              </Button>
            
          </Form>
          <Message>
            New to us? <a href="/sign-up">Sign Up</a>
          </Message>
        </div>
    );
  }
}

export default SignInForm;
