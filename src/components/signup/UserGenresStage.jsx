import React from "react"

const UserGenresStage = ({ nextStage, previousStage, handleChange }) => (
    <>
      <h1> User Genres</h1>
      <form >
        <input type="checkbox" name="genres" value="Jazz" onChange={handleChange} />
        <label htmlFor="genres">Jazz</label>
      </form>
      <button onClick={previousStage}>Back</button>
      <button onClick={nextStage}>Next</button>
    </>
  );

export { UserGenresStage }