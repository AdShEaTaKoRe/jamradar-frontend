import React from "react";
import API from "../../API.js";
import { Checkbox } from "semantic-ui-react";

const MatchGenresStage = ({
  nextStage,
  previousStage,
  selectGenre,
  genres,
}) => (
  <div className="ui form">
    <h3> What genres must they know</h3>
    <div className="ui fluid card">
      {API.getGenres().map((genre) => (
        <div key={genre.id}>
          <Checkbox
            toggle
            type="checkbox"
            defaultValue={genre.name}
            checked={genres.includes(genre.id)}
            onChange={() => selectGenre("match_genre", genre.id)}
          />
          {genre.name}
        </div>
      ))}
    </div>
    <br></br>
    <br />
    <button className="ui left floated button" onClick={previousStage}>
      Back
    </button>
    <button className="ui right floated button" onClick={nextStage}>
      Next
    </button>
  </div>
);

export { MatchGenresStage };
