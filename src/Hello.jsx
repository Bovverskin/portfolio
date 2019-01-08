import React from 'react';
import LazyLoad from 'react-lazy-load';

const Hello = () => (
  <div class="footer-content">

    <div className="filler" />
    <LazyLoad height={762} offsetVertical={300}>
      <img src='https://arkyon.in/wp-content/uploads/2018/07/68971260-programmer-wallpapers-1024x577.png' />
    </LazyLoad>
   
  </div>
);

export default Hello