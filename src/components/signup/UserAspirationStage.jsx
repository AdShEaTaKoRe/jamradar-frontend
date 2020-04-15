import React from "react"

const UserAspirationStage = ({ nextStage, previousStage, handleChange, userDetails }) => (
    <div role="listbox" className="ui form">
      <h3> What is your goal here</h3>
      <select className="ui fluid selection dropdown" name="goal" value={userDetails.goal} onChange={handleChange}>
        <option value="goal">My goal is</option>
        <option value="Improvement">Improvement</option>
        <option value="Forming a band">Forming a band</option>
        <option value="Musician for my band">Musician for my band</option>
        <option value="Just here to jam">Just here to jam</option>
      </select><br></br><br/>
      <button className="ui left floated button" onClick={previousStage}>Back</button>
      <button className="ui right floated button" onClick={nextStage}>Next</button>
    </div>
  );

export { UserAspirationStage }