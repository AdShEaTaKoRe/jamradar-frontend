import React from "react";
import API from "../../API.js";
import { UserDetailsStage } from "./UserDetailsStage.jsx";
import { UserProfessionStage } from "./UserProfessionStage.jsx";
import { UserGenresStage } from "./UserGenresStage.jsx";
import { UserLevelStage } from "./UserLevelStage.jsx";
import { UserAspirationStage } from "./UserAspirationStage.jsx";
import { UserAboutStage } from "./UserAboutStage.jsx";

class SignUpStages extends React.Component {
  state = {
    currentStage: 1,
    userDetails: {
      firstN: "",
      lastN: "",
      password: "",
      email: "",
      age: "",
      gender: "",
      hometown: "",
      profession: "",
      genres: [],
      level: "",
      aspiration: ""
    }
  };

  nextStage = e => {
    this.setState({
      currentStage: this.state.currentStage + 1
    });
  };

  handleChange = event => {
    const inputType = event.target.name;
    const inputValue = event.target.value;
    this.setState(state => {
      state[inputType] = inputValue;
      return state;
    });
  };

  previousStage = () => {
    this.setState({
      currentStage: this.state.currentStage - 1
    });
  };

  render() {
    return (
      <>
        {this.state.currentStage === 1 ? (
          <UserDetailsStage
            nextStage={this.nextStage}
            handleChange={this.handleChange}
          />
        ) : (
          ""
        )}
        {this.state.currentStage === 2 ? (
          <UserProfessionStage
            nextStage={this.nextStage}
            previousStage={this.previousStage}
            handleChange={this.handleChange}
          />
        ) : (
          ""
        )}
        {this.state.currentStage === 3 ? (
          <UserGenresStage
            nextStage={this.nextStage}
            previousStage={this.previousStage}
            handleChange={this.handleChange}
          />
        ) : (
          ""
        )}
        {this.state.currentStage === 4 ? (
          <UserLevelStage
            nextStage={this.nextStage}
            previousStage={this.previousStage}
            handleChange={this.handleChange}
          />
        ) : (
          ""
        )}
        {this.state.currentStage === 5 ? (
          <UserAspirationStage
            nextStage={this.nextStage}
            previousStage={this.previousStage}
            handleChange={this.handleChange}
          />
        ) : (
          ""
        )}
        {this.state.currentStage === 6 ? (
          <UserAboutStage
            previousStage={this.previousStage}
            handleChange={this.handleChange}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}

export default SignUpStages;
