import React from "react"

const MatchGoalStage = ({ nextStage, previousStage, handleChange, userPreferences }) => (
    <>
      <h1> For the purpose of?</h1>
      <select name="match_goal" value={userPreferences.match_goal} onChange={handleChange}>
        <option value="goal">Their goal should be</option>
        <option value="Improvement">Improvement</option>
        <option value="Forming a band">Forming a band</option>
        <option value="Musician for their band">Musician for my band</option>
        <option value="Just here to jam">Just here to jam</option>
      </select><br/>
      <button onClick={previousStage}>Back</button>
      <button onClick={nextStage}>Next</button>
    </>
  );

export { MatchGoalStage }