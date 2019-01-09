import React from 'react';
import LazyLoad from 'react-lazy-load';

const Hello = () => (
  <div class="background-attachment">

    <div className="filler" />
    <LazyLoad height={762} offsetVertical={300} margin={0} padding={0}>
      <img src='./src/images/programmerFound.png' />
    </LazyLoad>
   
  </div>
);

export default Hello