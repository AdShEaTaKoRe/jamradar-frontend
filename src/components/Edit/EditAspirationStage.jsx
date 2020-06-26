import React from "react";
import { Form, Dropdown } from "semantic-ui-react";

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

const EditAspirationStage = ({ handleChange, userDetails }) => (
  <Form>
    <Form.Field>
      <label className="labels"> Your goal</label>
      <Dropdown
        onChange={handleChange}
        placeholder="My goal is"
        fluid={true}
        selection={true}
        options={goalOptions}
        defaultValue={userDetails.goal}
      />
    </Form.Field>
  </Form>
);

export { EditAspirationStage };
