import React from "react";
import API from "../../API.js";
import { EditDetailsStage } from "./EditDetailsStage.jsx";
import { EditProfessionStage } from "./EditProfessionStage.jsx";
import { EditGenresStage } from "./EditGenresStage.jsx";
import { EditLevelStage } from "./EditLevelStage.jsx";
import { EditAspirationStage } from "./EditAspirationStage.jsx";
import { EditAboutStage } from "./EditAboutStage.jsx";
import { openUploadWidget } from "../../CloudinaryService.js";
import ModalCloseConfig from "../ModalCloseConfig.jsx";
import { Container } from "semantic-ui-react";

class EditProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      userDetails: {
        first_name: "",
        last_name: "",
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
        youtube: "",
        facebook: "",
        instagram: "",
      },
    };
  }

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

  componentDidMount() {
    if (localStorage.token) {
      API.getUserDetails(localStorage.token).then((userDetails) => {
        this.setState({
          userDetails: {
            ...userDetails,
            genres: userDetails.genres.map((genre) => genre.id),
            instruments: userDetails.instruments.map(
              (instrument) => instrument.id
            ),
          },
        });
      });
    }
  }

  handleChange = (event) => {
    const inputType = event.target.name;
    const inputValue = event.target.value;
    const userDetails = this.state.userDetails;
    userDetails[inputType] = inputValue;
    this.setState({
      userDetails,
    });
  };

  handleLevelChange = (e, { value }) =>
    this.setState({
      userDetails: {
        ...this.state.userDetails,
        level: value,
      },
    });

  handleGoalChange = (e, { value }) => {
    this.setState({
      userDetails: {
        ...this.state.userDetails,
        goal: value,
      },
    });
  };

  handleGenderChange = (e, { value }) => {
    this.setState({
      userDetails: {
        ...this.state.userDetails,
        gender: value,
      },
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
      userDetails,
    });
  };

  handleSubmit = () => {
    API.updateUser(this.state.userDetails, localStorage.token).then(() => {
      this.props.redirectTo("/");
    });
  };

  handleDelete = () => {
    API.deleteData(localStorage.token)
      .then(this.props.signOut)
      .then(() => {
        this.props.redirectTo("/");
      });
  };

  render() {
    return (
      <Container>
        <EditDetailsStage
          userDetails={this.state.userDetails}
          handleChange={this.handleChange}
          handleGenderChange={this.handleGenderChange}
          beginUpload={this.beginUpload}
        />
        <EditProfessionStage
          selectInstrument={this.handleListSelection}
          instruments={this.state.userDetails.instruments}
        />
        <EditGenresStage
          selectGenre={this.handleListSelection}
          genres={this.state.userDetails.genres}
        />
        <EditLevelStage
          userDetails={this.state.userDetails}
          handleChange={this.handleLevelChange}
        />
        <EditAspirationStage
          userDetails={this.state.userDetails}
          handleChange={this.handleGoalChange}
        />
        <EditAboutStage
          handleChange={this.handleChange}
          userDetails={this.state.userDetails}
          handleSubmit={this.handleSubmit}
        />
        <ModalCloseConfig handleDelete={this.handleDelete} />
      </Container>
    );
  }
}

export default EditProfile;
