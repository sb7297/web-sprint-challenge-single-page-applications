import React from 'react';
import { Link } from 'react-router-dom';

const Home = function () {
  return (
    <>
      <p>Homepage</p>
      <Link to="/pizza" id="order-pizza">Order a pizza here!</Link>
    </>
  );
}

export default Home;