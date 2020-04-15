import React from "react";

const EditAboutStage = ({
  handleChange,
  userDetails,
  handleSubmit,
  beginUpload,
}) => (
  <div className="ui form">
    <div className="equal width fields">
      <div className="field">
        <label htmlFor="form-input-control-band-name">
          Band name (Optional)
        </label>
        <div className="ui input">
          <input
            type="text"
            name="band_name"
            placeholder="Band name"
            id="form-input-control-Band-name"
            value={userDetails.band_name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="form-input-control-facebook">Facebook (Optional)</label>
        <div className="ui input">
          <input
            type="text"
            name="facebook"
            placeholder="Facebook"
            id="form-input-control-facebook"
            value={userDetails.facebook}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="form-input-control-instagram">
          Instagram (Optional)
        </label>
        <div className="ui input">
          <input
            type="text"
            name="instagram"
            placeholder="Instagram"
            id="form-input-control-instagram"
            value={userDetails.instagram}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="form-input-control-youtube">YouTube (Optional)</label>
        <div className="ui input">
          <input
            type="text"
            name="youtube"
            placeholder="YouTube"
            id="form-input-control-youtube"
            value={userDetails.youtube}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label>About</label>
        <textarea
          name="bio"
          id="bio"
          cols="30"
          rows="10"
          placeholder="Tell us about yourself/ Add links to your music etc"
          value={userDetails.bio}
          onChange={handleChange}
        ></textarea>{" "}
        <br></br>
        <br />
        <button className="ui left floated button" onClick={beginUpload}>
          Upload Image
        </button>
        <br />
        <button className="ui right floated button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  </div>
);

export { EditAboutStage };
