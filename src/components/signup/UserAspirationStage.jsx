import React from "react";
import { Form, Button, Icon, Dropdown } from "semantic-ui-react";

const goalOptions = [
  {
    key: "Improvement",
    text: "Improvement",
    value: "Improvement",
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
  },
  {
    key: "Forming a band",
    text: "Forming a band",
    value: "Forming a band",
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
  },
  {
    key: "Musician for my band",
    text: "Musician for my band",
    value: "Musician for my band",
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
  },
  {
    key: "Just here to jam",
    text: "Just here to jam",
    value: "Just here to jam",
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
  },
];

const UserAspirationStage = ({
  nextStage,
  previousStage,
  handleChange,
  userDetails,
}) => (
  <Form>
    <Form.Field>
      <h3 id="headerim"> What is your goal here</h3>
      <Dropdown
        onChange={handleChange}
        placeholder="My goal is"
        fluid={true}
        selection={true}
        options={goalOptions}
        defaultValue={userDetails.goal}
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

export { UserAspirationStage };
