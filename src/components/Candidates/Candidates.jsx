import React from "react";
import API from "../../API.js";
import CandidateCard from "./CandidateCard.jsx";

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

  handleInterested = (candidateId) => {
    const { candidates } = this.state;
    if (candidateId) {
      API.likeUser(candidateId, localStorage.token)
        .then(candidates.shift())
        .then(
          this.setState({
            candidates,
          })
        );
    } else {
      candidates.shift();
      this.setState({
        candidates,
      });
    }
  };

  handleNotInterested = (candidateId) => {};

  getCandidatesToRender() {
    return this.state.candidates.slice(
      this.state.candidateIndex,
      this.state.candidateIndex + 1
    );
  }

  generateCandidatesCards = () => {
    return this.getCandidatesToRender().map((candidate) => (
      <CandidateCard
        candidate={candidate}
        key={candidate.id}
        handleInterested={this.handleInterested}
      />
    ));
  };

  render() {
    const { candidates } = this.state;

    return (
      <div className="column" style={{ maxWidth: "450px" }}>
                 <img
          src="https://res.cloudinary.com/jamradar/image/upload/v1586204803/Logo.jpg"
          alt=""
          className="ui fluid image"
        />
        {this.state.candidates.length > 0 ? (
          <CandidateCard
            candidate={candidates[0]}
            handleInterested={this.handleInterested}
          />
        ) : (
          <div className="ui icon message">
            <i aria-hidden="true" className="circle notched loading icon"></i>
            <div className="content">
              <div className="header">Sorry,</div>
              it looks like there's no one here at the moment.. please try again
              later or change your search.
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Candidates;
