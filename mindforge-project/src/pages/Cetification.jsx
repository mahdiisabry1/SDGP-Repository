import React from 'react';
import Tabs from '../components/Tabs';

const Certification = () => {
  const backgroundStyles = {
    backgroundImage: 'url("https://static.tildacdn.com/tild6261-3364-4637-a533-383932646565/anima3.gif")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='py-40 text-white' style={backgroundStyles}>
      <Tabs />
    </div>
  );
}

export default Certification;
