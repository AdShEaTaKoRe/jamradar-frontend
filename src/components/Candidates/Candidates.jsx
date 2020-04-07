import React from "react";
import API from "../../API.js";

class Candidates extends React.Component {
  constructor() {
    super();
    this.state = {
      candidates: [],
    };
  }

  componentDidMount() {
    API.getCandidates(localStorage.token).then((candidates) =>
      this.setState({
        candidates,
      })
    );
  }

  renderCandidates = () => {
    
  };

  render() {

    return <>{this.state.candidates.map((candidate) => (
      <div key={candidate.id}>
      <h1>
        {candidate.first_name}, {candidate.age}
      </h1>
      <h2>{candidate.instruments.name}</h2>
      <h3>{candidate.hometown}</h3>
      <p>{candidate.bio}</p>
    </div>
  ))}</>
  }
}

export default Candidates;
