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
      defaultValue={userPreferences.match_level}
      onChange={handleChange}
    >
      <option defaultValue="level">Level </option>
      <option defaultValue="Beginner">Beginner</option>
      <option defaultValue="Intermediate">Intermediate</option>
      <option defaultValue="Seasoned Musician">Seasoned Musician</option>
      <option defaultValue="Professional Musician">Professional Musician</option>
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

export { MatchLevelStage };
