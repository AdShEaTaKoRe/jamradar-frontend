import React from "react";

const UserDetailsStage = ({ nextStage, handleChange, userDetails }) => (
  <div className="ui form">
    <div className="equal width fields">
      <div className="field">
        <label htmlFor="form-input-control-first-name">First name</label>
        <div className="ui input">
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            id="form-input-control-first-name"
            defaultValue={userDetails.first_name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="form-input-control-last-name">Last name</label>
        <div className="ui input">
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            id="form-input-control-last-name"
            defaultValue={userDetails.last_name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="form-input-control-password">Password</label>
        <div className="ui input">
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="form-input-control-password"
            defaultValue={userDetails.password}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="form-input-control-email">Email</label>
        <div className="ui input">
          <input
            type="email"
            name="email"
            placeholder="joe@schmoe.com"
            id="form-input-control-email"
            defaultValue={userDetails.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="ui form">
      <select className="ui fluid dropdown" name="gender" defaultValue={userDetails.gender} onChange={handleChange}>
        <option defaultValue="gender">Gender</option>
        <option defaultValue="Male">Male</option>
        <option defaultValue="Female">Female</option>
        <option defaultValue="Non-Binary">Non-Binary</option>
      </select>
      </div>
      <div className="field">
        <label htmlFor="form-input-control-age">Age</label>
        <div className="ui input">
          <input
            type="text"
            name="age"
            placeholder="Age"
            id="form-input-control-age"
            defaultValue={userDetails.age}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="field">
        <label htmlFor="form-textarea-control-hometown">Hometown</label>
        <input
          placeholder="Hometown"
          name="hometown"
          id="form-textarea-control-hometown"
          defaultValue={userDetails.hometown}
          onChange={handleChange}
        ></input>
      </div>
      
      <div className="field">
        <button
          id="form-button-control-public"
          className="ui right floated button"
          onClick={nextStage}
        >
          Next
        </button>
      </div>
    </div>
  </div>
);

export { UserDetailsStage };
