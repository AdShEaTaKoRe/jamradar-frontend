import React from "react"

const UserAspirationStage = ({ nextStage, previousStage, handleChange }) => (
    <>
      <h1> User Aspiration</h1>
      <select name="aspiration" onChange={handleChange}>
        <option value="aspiration">My goal is</option>
        <option value="Improvement">Improvement</option>
        <option value="Forming a band">Forming a band</option>
        <option value="Musician for my band">Musician for my band</option>
        <option value="Just here to jam">Just here to jam</option>
      </select><br/>
      <button onClick={previousStage}>Back</button>
      <button onClick={nextStage}>Next</button>
    </>
  );

export { UserAspirationStage }