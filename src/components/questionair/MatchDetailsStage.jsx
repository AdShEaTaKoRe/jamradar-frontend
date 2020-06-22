import React from "react";

const MatchDetailsStage = ({
  previousStage,
  handleChange,
  userPreferences,
  handleSubmit,
}) => (
  <div className="ui form">
    <div className="equal width fields">
      <h3> User Details </h3>
      <div className="field">
        <label htmlFor="form-input-control-min-age">Min age (optional)</label>
        <div className="ui input">
          <input
            type="text"
            name="min_age"
            placeholder="Min Age"
            id="form-input-control-min-age"
            defaultValue={userPreferences.min_age}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="form-input-control-max-age">Max age (optional)</label>
        <div className="ui input">
          <input
            type="text"
            name="max_age"
            placeholder="Max Age"
            id="form-input-control-max-age"
            defaultValue={userPreferences.max_age}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="form-input-control-hometown">Hometown</label>
        <div className="ui input">
          <input
            type="text"
            name="hometown"
            placeholder="Hometown"
            id="form-input-control-hometown"
            defaultValue={userPreferences.hometown}
            onChange={handleChange}
          />
        </div>
      </div>
      <br></br>
      <br />
      <button className="ui left floated button" onClick={previousStage}>
        Back
      </button>
      <button className="ui right floated button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  </div>
);

export { MatchDetailsStage };
