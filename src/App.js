import React from "react";
import SignInForm from "./components/SignInForm.jsx";
import SignUpStages from "./components/signup/SignUpStages.jsx";
import UsersList from "./components/UsersList.js";
import API from "./API.js";
import "./App.css";
import { Route, Redirect, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import QuestionnaireStages from "./components/questionair/QuestionaireStages";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null,
      preferences: null
    };
  }

  componentDidMount() {
    if (localStorage.token) {
      API.validate(localStorage.token)
        // Pass the username and token the server sends back to signIn
        .then(json => this.signIn(json.email, json.token));
    }

    API.init();
  }

  signIn = (email, token) => {
    localStorage.token = token;
    API.getUserPreferences(token).then(json => {
      this.setState({
        email: email,
        preferences: {
          ...json,
          match_instrument: json.match_instrument?.split(",").map(e=>parseInt(e)),
          match_genre: json.match_genre?.split(",").map(e=>parseInt(e))
        }
      });
    });
  };

  signOut = () => {
    this.setState({
      email: null
    });
    localStorage.removeItem("token");
  };

  saveQuestionnaire = preferences => {
    this.setState({
      preferences
    })
  }

  render() {
    return (
      <div>
        {!this.state.email && (
          <Route exact path="/" component={() => <Home />} />
        )}
        {this.state.email && !this.state.preferences ? (
          <Redirect to="/questionnaire" />
        ) : (
          ""
        )}
        {this.state.email && this.state.preferences ? <Link to="/questionnaire">Questionnaire</Link> : ""}
        <Route
          exact
          path="/users"
          component={() => <UsersList users={this.state.users} />}
        />
        <Route exact path="/sign-up" component={() => <SignUpStages />} />
        <Route
          exact
          path="/questionnaire"
          component={() => <QuestionnaireStages saveQuestionnaire={this.saveQuestionnaire} preferences={this.state.preferences}/>}
        />

        <Route
          exact
          path="/sign-in"
          component={() => <SignInForm signIn={this.signIn} />}
        />
      </div>
    );
  }
}

export default App;
