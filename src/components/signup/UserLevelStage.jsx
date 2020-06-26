import React from "react";
import { Form, Button, Icon, Dropdown } from "semantic-ui-react";

const levelOptions = [
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
    key: "Im just here to jam",
    text: "Im just here to jam",
    value: "Im just here to jam",
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
  },
];

const UserLevelStage = ({
  nextStage,
  previousStage,
  handleChange,
  userDetails,
}) => (
  <Form>
    <Form.Field>
      <h3 id="headerim"> Please select your level</h3>
      <Dropdown
        onChange={handleChange}
        placeholder="My level is"
        fluid={true}
        selection={true}
        options={levelOptions}
        defaultValue={userDetails.level}
      />
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

export { UserLevelStage };
