import React from "react";
import API from "../../API.js";
import { MatchInstrumentsStage } from "./MatchInstrumentsStage.jsx";
import { MatchGenresStage } from "./MatchGenresStage.jsx";
import { MatchLevelStage } from "./MatchLevelStage.jsx";
import { MatchGoalStage } from "./MatchGoalStage.jsx";
import { MatchDetailsStage } from "./MatchDetailsStage.jsx";
import { Container } from "semantic-ui-react";

class QuestionnaireStages extends React.Component {
  state = {
    currentStage: 1,
    userPreferences: {
      match_instrument: [],
      match_genre: [],
      match_goal: "",
      match_level: "",
      min_age: "",
      max_age: "",
    },
  };

  componentDidMount() {
    if (this.props.preferences) {
      this.setState({
        userPreferences: this.props.preferences,
      });
    }
  }

  nextStage = () => {
    this.setState({
      currentStage: this.state.currentStage + 1,
    });
  };

  previousStage = () => {
    this.setState({
      currentStage: this.state.currentStage - 1,
    });
  };

  handleMatchGoalChange = (e, { value }) => {
    this.setState({
      userPreferences: {
        ...this.state.userPreferences,
        match_goal: value,
      },
    });
  };

  handleMatchLevelChange = (e, { value }) => {
    this.setState({
      userPreferences: {
        ...this.state.userPreferences,
        match_level: value,
      },
    });
  };

  handleChange = (event) => {
    const inputType = event.target.name;
    const inputValue = event.target.value;
    const userPreferences = this.state.userPreferences;
    userPreferences[inputType] = inputValue;
    this.setState({
      userPreferences: userPreferences,
    });
  };

  handleListSelection = (type, value) => {
    let { userPreferences } = this.state;
    if (userPreferences[type].includes(value)) {
      userPreferences[type] = userPreferences[type].filter(
        (el) => el !== value
      );
    } else {
      userPreferences[type].push(value);
    }
    this.setState({
      userPreferences: userPreferences,
    });
  };

  handleSubmit = () => {
    const { userPreferences } = this.state;
    API.submitQuestionnaire(userPreferences, localStorage.token).then(() =>
      this.props.saveQuestionnaire(userPreferences)
    );
  };

  render() {
    return (
      <Container>
        {this.state.currentStage === 1 ? (
          <MatchInstrumentsStage
            nextStage={this.nextStage}
            selectInstrument={this.handleListSelection}
            instruments={this.state.userPreferences.match_instrument}
          />
        ) : (
          ""
        )}
        {this.state.currentStage === 2 ? (
          <MatchGenresStage
            nextStage={this.nextStage}
            previousStage={this.previousStage}
            selectGenre={this.handleListSelection}
            genres={this.state.userPreferences.match_genre}
          />
        ) : (
          ""
        )}
        {this.state.currentStage === 3 ? (
          <MatchLevelStage
            nextStage={this.nextStage}
            previousStage={this.previousStage}
            handleChange={this.handleMatchLevelChange}
            userPreferences={this.state.userPreferences}
          />
        ) : (
          ""
        )}
        {this.state.currentStage === 4 ? (
          <MatchGoalStage
            nextStage={this.nextStage}
            previousStage={this.previousStage}
            handleChange={this.handleMatchGoalChange}
            userPreferences={this.state.userPreferences}
          />
        ) : (
          ""
        )}
        {this.state.currentStage === 5 ? (
          <MatchDetailsStage
            nextStage={this.nextStage}
            previousStage={this.previousStage}
            handleChange={this.handleChange}
            userPreferences={this.state.userPreferences}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          ""
        )}
      </Container>
    );
  }
}

export default QuestionnaireStages;
