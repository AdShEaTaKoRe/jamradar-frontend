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
      instruments: [],
      level: "",
      goal: "",
      bio: ""
    }
  };

  nextStage = () => {
    this.setState({
      currentStage: this.state.currentStage + 1
    });
  };

  handleChange = event => {
    const inputType = event.target.name;
    const inputValue = event.target.value;
    const userDetails = this.state.userDetails;
    userDetails[inputType] = inputValue;
    this.setState({
      userDetails: userDetails
    });
  };

  // handleGenreSelection = genreId => {
  //   let { userDetails } = this.state;
  //   if (userDetails.genres.includes(genreId)) {
  //     userDetails.genres = userDetails.genres.filter(
  //       genre => genre !== genreId
  //     );
  //   } else {
  //     userDetails.genres.push(genreId);
  //   }
  //   this.setState({
  //     userDetails: userDetails
  //   });
  // };

  // handleInstrumentSelection = instrumentId => {
  //   let { userDetails } = this.state;
  //   if (userDetails.instruments.includes(instrumentId)) {
  //     userDetails.instruments = userDetails.instruments.filter(
  //       instrument => instrument !== instrumentId
  //     );
  //   } else {
  //     userDetails.instruments.push(instrumentId);
  //   }
  //   this.setState({
  //     userDetails: userDetails
  //   });
  // };

  handleListSelection = (type, value) => {
    let { userDetails } = this.state;
    if (userDetails[type].includes(value)) {
      userDetails[type] = userDetails[type].filter(el => el !== value);
    } else {
      userDetails[type].push(value);
    }
    this.setState({
      userDetails: userDetails
    });
  };

  handleSubmit = () => {
    API.submitNewUser(this.state.userDetails);
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
            userDetails={this.state.userDetails}
          />
        ) : (
          ""
        )}
        {this.state.currentStage === 2 ? (
          <UserProfessionStage
            nextStage={this.nextStage}
            previousStage={this.previousStage}
            selectInstrument={this.handleListSelection}
            instruments={this.state.userDetails.instruments}
          />
        ) : (
          ""
        )}
        {this.state.currentStage === 3 ? (
          <UserGenresStage
            nextStage={this.nextStage}
            previousStage={this.previousStage}
            selectGenre={this.handleListSelection}
            genres={this.state.userDetails.genres}
          />
        ) : (
          ""
        )}
        {this.state.currentStage === 4 ? (
          <UserLevelStage
            nextStage={this.nextStage}
            previousStage={this.previousStage}
            handleChange={this.handleChange}
            userDetails={this.state.userDetails}
          />
        ) : (
          ""
        )}
        {this.state.currentStage === 5 ? (
          <UserAspirationStage
            nextStage={this.nextStage}
            previousStage={this.previousStage}
            handleChange={this.handleChange}
            userDetails={this.state.userDetails}
          />
        ) : (
          ""
        )}
        {this.state.currentStage === 6 ? (
          <UserAboutStage
            previousStage={this.previousStage}
            handleChange={this.handleChange}
            userDetails={this.state.userDetails}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}

export default SignUpStages;
