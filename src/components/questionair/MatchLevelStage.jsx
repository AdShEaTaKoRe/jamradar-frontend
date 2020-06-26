import React from "react";
import { Form, Button, Icon, Dropdown } from "semantic-ui-react";

const matchLevelOptions = [
  {
    key: "Beginner",
    text: "Beginner",
    value: "Beginner",
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
  },
  {
    key: "Intermediate",
    text: "Intermediate",
    value: "Intermediate",
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
  },
  {
    key: "Seasoned Musician",
    text: "Seasoned Musician",
    value: "Seasoned Musician",
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
  },
  {
    key: "Professional Musician",
    text: "Professional Musician",
    value: "Professional Musician",
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
  },
  {
    key: "Just here to jam",
    text: "Just here to jam",
    value: "Just here to jam",
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
  },
];

const MatchLevelStage = ({
  nextStage,
  previousStage,
  handleChange,
  userPreferences,
}) => (
  <Form>
    <Form.Field>
      <h3 id="headerim"> At what level should the musicians be</h3>
      <Dropdown
        options={matchLevelOptions}
        defaultValue={userPreferences.match_level}
        onChange={handleChange}
        placeholder="Level"
        fluid={true}
        selection={true}
      />
    </Form.Field>
    <Form.Field>
    <Button onClick={previousStage} color="instagram" floated="left">
      <Icon name="angle double left" />
      Back
    </Button>
    <Button onClick={nextStage} color="instagram" floated="right">
      Next
      <Icon name="angle double right" />
    </Button>
    </Form.Field>
  </Form>
);

export { MatchLevelStage };
