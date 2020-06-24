import React from "react";
// import logo from "../logo.svg";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="homepage">
    <div>
      <Link className="ui primary button" to="/sign-up">
        Sign Up
      </Link>
      <Link className="ui secondary button" to="/sign-in">
        Sign in
      </Link>
    </div>
    <br></br>

    <div className="bottom aligned content">
      <p>
        <i className="copyright outline icon" />
        All rights reserved to JamRadar Inc.
      </p>
    </div>
  </div>
);

export default Home;
