import React from "react"

const UserLevelStage = ({ nextStage, previousStage, handleChange, userDetails }) => (
    <div role="listbox" className="ui form">
      <h3> Please select your level</h3>
      <select className="ui fluid selection dropdown" name="level" value={userDetails.level} onChange={handleChange}>
        <option value="level">My level is</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Seasoned Musician">Seasoned Musician</option>
        <option value="Professional Musician">Professional Musician</option>
        <option value="Im just here to jam">Im just here to jam</option>
      </select><br></br><br/>
      <button className="ui left floated button" onClick={previousStage}>Back</button>
    <button className="ui right floated button" onClick={nextStage}>Next</button>

    </div>
  );

export { UserLevelStage }