import React from "react"

const UserAspirationStage = ({ nextStage, previousStage, handleChange, userDetails }) => (
    <div role="listbox" className="ui form">
      <h3> What is your goal here</h3>
      <select className="ui fluid selection dropdown" name="goal" defaultValue={userDetails.goal} onChange={handleChange}>
        <option defaultValue="goal">My goal is</option>
        <option defaultValue="Improvement">Improvement</option>
        <option defaultValue="Forming a band">Forming a band</option>
        <option defaultValue="Musician for my band">Musician for my band</option>
        <option defaultValue="Just here to jam">Just here to jam</option>
      </select><br></br><br/>
      <button className="ui left floated button" onClick={previousStage}>Back</button>
      <button className="ui right floated button" onClick={nextStage}>Next</button>
    </div>
  );

export { UserAspirationStage }