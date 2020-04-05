import React from "react"

const MatchLevelStage = ({ nextStage, previousStage, handleChange, userPreferences }) => (
    <>
      <h1> Their level should be?</h1>
      <select name="match_level" value={userPreferences.match_level} onChange={handleChange}>
        <option value="level">At the level of </option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Seasoned Musician">Seasoned Musician</option>
        <option value="Professional Musician">Professional Musician</option>
        <option value="Just here to jam">Im just here to jam</option>
      </select><br/>
      <button onClick={previousStage}>Back</button>
      <button onClick={nextStage}>Next</button>
    </>
  );

export { MatchLevelStage }