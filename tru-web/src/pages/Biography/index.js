import React from 'react';
import './index.css';
import BookReader from '../../components/BookReader';
import Text from '../../components/Text';
import ShareButton from '../../components/ShareButton';
import HomeButton from '../../components/HomeButton';

const Biography = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ position: 'absolute', top: 5, left: 10 }}>
        <HomeButton />
      </div>
      <div style={{ position: 'absolute', top: 5, right: 10 }}>
        <ShareButton />
      </div>
      <div style={{ margin: '20px 0' }}>
        <Text text="Hello" fontSize="2em" textColor="#C73C1E" />
      </div>
      <BookReader />
    </div>
  );
};

export default Biography;
