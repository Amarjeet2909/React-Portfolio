import React from 'react';
import '../Style.css';

function Home() {
  return (
    <div className="homepage">
      <div className="background-image"></div>
      <div className="content">
        <h1>Welcome to Your Website</h1>
        <p>Discover amazing content and experiences.</p>
        <a href="#about">Learn More</a>
      </div>
    </div>
  );
}

export default Home;
