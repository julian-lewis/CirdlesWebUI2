import React from 'react';
import { Button } from 'components';

const HomePage = () => (
  <div>
    <h1>CIRDLES Web Services</h1>
    <Button
      text="Yeah I'm a button"
      handleClick={() => {
        console.log('aayyyyy');
      }}
    />
  </div>
);

export default HomePage;
