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
      value={userPreferences.match_goal}
      onChange={handleChange}
    >
      <option value="goal">Their goal should be</option>
      <option value="Improvement">Improvement</option>
      <option value="Forming a band">Forming a band</option>
      <option value="Musician for their band">Musician for my band</option>
      <option value="Just here to jam">Just here to jam</option>
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
