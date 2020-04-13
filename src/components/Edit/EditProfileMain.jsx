import React from "react";
import API from "../../API.js";
import { EditDetailsStage } from "./EditDetailsStage.jsx";
import { EditProfessionStage } from "./EditProfessionStage.jsx";
import { EditGenresStage } from "./EditGenresStage.jsx";
import { EditLevelStage } from "./EditLevelStage.jsx";
import { EditAspirationStage } from "./EditAspirationStage.jsx";
import { EditAboutStage } from "./EditAboutStage.jsx";

class EditProfile extends React.Component {
  constructor() {
    super();
    this.state = {
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
        bio: "",
        image: "",
      },
    };
  }

  componentDidMount() {
  API.getUserDetails(localStorage.token)
    .then(userDetails => {
      this.setState({
        userDetails:{
          ...userDetails,
          genres: userDetails.genres.map(genre => genre.id),
          instruments: userDetails.instruments.map(instrument => instrument.id)
        }
      });
    })
    

  }

  handleChange = (event) => {
    const inputType = event.target.name;
    const inputValue = event.target.value;
    const userDetails = this.state.userDetails;
    userDetails[inputType] = inputValue;
    this.setState({
      userDetails
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
      userDetails
    });
  };

  handleSubmit = () => {
    API.updateUser(this.state.userDetails, localStorage.token)
    .then(() => {this.props.redirectTo("/")});
  };



  // handleDelete = () => {
  //   API.deleteData(this.state.)
  // }

  render() {
    return (
      <>
        <EditDetailsStage userDetails={this.state.userDetails} handleChange={this.handleChange}/>
        <EditProfessionStage
          selectInstrument={this.handleListSelection}
          instruments={this.state.userDetails.instruments}
        />
        <EditGenresStage
          selectGenre={this.handleListSelection}
          genres={this.state.userDetails.genres}
        />
        <EditLevelStage userDetails={this.state.userDetails} handleChange={this.handleChange} />
        <EditAspirationStage userDetails={this.state.userDetails} handleChange={this.handleChange} />
        <EditAboutStage
          handleChange={this.handleChange}
          userDetails={this.state.userDetails}
          handleSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export default EditProfile;