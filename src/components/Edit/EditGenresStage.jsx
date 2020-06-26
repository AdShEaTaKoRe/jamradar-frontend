import React from "react";
import API from "../../API.js";
import { Checkbox, Form, Card } from "semantic-ui-react";

const EditGenresStage = ({ selectGenre, genres }) => (
  <Form>
    <Form.Field>
      <label className="labels"> Your genres</label>
      <Card.Group itemsPerRow={1}>
        {API.getGenres().map((genre) => (
          <Card key={genre.id}>
            <Checkbox
              toggle
              type="checkbox"
              defaultValue={genre.name}
              checked={genres.includes(genre.id)}
              onChange={() => selectGenre("genres", genre.id)}
              label={genre.name}
            />
          </Card>
        ))}
      </Card.Group>
    </Form.Field>
  </Form>
);

export { EditGenresStage };
