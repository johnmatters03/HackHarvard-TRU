import React, { Suspense } from 'react';
import Text from '../../../components/Text'; 


const NewBiography = () => {

  return (
    <div className="container">
      <Suspense fallback={<LoadingIndicator />} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
       <Text text="New Biography" fontSize="0.5em" textColor='#C73C1E' />
      </div> 
   </div>
  );
};

const LoadingIndicator = () => {
  return <div>Loading...</div>;
};

export default NewBiography;
