import React from "react";
import { Icon, Button, Card, Image } from "semantic-ui-react";

class CandidateCard extends React.Component {
  state = {
    toggle: false,
    imageUrl: "",
  };

  frontBackToggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  render() {
    const { candidate, handleInterested } = this.props;
    return (
      <Card className="candidates" key={candidate.id} color="black" centered>
        {candidate.image ? (
          <Image
            fluid
            alt="oh no!"
            src={`https://res.cloudinary.com/jamradar/image/upload/v1592385784/${candidate.image}.jpg`}
            onClick={this.frontBackToggle}
          />
        ) : (
          <Image
            fluid
            alt="oh no!"
            src={`https://res.cloudinary.com/jamradar/image/upload/v1592423891/no_profile_image_vu5zfp.jpg`}
            onClick={this.frontBackToggle}
          />
        )}
        <Card.Content>
          <Card.Header>
            {candidate.first_name}, {candidate.band_name}
          </Card.Header>
          {!this.state.toggle ? (
            <Card.Meta>
              About:<br></br>
              {candidate.bio}
            </Card.Meta>
          ) : (
            <Card.Meta>
              <a
                className="ui instagram circular icon button"
                href={candidate.instagram}
              >
                <i aria-hidden="true" className="instagram icon"></i>
              </a>
              <a
                className="ui facebook circular icon button"
                href={candidate.facebook}
              >
                <i aria-hidden="true" className="facebook icon"></i>
              </a>
              <a
                className="ui youtube circular icon button"
                href={candidate.youtube}
              >
                <i aria-hidden="true" className="youtube icon"></i>
              </a>
            </Card.Meta>
          )}
        </Card.Content>
        <Card.Content extra>
          <Icon className="heartbeat" />
          {candidate.age}

          <Icon className="music" />
          {candidate.instruments.map((instrument) => instrument.name + " ")}
          <Icon className="home" />
          {candidate.hometown}
        </Card.Content>
        <Button.Group>
          <Button
            style={{ backgroundColor: "red" }}
            onClick={() => {
              handleInterested();
            }}
          >
            <Icon name="thumbs down outline" />
            Not today
          </Button>
          <Button.Or />
          <Button
            positive
            onClick={() => {
              handleInterested({ liked_user: candidate.id });
            }}
          >
            <Icon name="music" />
            Let's Jam
          </Button>
        </Button.Group>
      </Card>
    );
  }
}

export default CandidateCard;
