import React from "react"

const EditAspirationStage = ({handleChange, userDetails }) => (
  <div role="listbox" className="ui form">
  <label> Your goal</label>
  <select className="ui fluid selection dropdown" name="goal" defaultValue={userDetails.goal} onChange={handleChange}>
    <option defaultValue="goal">My goal is</option>
    <option defaultValue="Improvement">Improvement</option>
    <option defaultValue="Forming a band">Forming a band</option>
    <option defaultValue="Musician for my band">Musician for my band</option>
    <option defaultValue="Just here to jam">Just here to jam</option>
  </select><br/>
</div>
  );

export { EditAspirationStage }