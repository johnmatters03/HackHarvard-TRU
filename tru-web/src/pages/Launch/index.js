import React, { Suspense } from 'react';
import TypeWriteText from '../../components/TypeWriteText';
import './index.css'; // Import the CSS file
import Text from '../../components/Text'; // Import the Text component

const Launch = () => {
  const message = "A story \n To Remember U";

  return (
    <div className="container">
      <Suspense fallback={<LoadingIndicator />} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TypeWriteText message={message} />
        <div style={{ margin: '20px 0' }}> 
          <Text text="TRU." fontSize="1.5em" textColor="#C73C1E" />
        </div>
        <div style={{ margin: '35px 0' }}> 
          <Text text="Are you making a new biography or" fontSize="0.5em" textColor='000000' />
          <Text text="continuing an existing one?" fontSize="0.5em" textColor='000000' />
        </div>
        {/* </div> */}
        
        <div style={{ margin: '50px 0', display: 'flex', justifyContent: 'center' }}> 
          <Text text="Continue" fontSize="0.5em" textColor='#C73C1E' />
          <div style={{ width: '50px' }}></div> {/* Add horizontal spacing */}
          <Text text="New Biography" fontSize="0.5em" textColor='#C73C1E' />
        </div>
        </div>
      </div>
  );
};

const LoadingIndicator = () => {
  return <div>Loading...</div>;
};

export default Launch;
