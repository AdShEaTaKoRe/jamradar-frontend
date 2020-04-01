import React from "react"

const UserLevelStage = ({ nextStage, previousStage, handleChange }) => (
    <>
      <h1> My Level</h1>
      <select name="level" onChange={handleChange}>
        <option value="level">My level is</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Seasoned Musician">Seasoned Musician</option>
        <option value="Professional Musician">Professional Musician</option>
        <option value="Im just here to jam">Im just here to jam</option>
      </select><br/>
      <button onClick={previousStage}>Back</button>
      <button onClick={nextStage}>Next</button>
    </>
  );

export { UserLevelStage }