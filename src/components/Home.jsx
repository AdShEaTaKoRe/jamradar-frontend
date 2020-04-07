import React from "react";
// import logo from "../logo.svg";
import { Link } from 'react-router-dom'
import {Image} from 'cloudinary-react';

const Home = () => (
  <div>
    
    <img src="https://res.cloudinary.com/jamradar/image/upload/v1586204803/Logo.jpg" alt={<Image cloudName="jamradar" publicId="sample" width="300" crop="scale" />} width="600" />
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign in</Link>
  </div>
);

export default Home;
