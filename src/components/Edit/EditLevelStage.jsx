import React from "react";
import { Form, Dropdown } from "semantic-ui-react";

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

const EditLevelStage = ({ handleChange, userDetails }) => (
  <Form>
    <Form.Field>
      <label className="labels">Your level</label>
      <Dropdown
        onChange={handleChange}
        placeholder="My level is"
        fluid={true}
        selection={true}
        options={levelOptions}
        defaultValue={userDetails.level}
      />
    </Form.Field>
  </Form>
);

export { EditLevelStage };
