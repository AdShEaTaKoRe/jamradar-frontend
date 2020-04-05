import React from "react";

const MatchDetailsStage = ({ previousStage, handleChange, userPreferences, handleSubmit }) => (
  <>
    <h1> User Details</h1>
      <input type="text" name="min_age" placeholder="Min Age" defaultValue={userPreferences.min_age} onChange={handleChange}/>
      <input type="text" name="max_age" placeholder="Max Age" defaultValue={userPreferences.max_age} onChange={handleChange}/><br/>
      <input type="text" name="hometown" placeholder="Hometown" defaultValue={userPreferences.hometown} onChange={handleChange}/><br/>
    <button onClick={previousStage}>Back</button>
    <button onClick={handleSubmit}>Submit</button>
  </>
);

export { MatchDetailsStage };
