import React from "react";
import { Link } from "react-router-dom";

const UserAboutStage = ({ previousStage, handleChange, userDetails, handleSubmit }) => (
  <>
    <h1> About me and Submit</h1>
    <textarea
      name="bio"
      id="bio"
      cols="30"
      rows="10"
      placeholder="Tell us about yourself/ Add links to your music etc"
      value={userDetails.bio}
      onChange={handleChange}
    ></textarea>
    <button onClick={previousStage}>Back</button>
    <button onClick={handleSubmit}>Submit</button>
  </>
);

export { UserAboutStage };
