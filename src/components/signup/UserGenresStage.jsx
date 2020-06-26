import React from "react";
import API from "../../API.js";
import { Checkbox, Button, Form, Card, Icon } from "semantic-ui-react";

const UserGenresStage = ({ nextStage, previousStage, selectGenre, genres }) => (
  <Form>
    <Form.Field>
      <Card.Group itemsPerRow={1}>
        <h3 id="headerim"> Please choose your genres</h3>
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
    <Button onClick={previousStage} color="instagram" floated="left">
      <Icon name="angle double left" />
      Back
    </Button>
    <Button onClick={nextStage} color="instagram" floated="right">
      Next
      <Icon name="angle double right" />
    </Button>
  </Form>
);

export { UserGenresStage };
