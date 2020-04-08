import React from "react"

const EditLevelStage = ({ handleChange, userDetails }) => (
      <>
      <select name="level" value={userDetails.level} onChange={handleChange}>
        <option value="level">My level is</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Seasoned Musician">Seasoned Musician</option>
        <option value="Professional Musician">Professional Musician</option>
        <option value="Im just here to jam">Im just here to jam</option>
      </select><br/>
    </>
  );

export { EditLevelStage }