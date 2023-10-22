import React from 'react';
import './index.css';
import BookReader from '../../components/BookReader';
import Text from '../../components/Text';

const Launch = () => {
  return (
    <div className="container">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ margin: '20px 0' }}>
          <Text text="Hello" fontSize="2em" textColor="#C73C1E" />
        </div>
        <BookReader />
      </div>
    </div>
  );
};

export default Launch;
