import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <div>
      <h3>Welcome to MapReduce with AWS Lambda! </h3>
      <div>
        <Link to="/create"> Create a Map Reduce Job </Link>
      </div>
    </div>
  );
};

export default Home;
