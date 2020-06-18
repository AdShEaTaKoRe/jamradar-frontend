import React from "react"

const EditLevelStage = ({ handleChange, userDetails }) => (
  <div role="listbox" className="ui form">
  <label>Your level</label>
  <select className="ui fluid selection dropdown" name="level" defaultValue={userDetails.level} onChange={handleChange}>
    <option defaultValue="level">My level is</option>
    <option defaultValue="Beginner">Beginner</option>
    <option defaultValue="Intermediate">Intermediate</option>
    <option defaultValue="Seasoned Musician">Seasoned Musician</option>
    <option defaultValue="Professional Musician">Professional Musician</option>
    <option defaultValue="Im just here to jam">Im just here to jam</option>
  </select><br/>
</div>
  );

export { EditLevelStage }