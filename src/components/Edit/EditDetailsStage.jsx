import React from "react";

const EditDetailsStage = ({handleChange, userDetails }) => (
  <>
      <br></br><input type="text" name="first_name" placeholder="First Name" defaultValue={userDetails.first_name} onChange={handleChange}/>
      <input type="text" name="last_name" placeholder="Last Name" defaultValue={userDetails.last_name} onChange={handleChange}/><br/>
      <input type="password" name="password" placeholder="Password" onChange={handleChange}/><br/>
      <input type="email" name="email" placeholder="Email" defaultValue={userDetails.email} onChange={handleChange}/><br/>
      <input type="text" name="age" placeholder="Age" defaultValue={userDetails.age} onChange={handleChange}/>
      <select name="gender" defaultValue={userDetails.gender} onChange={handleChange}>
        <option value="gender">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Non-Binary">Non-Binary</option>
      </select><br/>
      <input type="text" name="hometown" placeholder="Hometown" defaultValue={userDetails.hometown} onChange={handleChange}/><br/>
  </>
);

export { EditDetailsStage };
