import React from "react";
import { Form, Input, Button, Icon, Dropdown, Image } from "semantic-ui-react";

const genderOptions = [
  { key: "m", value: "Male", text: "Male" },
  { key: "f", value: "Female", text: "Female" },
  { key: "n", value: "Non-Binary", text: "Non-Binary" },
];

const EditDetailsStage = ({
  handleChange,
  userDetails,
  handleGenderChange,
  beginUpload,
}) => (
  <Form>
    <Form.Field>
      {userDetails.image ? (
        <Image
          circular
          centered
          size="small"
          alt="oh no!"
          src={`https://res.cloudinary.com/jamradar/image/upload/v1592385784/${userDetails.image}.jpg`}
        />
      ) : (
        <Image
          size="small"
          alt="oh no!"
          src={`https://res.cloudinary.com/jamradar/image/upload/v1592423891/no_profile_image_vu5zfp.jpg`}
        />
      )}
    </Form.Field>
    <Form.Field>
      <Button color="instagram" onClick={beginUpload} fluid={true}>
        <Icon fitted={true} name="camera" /> Change Image
      </Button>
    </Form.Field>
    <Form.Field>
      <label className="labels" htmlFor="form-input-control-first-name">
        First name
      </label>
      <Input
        type="text"
        name="first_name"
        placeholder="First name"
        id="form-input-control-first-name"
        defaultValue={userDetails.first_name}
        onChange={handleChange}
      />
    </Form.Field>
    <Form.Field>
      <label className="labels" htmlFor="form-input-control-last-name">
        Last name
      </label>
      <Input
        type="text"
        name="last_name"
        placeholder="Last name"
        id="form-input-control-last-name"
        defaultValue={userDetails.last_name}
        onChange={handleChange}
      />
    </Form.Field>
    <Form.Field>
      <label className="labels" htmlFor="form-input-control-password">
        Password
      </label>
      <Input
        type="password"
        name="password"
        placeholder="Password"
        id="form-input-control-password"
        defaultValue={userDetails.password}
        onChange={handleChange}
      />
    </Form.Field>
    <Form.Field>
      <label className="labels" htmlFor="form-input-control-email">
        Email
      </label>
      <Input
        type="email"
        name="email"
        placeholder="joe@schmoe.com"
        id="form-input-control-email"
        defaultValue={userDetails.email}
        onChange={handleChange}
      />
    </Form.Field>
    <Form.Field>
      <label className="labels" htmlFor="form-input-control-dropdown">
        Gender
      </label>
      <Dropdown
        placeholder="Please choose one of the following"
        fluid={true}
        selection={true}
        defaultValue={userDetails.gender}
        onChange={handleGenderChange}
        options={genderOptions}
      />
    </Form.Field>
    <Form.Field>
      <label className="labels" htmlFor="form-input-control-age">
        Age
      </label>
      <Input
        type="text"
        name="age"
        placeholder="Age"
        id="form-input-control-age"
        defaultValue={userDetails.age}
        onChange={handleChange}
      />
    </Form.Field>
    <Form.Field>
      <label className="labels" htmlFor="form-textarea-control-hometown">
        Hometown
      </label>
      <Input
        placeholder="Hometown"
        name="hometown"
        id="form-textarea-control-hometown"
        defaultValue={userDetails.hometown}
        onChange={handleChange}
      />
    </Form.Field>
  </Form>
);

export { EditDetailsStage };
