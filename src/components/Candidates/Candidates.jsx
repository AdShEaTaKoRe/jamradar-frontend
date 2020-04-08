import React from "react";
import API from "../../API.js";

class Candidates extends React.Component {
  constructor() {
    super();
    this.state = {
      candidates: [],
      candidateIndex: 0,
      interested: [],
      message: ""
    };
  }

  componentDidMount() {
    API.getCandidates(localStorage.token).then((candidates) =>
      this.setState({
        candidates,
        message: "Soz, it looks like there are no one around at the moment please try again later or consider changing your settings"
      })
    );
  }

  handleInterested = (candidateId) => {

    let interestedArr = this.state.interested
    

    if (!this.state.interested.includes(candidateId)){
      interestedArr.push(candidateId)
      this.setState({
        interested: interestedArr}
    )}
  }

  handleNotInterested = (candidateId) => {

  }

  getCandidatesToRender() {
    return this.state.candidates.slice(this.state.candidateIndex, this.state.candidateIndex + 1)
  }


  increaseCandidatesIndex = () => {
    this.setState({
      candidateIndex: this.state.candidateIndex + 1
    })
  }


  render() {

    return <>
    {this.state.candidates.length!==0 ? (this.state.candidates.map((candidate) => (
      <div key={candidate.id}>
      <h1>
        {candidate.first_name}, {candidate.age}
      </h1>
      <h2>{candidate.instruments.name}</h2>
      <h3>{candidate.hometown}</h3>
      <p>{candidate.bio}</p>

      <button onClick={this.increaseCandidatesIndex} >Not Interested</button>

      <button onClick={()=>{this.handleInterested(candidate.id)}}>Interested</button>
    </div>
  ))) : <h1>{this.state.message}</h1>}</>
  }
}

export default Candidates;
