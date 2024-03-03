import React from 'react';
import Tabs from '../components/Tabs';

const Certification = () => {
  const backgroundStyles = {
    backgroundImage: 'url("https://news.uchicago.edu/sites/default/files/styles/explainer_hero/public/images/2022-10/sgr%20A%2A%20ESO%20and%20M.%20Kornmesser%20690.jpg?h=06d036b4&itok=Lr5t57tH")', // Replace with the URL of your image
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
