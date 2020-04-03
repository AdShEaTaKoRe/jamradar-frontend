import React from "react";

const MatchDetailsStage = ({ previousStage, nextStage, handleChange, userPreferences }) => (
  <>
    <h1> User Details</h1>
    <form >
      <input type="text" name="min_age" placeholder="Min Age" value={userPreferences.min_age} onChange={handleChange}/>
      <input type="text" name="max_age" placeholder="Max Age" value={userPreferences.max_age} onChange={handleChange}/><br/>
      <input type="text" name="hometown" placeholder="Hometown" value={userPreferences.hometown} onChange={handleChange}/><br/>
      {/* <button type="submit">Next</button> */}
    </form>
    <button onClick={previousStage}>Back</button>
    <button onClick={nextStage}>Next</button>
  </>
);

export { MatchDetailsStage };
