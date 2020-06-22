import React from "react";
import { Icon, Button, Grid } from "semantic-ui-react";

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
      <div className="ui column">
        <div className="ui fluid card" key={candidate.id}>
          <div className="ui fluid image">
            {candidate.image ? (
              <img
                alt="oh no!"
                src={`https://res.cloudinary.com/jamradar/image/upload/v1592385784/${candidate.image}.jpg`}
                onClick={this.frontBackToggle}
              />
            ) : (
              <img
                alt="oh no!"
                src={`https://res.cloudinary.com/jamradar/image/upload/v1592423891/no_profile_image_vu5zfp.jpg`}
                onClick={this.frontBackToggle}
              />
            )}
          </div>
          <div className="content">
            <div className="header">
              {candidate.first_name}, {candidate.band_name}
            </div>
            <br></br>
            {!this.state.toggle ? (
              <div className="meta text-wrap">
                  About:<br></br>
                  {candidate.bio}
              </div>
            ) : (
              <div className="meta text-wrap">
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
              </div>
            )}
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat" />
              {candidate.age}
            </span>

            <span>
              <i className="icon music" />
              {candidate.instruments.map((instrument) => instrument.name + " ")}
            </span>
            <span>
              <i className="icon home" />
              {candidate.hometown}
            </span>
            <span>
              <Grid>
                <Grid.Column textAlign="center">
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
                </Grid.Column>
              </Grid>
            </span>
          </div>
        </div>
      </div>
    );
  }

  // <div key={candidate.id}>
  //       <h3>
  //         {candidate.first_name}, {candidate.age}
  //       </h3>
  //       <h2>{candidate.instruments.name}</h2>
  //       <h3>{candidate.hometown}</h3>
  //       <p>{candidate.bio}</p>

  //       <button onClick={increaseCandidatesIndex} >Not Interested</button>

  //       <button onClick={()=>{handleInterested(candidate.id)}}>Interested</button>
  //     </div>
}

export default CandidateCard;
