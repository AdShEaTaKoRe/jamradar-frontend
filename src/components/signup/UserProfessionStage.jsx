import React from "react";
import API from "../../API.js";
import { Checkbox, Icon, Form, Button, Card } from "semantic-ui-react";

const UserProfessionStage = ({
  nextStage,
  previousStage,
  selectInstrument,
  instruments,
}) => (
  <Form>
    <Form.Field>
  <Card.Group itemsPerRow={1} >
    <h3 id="headerim"> Please choose your instruments</h3>
      {API.getInstruments().map((instrument) => (
        <Card key={instrument.id}>  
          <Checkbox
            toggle={true}
            type="checkbox"
            defaultValue={instrument.name}
            checked={instruments.includes(instrument.id)}
            onChange={() => selectInstrument("instruments", instrument.id)}
          label={instrument.name}/>
          </Card>
      ))}
      </Card.Group>
      </Form.Field>
      
    <Button onClick={previousStage} color="instagram"
      floated="left">
<Icon name="angle double left" />
Back
    </Button>
    <Button
      onClick={nextStage}
      color="instagram"
      floated="right"
    >
      Next
      <Icon name="angle double right" />
    </Button>
    </Form>
);

export { UserProfessionStage };
