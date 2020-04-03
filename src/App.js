import React from "react";
import SignInForm from "./components/SignInForm";
import SignUpStages from "./components/signup/SignUpStages.jsx";
import UsersList from "./components/UsersList.js";
import API from "./API.js";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import QuestionnaireStages from "./components/questionair/QuestionaireStages";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null,
      users: []
    };
  }

  componentDidMount() {
    // if (localStorage.token) {
    //   API.validate(localStorage.token).then(json =>
    //     this.signIn(json.username, json.token)
    //   );
    // }

    API.init()
  }

  signIn = (username, token) => {
    this.setState({
      username
    });
    localStorage.token = token;
  };

  signOut = () => {
    this.setState({
      username: null
    });
    localStorage.removeItem("token");
  };

  render() {
    return (
      <div>
        <Route exact path="/" component={() => <Home />} />
        <Route
          exact
          path="/users"
          component={() => <UsersList users={this.state.users} />}
        />
        <Route exact path="/sign-up" component={() => <SignUpStages />} />
        <Route exact path="/questionnaire" component={() => <QuestionnaireStages />} />
      </div>
    );
  }
}

export default App;
