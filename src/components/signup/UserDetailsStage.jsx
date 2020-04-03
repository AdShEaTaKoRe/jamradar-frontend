import React from "react";

const UserDetailsStage = ({ nextStage, handleChange, userDetails }) => (
  <>
    <h1> User Details</h1>
    <form >
      <input type="text" name="firstN" placeholder="First Name" value={userDetails.firstN} onChange={handleChange}/>
      <input type="text" name="lastN" placeholder="Last Name" value={userDetails.lastN} onChange={handleChange}/><br/>
      <input type="password" name="password" placeholder="Password" value={userDetails.password} onChange={handleChange}/><br/>
      <input type="password" name="passwordC" placeholder="Password Confirmation" value={userDetails.password} /><br/>
      <input type="email" name="email" placeholder="Email" value={userDetails.email} onChange={handleChange}/><br/>
      <input type="text" name="age" placeholder="Age" value={userDetails.age} onChange={handleChange}/>
      <select name="gender" value={userDetails.gender} onChange={handleChange}>
        <option value="gender">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Non-Binary">Non-Binary</option>
      </select><br/>
      <input type="text" name="hometown" placeholder="Hometown" value={userDetails.hometown} onChange={handleChange}/><br/>
      {/* <button type="submit">Next</button> */}
    </form>
    <button onClick={nextStage}>Next</button>
  </>
);

export { UserDetailsStage };
