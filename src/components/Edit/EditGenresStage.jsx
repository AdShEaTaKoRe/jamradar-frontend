import React from "react";
import API from "../../API.js";
import { Checkbox } from 'semantic-ui-react'

const EditGenresStage = ({selectGenre, genres }) => (
  <div className="ui form">
  <label> Your genres</label>
  <div className="ui fluid card">
    {API.getGenres().map(genre => (
      <div key={genre.id}>
        <Checkbox toggle
          type="checkbox"
          defaultValue={genre.name}
          checked={genres.includes(genre.id)}
          onChange={() => selectGenre("genres", genre.id)}
        />
        {genre.name}
      </div>
    ))}
  </div>
</div>
);

export { EditGenresStage };
