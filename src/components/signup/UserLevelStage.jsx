import React from "react"

const UserLevelStage = ({ nextStage, previousStage, handleChange, userDetails }) => (
    <div role="listbox" className="ui form">
      <h3> Please select your level</h3>
      <select className="ui fluid selection dropdown" name="level" defaultValue={userDetails.level} onChange={handleChange}>
        <option defaultValue="level">My level is</option>
        <option defaultValue="Beginner">Beginner</option>
        <option defaultValue="Intermediate">Intermediate</option>
        <option defaultValue="Seasoned Musician">Seasoned Musician</option>
        <option defaultValue="Professional Musician">Professional Musician</option>
        <option defaultValue="Im just here to jam">Im just here to jam</option>
      </select><br></br><br/>
      <button className="ui left floated button" onClick={previousStage}>Back</button>
    <button className="ui right floated button" onClick={nextStage}>Next</button>

    </div>
  );

export { UserLevelStage }