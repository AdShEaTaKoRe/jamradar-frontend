import React from "react"

const EditAspirationStage = ({handleChange, userDetails }) => (
  <div role="listbox" className="ui form">
  <label> Your goal</label>
  <select className="ui fluid selection dropdown" name="goal" value={userDetails.goal} onChange={handleChange}>
    <option value="goal">My goal is</option>
    <option value="Improvement">Improvement</option>
    <option value="Forming a band">Forming a band</option>
    <option value="Musician for my band">Musician for my band</option>
    <option value="Just here to jam">Just here to jam</option>
  </select><br/>
</div>
  );

export { EditAspirationStage }