import React from "react";
import logo from "../logo.svg";
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <img src={logo} alt="" width="600" />
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign in</Link>
  </div>
);

export default Home;
