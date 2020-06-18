import React from "react";
// import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";

const Home = () => (
  <div
  className="ui center aligned middle aligned grid"
 style={{height: "100vh"}}
>
  <div className="ui column" style={{ maxWidth: "450px" }}>
    <img
      className="ui fluid image"
      src="https://res.cloudinary.com/jamradar/image/upload/v1586204803/Logo.jpg"
      alt={
        <Image
          cloudName="jamradar"
          publicId="sample"
          width="300"
          crop="scale"
        />
      }
      width="600"
      
    />
    <div className="middle aligned content">
    <Link className="ui primary button" to="/sign-up">
      Sign Up
    </Link>
    <Link className="ui secondary button" to="/sign-in">
      Sign in
    </Link>
    </div>
    <br></br>
    
    <div className="bottom aligned content">
      <p>All copyrights reserved to JamRadar Inc.</p>
      <i className="copyright outline icon" />
    </div>
  </div>
  </div>
);

export default Home;
