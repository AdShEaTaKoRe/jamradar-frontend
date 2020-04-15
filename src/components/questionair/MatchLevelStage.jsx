import React from "react";

const MatchLevelStage = ({
  nextStage,
  previousStage,
  handleChange,
  userPreferences,
}) => (
  <div role="listbox" className="ui form">
    <h3> At what level should the musicians be</h3>
    <select
      className="ui fluid selection dropdown"
      name="match_level"
      value={userPreferences.match_level}
      onChange={handleChange}
    >
      <option value="level">Level </option>
      <option value="Beginner">Beginner</option>
      <option value="Intermediate">Intermediate</option>
      <option value="Seasoned Musician">Seasoned Musician</option>
      <option value="Professional Musician">Professional Musician</option>
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

export { MatchLevelStage };
