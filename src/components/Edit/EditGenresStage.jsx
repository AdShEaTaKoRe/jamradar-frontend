import React from "react";
import API from "../../API.js";

const EditGenresStage = ({selectGenre, genres }) => (
  <>
    <h3> Your Genres</h3>
    <ul>
      {API.getGenres().map(genre => (
        <li key={genre.id}>
          <input
            type="checkbox"
            value={genre.name}
            checked={genres.includes(genre.id)}
            onChange={() => selectGenre("genres", genre.id)}
          />
          {genre.name}
        </li>
      ))}
    </ul>
  </>
);

export { EditGenresStage };
