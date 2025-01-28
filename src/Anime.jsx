import React, { useEffect } from 'react';

const Anime = () => {
  useEffect(() => {
    alert('Hi, welcome to the Anime page!');
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      <header className="header"></header>
    </div>
  );
};

export default Anime;
