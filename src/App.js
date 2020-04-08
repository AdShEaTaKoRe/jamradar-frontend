import React from "react";
import SignInForm from "./components/SignInForm.jsx";
import SignUpStages from "./components/signup/SignUpStages.jsx";
import API from "./API.js";
import "./App.css";
import { Route, Redirect, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import QuestionnaireStages from "./components/questionair/QuestionaireStages";
import {CloudinaryContext} from 'cloudinary-react';
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
      userDetails: {}
    };
  }

  componentDidMount() {
    if (localStorage.token) {
      API.validate(localStorage.token)

        // Pass the username and token the server sends back to signIn
        .then((json) => this.signIn(json.email, json.token));
    }

    API.init();
  }

  

  signIn = (email, token) => {
    if (email && token)
    {
      localStorage.token = token;
      API.getUserPreferences(token).then((json) => {
        this.setState({
          email: email,
          preferences: {
            ...json,
            match_instrument: json.match_instrument
              ?.split(",")
              .map((e) => parseInt(e)),
            match_genre: json.match_genre?.split(",").map((e) => parseInt(e)),
          },
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
    });
    localStorage.removeItem("token");
  };

  saveQuestionnaire = (preferences) => {
    this.setState({
      preferences,
    });
  };
  getAllUsers = () => {};


  
  




  render() {
    
    return (
      <CloudinaryContext cloudName="jamradar">
      <NavBar signOut={this.signOut}/>
      <div>
        {!this.state.email && (
          <Route exact path="/" component={() => <Home />} />
        )}
        {this.state.email && !this.state.preferences ? (
          <Redirect to="/questionnaire" />
        ) : (
          ""
        )}
        {this.state.preferences && <Link to="/candidates">Candidates</Link>}
        <Route exact path="/sign-up" component={() => <SignUpStages userDetails={this.state.userDetails}/>} />
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
        <Route exact path="/edit" component={() => <EditProfileMain />}/>
      </div>
      </CloudinaryContext>
    );
  }
}

export default App;
