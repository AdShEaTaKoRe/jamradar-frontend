import React from "react";
import API from "../../API.js";
import { UserDetailsStage } from "./UserDetailsStage.jsx";
import { UserProfessionStage } from "./UserProfessionStage.jsx";
import { UserGenresStage } from "./UserGenresStage.jsx";
import { UserLevelStage } from "./UserLevelStage.jsx";
import { UserAspirationStage } from "./UserAspirationStage.jsx";
import { UserAboutStage } from "./UserAboutStage.jsx";
import { openUploadWidget } from "../../CloudinaryService.js";

class SignUpStages extends React.Component {
  state = {
    currentStage: 1,
    userDetails: {
      first_name: "",
      last_name: "",
      password: "",
      email: "",
      age: "",
      gender: "",
      hometown: "",
      genres: [],
      instruments: [],
      level: "",
      goal: "",
      bio: "",
      band_name: "",
      image: "",
      youtube: "",
      facebook: "",
      instagram: "",
    },
  };

  beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: "jamradar",
      tags: [tag],
      uploadPreset: "upload",
    };

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        if (photos.event === "success") {
          this.setState({
            userDetails: {
              ...this.state.userDetails,
              image: photos.info.public_id,
            },
          });
        }
      }
    });
  };

  handleLevelChange = (e, { value }) => this.setState({userDetails: {
    ...this.state.userDetails,
    level: value,
  } })

  handleGoalChange = (e, {value}) => {
    this.setState({userDetails: {
    ...this.state.userDetails,
    goal: value
  }})}

  handleGenderChange = (e, {value}) => {
    this.setState({userDetails: {
    ...this.state.userDetails,
    gender: value
  }})}
  

  nextStage = () => {
    this.setState({
      currentStage: this.state.currentStage + 1,
    });
  };

  handleChange = (event) => {
    const inputType = event.target.name;
    const inputValue = event.target.value;
    const userDetails = this.state.userDetails;
    userDetails[inputType] = inputValue;
    this.setState({
      userDetails: userDetails,
    });
  };


  handleListSelection = (type, value) => {
    let { userDetails } = this.state;
    if (userDetails[type].includes(value)) {
      userDetails[type] = userDetails[type].filter((el) => el !== value);
    } else {
      userDetails[type].push(value);
    }
    this.setState({
      userDetails: userDetails,
    });
  };

  handleSubmit = () => {
    API.submitNewUser(this.state.userDetails).then((json) =>
      this.props.signIn(json.user.email, json.token)
    )
  };

  previousStage = () => {
    this.setState({
      currentStage: this.state.currentStage - 1,
    });
  };

  render() {
    return (

      <div className="signup">
        {this.state.currentStage === 1 ? (
          <UserDetailsStage
            nextStage={this.nextStage}
            handleChange={this.handleChange}
            handleGenderChange={this.handleGenderChange}
            userDetails={this.state.userDetails}
            beginUpload={this.beginUpload}
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
            handleChange={this.handleLevelChange}
            userDetails={this.state.userDetails}
          />
        ) : (
          ""
        )}
        {this.state.currentStage === 5 ? (
          <UserAspirationStage
            nextStage={this.nextStage}
            previousStage={this.previousStage}
            handleChange={this.handleGoalChange}
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
          " "
        )}
      </div>
    );
  }
}

export default SignUpStages;
