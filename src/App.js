import React from "react";
import SignInForm from "./components/SignInForm.jsx";
import SignUpStages from "./components/signup/SignUpStages.jsx";
import API from "./API.js";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import QuestionnaireStages from "./components/questionair/QuestionaireStages";
import { CloudinaryContext } from "cloudinary-react";
import Matches from "./components/Matches/Matches.jsx";
import Candidates from "./components/Candidates/Candidates.jsx";
import NavBar from "./components/NavBar.jsx";
import EditProfileMain from "./components/Edit/EditProfileMain.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null,
      preferences: null,
      matches: [],
      userDetails: {},
    };
  }

  componentDidMount() {
    API.init();
    if (localStorage.token) {
      API.validate(localStorage.token).then((json) =>
        this.signIn(json.email, json.token)
      );
    }
  }

  componentDidUpdate() {
    if (this.props.location.pathname === "/") {
      if (this.state.email && !this.state.preferences)
        this.redirectTo("/questionnaire");
      if (this.state.preferences) this.redirectTo("/candidates");
    }
  }

  redirectTo = (path) => {
    const { history, location } = this.props;
    if (history && location && location.pathname !== path) history.push(path);
  };

  signIn = (email, token) => {
    if (email && token) {
      localStorage.token = token;
      API.getUserPreferences(token).then((json) => {
        let sessionState = { email };
        if (json) {
          sessionState.preferences = {
            ...json,
            match_instrument: json.match_instrument
              ?.split(",")
              .map((e) => parseInt(e)),
            match_genre: json.match_genre?.split(",").map((e) => parseInt(e)),
          };
        }

        this.setState(sessionState, () => {
          this.redirectTo("/");
        });
      });
    }

    // API.getMatches(token).then((json) => {
    //   this.setState({
    //     matches: json,
    //   });
    // });
  };

  signOut = () => {
    this.setState({
      email: null,
      preferences: null,
      matches: [],
      userDetails: {},
    });
    localStorage.removeItem("token");
  };

  saveQuestionnaire = (preferences) => {
    this.setState(
      {
        preferences,
      },
      () => {
        this.redirectTo("/");
      }
    );
  };
  getAllUsers = () => {};

  render() {
    return (
      <CloudinaryContext cloudName="jamradar">
        {(this.state.email) ? (<NavBar  email={this.state.email} signOut={this.signOut} />) : ""}
        <div className="ui grid container">
          {!this.state.email && (
            <Route exact path="/" component={() => <Home />} />
          )}
          <Route
            exact
            path="/sign-up"
            component={() => (
              <SignUpStages
                userDetails={this.state.userDetails}
                signIn={this.signIn}
              />
            )}
          />
          <Route
            exact
            path="/questionnaire"
            component={() => (
              <QuestionnaireStages
                saveQuestionnaire={this.saveQuestionnaire}
                preferences={this.state.preferences}
              />
            )}
          />

          <Route
            exact
            path="/sign-in"
            component={() => <SignInForm signIn={this.signIn} />}
          />
          <Route
            exact
            path="/matches"
            component={() => (
              <Matches
                email={this.state.email}
                preferences={this.state.preferences}
                users={this.state.users}
              />
            )}
          />
          <Route exact path="/candidates" component={() => <Candidates />} />
          <Route
            exact
            path="/edit"
            component={() => <EditProfileMain redirectTo={this.redirectTo} signOut={this.signOut}/>}
          />
        </div>
      </CloudinaryContext>
    );
  }
}

export default withRouter(App);
