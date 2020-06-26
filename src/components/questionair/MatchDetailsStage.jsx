import React from "react";
import { Form, Input, Button, Icon } from "semantic-ui-react";

const MatchDetailsStage = ({
  previousStage,
  handleChange,
  userPreferences,
  handleSubmit,
}) => (
  <Form>
    <h3 id="headerim"> User Details </h3>
    <Form.Field>
      <label className="labels" htmlFor="form-input-control-min-age">
        Min age (optional)
      </label>
      <Input
        type="text"
        name="min_age"
        placeholder="Min Age"
        id="form-input-control-min-age"
        defaultValue={userPreferences.min_age}
        onChange={handleChange}
      />
    </Form.Field>
    <Form.Field>
      <label className="labels" htmlFor="form-input-control-max-age">
        Max age (optional)
      </label>
      <Input
        type="text"
        name="max_age"
        placeholder="Max Age"
        id="form-input-control-max-age"
        defaultValue={userPreferences.max_age}
        onChange={handleChange}
      />
    </Form.Field>
    <Form.Field>
      <label className="labels" htmlFor="form-input-control-hometown">
        Hometown
      </label>
      <Input
        type="text"
        name="hometown"
        placeholder="Hometown"
        id="form-input-control-hometown"
        defaultValue={userPreferences.hometown}
        onChange={handleChange}
      />
    </Form.Field>
    <Form.Field>
      <Button onClick={previousStage} color="instagram" floated="left">
        <Icon name="angle double left" />
        Back
      </Button>
      <Button onClick={handleSubmit} color="green" floated="right">
        {/* <Icon name="thumbs up" /> */}
        Submit
      </Button>
    </Form.Field>
  </Form>
);

export { MatchDetailsStage };
