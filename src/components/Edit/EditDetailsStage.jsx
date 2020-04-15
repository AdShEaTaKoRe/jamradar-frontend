import React from "react";

const EditDetailsStage = ({handleChange, userDetails }) => (
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
          value={userDetails.first_name}
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
          value={userDetails.last_name}
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
          value={userDetails.password}
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
          value={userDetails.email}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="ui form">
    <select className="ui fluid dropdown" name="gender" value={userDetails.gender} onChange={handleChange}>
      <option value="gender">Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Non-Binary">Non-Binary</option>
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
          value={userDetails.age}
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
        value={userDetails.hometown}
        onChange={handleChange}
      ></input>
    </div>
  </div>
</div>
);

export { EditDetailsStage };
