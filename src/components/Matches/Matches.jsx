import React from "react";
import API from "../../API.js";

class Matches extends React.Component {
  constructor() {
    super();
    this.state = {
      matches: [],
    };
  }

  componentDidMount() {
    API.getMatches(localStorage.token)
    .then(matches => this.setState({
      matches
    }))
  }



  render() {
    const {matches} = this.state
    return (
      <>
        <h1> Here are your Matches!</h1>
        {(matches.length > 0) ? (matches.map(match => (
           <div key={match.id}>
           <h1>
             {match.first_name}, {match.age}
           </h1>
           <h2>{match.instruments.name}</h2>
           <h3>{match.hometown}</h3>
           <p>{match.bio}</p>
           <a href={`mailto:${match.email}`}>Contact me</a>
           </div>

        ))) : (<h2>Soz,it looks like you don't have any matches yet</h2>)}
      </>
    );
  }
}

export default Matches;
