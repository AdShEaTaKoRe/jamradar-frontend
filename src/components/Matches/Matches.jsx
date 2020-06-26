import React from "react";
import API from "../../API.js";
import {
  Icon,
  Button,
  Image,
  Card,
  Message,
  Container,
} from "semantic-ui-react";

class Matches extends React.Component {
  constructor() {
    super();
    this.state = {
      matches: [],
      toggle: false,
    };
  }

  frontBackToggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  componentDidMount() {
    API.getMatches(localStorage.token).then((matches) =>
      this.setState({
        matches,
      })
    );
  }

  handleUnmatch = (matchId) => {
    const { matches } = this.state;
    API.deleteMatch(matchId, localStorage.token).then(() =>
      this.setState({
        matches: matches.filter((match) => match.id !== matchId),
      })
    );
  };

  render() {
    const { matches } = this.state;
    return (
      <Container>
        {matches.length > 0 ? <h3> Here are your Matches!</h3> : ""}
        {matches.length > 0 ? (
          matches.map((match) => (
            <Card.Group stackable key={match.id}>
              <Card color="black" centered>
                {match.image ? (
                  <Image
                    fluid
                    onClick={this.frontBackToggle}
                    alt="oh no!"
                    src={`https://res.cloudinary.com/jamradar/image/upload/v1592385784/${match.image}.jpg`}
                  />
                ) : (
                  <Image
                    fluid
                    onClick={this.frontBackToggle}
                    alt="oh no!"
                    src={`https://res.cloudinary.com/jamradar/image/upload/v1592423891/no_profile_image_vu5zfp.jpg`}
                  />
                )}
                <Card.Content>
                  <Card.Header>
                    {match.first_name}, {match.band_name}
                  </Card.Header>
                  {!this.state.toggle ? (
                    <Card.Meta>
                      About:<br></br>
                      {match.bio}
                    </Card.Meta>
                  ) : (
                    <Card.Meta>
                      <a
                        className="ui instagram circular icon button"
                        href={match.instagram}
                      >
                        <i aria-hidden="true" className="instagram icon"></i>
                      </a>
                      <a
                        className="ui facebook circular icon button"
                        href={match.facebook}
                      >
                        <i aria-hidden="true" className="facebook icon"></i>
                      </a>
                      <a
                        className="ui youtube circular icon button"
                        href={match.youtube}
                      >
                        <i aria-hidden="true" className="youtube icon"></i>
                      </a>
                    </Card.Meta>
                  )}
                </Card.Content>
                <Card.Content extra>
                  <Icon className="heartbeat" />
                  {match.age}
                  <Icon className="music" />
                  {match.instruments.map((instrument) => instrument.name + " ")}
                  <Icon className="home" />
                  {match.hometown}
                </Card.Content>
                <Button.Group>
                  <Button
                    size="mini"
                    style={{ backgroundColor: "red" }}
                    onClick={() => {
                      this.handleUnmatch(match.id);
                    }}
                  >
                    <Icon name="thumbs down outline" />
                  </Button>
                  <Button.Or size="mini" />
                  <Button size="mini" positive href={`mailto:${match.email}`}>
                    <Icon name="mail" />
                  </Button>
                </Button.Group>
              </Card>
            </Card.Group>
          ))
        ) : (
          <Message icon>
            {/* <Icon aria-hidden="true" className='circle notched' loading/> */}
            <Message.Content>
              <Message.Header>Sorry,</Message.Header>
              it looks like you don't have any matches yet
            </Message.Content>
          </Message>
        )}
      </Container>
    );
  }
}

export default Matches;
