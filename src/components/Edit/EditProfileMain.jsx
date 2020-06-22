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
      <div className="ui column grid">
        <div className="column" style={{ maxWidth: "450px" }}>
          <img
            src="https://res.cloudinary.com/jamradar/image/upload/v1586204803/Logo.jpg"
            alt=""
            className="ui fluid image"
          />
          <EditDetailsStage
            userDetails={this.state.userDetails}
            handleChange={this.handleChange}
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
            handleChange={this.handleChange}
          />
          <EditAspirationStage
            userDetails={this.state.userDetails}
            handleChange={this.handleChange}
          />
          <EditAboutStage
            handleChange={this.handleChange}
            userDetails={this.state.userDetails}
            handleSubmit={this.handleSubmit}
            beginUpload={this.beginUpload}
          />
          <ModalCloseConfig handleDelete={this.handleDelete} />
        </div>
      </div>
    );
  }
}

export default EditProfile;
