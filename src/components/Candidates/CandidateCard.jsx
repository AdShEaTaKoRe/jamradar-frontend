import React from "react";
import { Card } from "semantic-ui-react";

class CandidateCard extends React.Component {
  state = {
    toggle: false,
  };

  frontBackToggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  render() {
    const { candidate, handleInterested } = this.props;
    return (
      <Card onClick={this.frontBackToggle}>
        {
          <div key={candidate.id}>
            <h1>
              {candidate.first_name}, {candidate.age}
            </h1>
            <h2>{candidate.instruments.name}</h2>
            <h3>{candidate.hometown}</h3>
            <p>{candidate.bio}</p>

            <button onClick={() => {handleInterested()}}>
              Not Interested
            </button>

            <button
              onClick={() => {
                handleInterested({liked_user: candidate.id});
              }}
            >
              Interested
            </button>
          </div>
        }
      </Card>
    );
  }

  // <div key={candidate.id}>
  //       <h1>
  //         {candidate.first_name}, {candidate.age}
  //       </h1>
  //       <h2>{candidate.instruments.name}</h2>
  //       <h3>{candidate.hometown}</h3>
  //       <p>{candidate.bio}</p>

  //       <button onClick={increaseCandidatesIndex} >Not Interested</button>

  //       <button onClick={()=>{handleInterested(candidate.id)}}>Interested</button>
  //     </div>
}

export default CandidateCard;
