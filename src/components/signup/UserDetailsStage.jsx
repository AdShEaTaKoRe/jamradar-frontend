import React from "react";

const UserDetailsStage = ({ nextStage, handleChange }) => (
  <>
    <h1> User Details</h1>
    <form >
      <input type="text" name="firstN" placeholder="First Name" onChange={handleChange}/>
      <input type="text" name="lastN" placeholder="Last Name" onChange={handleChange}/><br/>
      <input type="password" name="password" placeholder="Password" onChange={handleChange}/><br/>
      <input type="password" name="passwordC" placeholder="Password Confirmation" /><br/>
      <input type="email" name="email" placeholder="Email" onChange={handleChange}/><br/>
      <input type="text" name="age" placeholder="Age" onChange={handleChange}/>
      <select name="gender" onChange={handleChange}>
        <option value="gender">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Non-Binary">Non-Binary</option>
      </select><br/>
      <input type="text" name="hometown" placeholder="Hometown" onChange={handleChange}/><br/>
      {/* <button type="submit">Next</button> */}
    </form>
    <button onClick={nextStage}>Next</button>
  </>
);

export { UserDetailsStage };
