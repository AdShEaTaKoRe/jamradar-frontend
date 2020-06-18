import React from "react";

const MatchGoalStage = ({
  nextStage,
  previousStage,
  handleChange,
  userPreferences,
}) => (
  <div className="ui form">
    <h3> For the purpose of?</h3>
    <select
      className="ui fluid dropdown"
      name="match_goal"
      defaultValue={userPreferences.match_goal}
      onChange={handleChange}
    >
      <option defaultValue="goal">Their goal should be</option>
      <option defaultValue="Improvement">Improvement</option>
      <option defaultValue="Forming a band">Forming a band</option>
      <option defaultValue="Musician for their band">Musician for my band</option>
      <option defaultValue="Just here to jam">Just here to jam</option>
    </select>{" "}
    <br></br>
    <br />
    <button className="ui left floated button" onClick={previousStage}>
      Back
    </button>
    <button className="ui right floated button" onClick={nextStage}>
      Next
    </button>
  </div>
);

export { MatchGoalStage };
