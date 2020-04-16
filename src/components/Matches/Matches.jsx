import React from "react";
import API from "../../API.js";
import { Icon, Button } from "semantic-ui-react";

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
    API.deleteMatch(matchId, localStorage.token)
      .then(() =>
        this.setState({
          matches: matches.filter((match) => match.id !== matchId),
        })
      )
      .then(() => console.log(this.state.matches));
  };


  render() {
    const { matches } = this.state;
    return (
      
      <div className="ui two column grid">
        <img className="ui fluid image"
          src="https://res.cloudinary.com/jamradar/image/upload/v1586204803/Logo.jpg"
          alt=""
          
          
        />
        {matches.length > 0 ? <h3> Here are your Matches!</h3> : ""}
        {matches.length > 0 ? (
          matches.map((match) => (
              <div className="column">
                <div
                  className="ui fluid card "
                  style={{ maxWidth: "300px" }}
                  key={match.id}
                >
                  <div className="image" onClick={this.frontBackToggle}>
                    <img alt="oh no!" src={`./${match.email}.jpg`} style={{height: "200px"}}/>
                  </div>
                  <div className="content">
                    <div className="header">
                      {match.first_name}, {match.band_name}
                    </div><br></br>

                    {!this.state.toggle ? (
                      <div className="meta text-wrap">
                        <small>
                          About:<br></br>
                          {match.bio}
                        </small>
                      </div>
                    ) : (
                      <div className="meta text-wrap">
                        <a className="ui instagram circular icon button" href={match.instagram} >
                          <i aria-hidden="true" className="instagram icon"></i>
                        </a>
                        <a className="ui facebook circular icon button" href={match.facebook} >
                          <i aria-hidden="true" className="facebook icon"></i>
                        </a>
                        <a className="ui youtube circular icon button" href={match.youtube}>
                          <i aria-hidden="true" className="youtube icon"></i>
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="extra content">
                    <span>
                      <i className="icon heartbeat" />
                      {match.age}
                    </span>

                    <span>
                      <i className="icon music" />
                      {match.instruments.map(
                        (instrument) => instrument.name + " "
                      )}
                      <br></br>
                    </span>
                    <span>
                      <i className="icon home" />
                      {match.hometown}
                    </span>
                    <span>
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
                        <Button
                          size="mini"
                          positive
                          href={`mailto:${match.email}`}
                        >
                          <Icon name="mail" />
                        </Button>
                      </Button.Group>
                    </span>
                  </div>
                </div>
                <br/>
              </div>
              
            
          ))
        ) : (
          <div className="ui icon message">
            <i aria-hidden="true" className="circle notched loading icon"></i>
            <div className="content">
              <div className="header">Sorry,</div>
              it looks like you don't have any matches yet
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Matches;
