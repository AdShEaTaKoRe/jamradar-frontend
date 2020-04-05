import React from "react";
import API from "../../API.js";

const MatchGenresStage = ({ nextStage, previousStage, selectGenre, genres }) => (
  <>
    <h1> What genres must they know?</h1>
    <ul>
      {API.getGenres().map(genre => (
        <li key={genre.id}>
          <input
            type="checkbox"
            value={genre.name}
            checked={genres.includes(genre.id)}
            onChange={() => selectGenre("match_genre", genre.id)}
          />
          {genre.name}
        </li>
      ))}
    </ul>
    <button onClick={previousStage}>Back</button>
    <button onClick={nextStage}>Next</button>
  </>
);

export { MatchGenresStage };