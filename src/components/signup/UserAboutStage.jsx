import React from "react";
import { Form, Input, Button, Icon, TextArea } from "semantic-ui-react";

const UserAboutStage = ({
  previousStage,
  handleChange,
  userDetails,
  handleSubmit,
}) => (
  <Form>
    <Form.Field>
      <h3 id="headerim"> Final stage</h3>
      <label className="labels" htmlFor="form-input-control-band-name">
        Band name (Optional)
      </label>
      <Input
        type="text"
        name="band_name"
        placeholder="Band name"
        id="form-input-control-Band-name"
        defaultValue={userDetails.band_name}
        onChange={handleChange}
      />
    </Form.Field>
    <Form.Field>
      <label className="labels" htmlFor="form-input-control-facebook">
        Facebook (Optional)
      </label>
      <Input
        type="text"
        name="facebook"
        placeholder="Facebook"
        id="form-input-control-facebook"
        defaultValue={userDetails.facebook}
        onChange={handleChange}
      />
    </Form.Field>
    <Form.Field>
      <label className="labels" htmlFor="form-input-control-instagram">
        Instagram (optional)
      </label>
      <Input
        type="text"
        name="instagram"
        placeholder="Instagram"
        id="form-input-control-instagram"
        defaultValue={userDetails.instagram}
        onChange={handleChange}
      />
    </Form.Field>
    <Form.Field>
      <label className="labels" htmlFor="form-input-control-youtube">
        YouTube (Optional)
      </label>
      <Input
        type="text"
        name="youtube"
        placeholder="YouTube"
        id="form-input-control-youtube"
        defaultValue={userDetails.youtube}
        onChange={handleChange}
      />
    </Form.Field>
    <Form.Field>
      <label className="labels">About</label>
      <TextArea
        name="bio"
        id="bio"
        cols="30"
        rows="5"
        placeholder="Tell us about yourself..."
        defaultValue={userDetails.bio}
        onChange={handleChange}
      />
    </Form.Field>
    <Form.Field>
    <Button onClick={previousStage} color="instagram" floated="left">
      <Icon name="angle double left" />
      Back
    </Button>
    <Button onClick={handleSubmit} color="green" floated="right">
      Submit
      {/* <Icon name="thumbs up" /> */}
      </Button>
    </Form.Field>
  </Form>
);

export { UserAboutStage };
