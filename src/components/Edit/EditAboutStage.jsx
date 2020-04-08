import React from "react";


const EditAboutStage = ({handleChange, userDetails, handleSubmit, beginUpload }) => (

  <>
    <button onClick={beginUpload}>Upload Image</button><br/>
    <textarea
      name="bio"
      id="bio"
      cols="30"
      rows="10"
      placeholder="Tell us about yourself/ Add links to your music etc"
      value={userDetails.bio}
      onChange={handleChange}
    ></textarea><br/>
    <button onClick={handleSubmit}>Submit</button>
  </>
);

export { EditAboutStage };
