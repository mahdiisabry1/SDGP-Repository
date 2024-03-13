import React from 'react';
import Tabs from '../components/Tabs';

const Certification = () => {
  const backgroundStyles = {
    backgroundImage: 'url("https://i.gifer.com/F9Jr.gif")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // Fix the background image to the viewport
  };
  return (
    <div className='py-40 text-white' style={backgroundStyles}>
      <Tabs />
    </div>
  );
}

export default Certification;
