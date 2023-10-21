import React, { Suspense } from 'react';
import TypeWriteText from '../../components/TypeWriteText';
import './index.css'; // Import the CSS file

const Launch = () => {
  const message = "A story \n To remember u";

  return (
    <div className="container"> 
      <Suspense fallback={<LoadingIndicator />} />
      <TypeWriteText message={message} />
    </div>
  );
};

const LoadingIndicator = () => {
  return <div>Loading...</div>;
};

export default Launch;
