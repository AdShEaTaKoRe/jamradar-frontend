import React from "react";

const UserProfessionStage = ({ nextStage, previousStage, handleChange }) => (
  <>
    <h1> User Profession</h1>
    <select name="profession" onChange={handleChange}>
        <option value="Profession">I am a</option>
        <option value="Singer">Singer</option>
        <option value="Guitar player">Guitar player</option>
        <option value="Bass player">Bass player</option>
        <option value="Keyboard player">Keyboard player</option>
        <option value="Drummer">Drummer</option>
      </select><br/>
    <button onClick={previousStage}>Back</button>
    <button onClick={nextStage}>Next</button>
  </>
);

export { UserProfessionStage };
