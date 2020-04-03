import React from "react";
import API from "../../API.js";
import { MatchInstrumentsStage } from "./MatchInstrumentsStage.jsx";
import { MatchGenresStage } from "./MatchGenresStage.jsx";
import { MatchLevelStage } from "./MatchLevelStage.jsx";
import { MatchGoalStage } from "./MatchGoalStage.jsx";


class QuestionnaireStages extends React.Component {
  state = {
    currentStage: 1,
    userPreferences: {
      instruments: [],
      genres: [],
      goal: "",
      level: "",
      age_min: "",
      age_max: "",
      user_id: ""
    }
  };

  nextStage = () => {
    this.setState({
      currentStage: this.state.currentStage + 1
    });
  };

  previousStage = () => {
    this.setState({
      currentStage: this.state.currentStage - 1
    });
  };

  handleChange = event => {
    const inputType = event.target.name;
    const inputValue = event.target.value;
    const userPreferences = this.state.userPreferences;
    userPreferences[inputType] = inputValue;
    this.setState({
      userPreferences: userPreferences
    });
  };

  handleListSelection = (type, value) => {
    let { userPreferences } = this.state;
    if (userPreferences[type].includes(value)) {
        userPreferences[type] = userPreferences[type].filter(el => el !== value);
    } else {
        userPreferences[type].push(value);
    }
    this.setState({
        userPreferences: userPreferences
    });
  };

  handleSubmit = () => {
    API.submitNewMatchDetails(this.state.userPreferences);
  };

  render() {
    return (
      <>
        {this.state.currentStage === 1 ? (
          <MatchInstrumentsStage
            nextStage={this.nextStage}
            selectInstrument={this.handleListSelection}
            instruments={this.state.userPreferences.instruments}
          />
        ) : (
          ""
        )}
        {this.state.currentStage === 2 ? (
          <MatchGenresStage
            nextStage={this.nextStage}
            previousStage={this.previousStage}
            selectInstrument={this.handleListSelection}
            genres={this.state.userPreferences.genres}
          />
        ) : (
          ""
        )}
                {this.state.currentStage === 3 ? (
          <MatchLevelStage
            nextStage={this.nextStage}
            previousStage={this.previousStage}
            handleChange={this.handleChange}
            userPreferences={this.state.userPreferences}
          />
        ) : (
          ""
        )}
                {this.state.currentStage === 4 ? (
          <MatchGoalStage
            nextStage={this.nextStage}
            previousStage={this.previousStage}
            handleChange={this.handleChange}
            userPreferences={this.state.userPreferences}
          />
        ) : (
          ""
        )}
                {this.state.currentStage === 5 ? (
          <MatchGoalStage
            nextStage={this.nextStage}
            previousStage={this.previousStage}
            handleChange={this.handleChange}
            userPreferences={this.state.userPreferences}
          />
        ) : (
          ""
        )}


      </>
    );
  }
}

export default QuestionnaireStages;
