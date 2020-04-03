import React from "react";
import API from "../../API.js";

const UserGenresStage = ({ nextStage, previousStage, selectGenre, genres }) => (
  <>
    <h1> User Genres</h1>
    <ul>
      {API.getGenres().map(genre => (
        <li>
          <input
            type="checkbox"
            key={genre.id}
            value={genre.name}
            checked={genres.includes(genre.id)}
            onChange={() => selectGenre("genres", genre.id)}
          />
          {genre.name}
        </li>
      ))}
    </ul>
    <button onClick={previousStage}>Back</button>
    <button onClick={nextStage}>Next</button>
  </>
);

export { UserGenresStage };
