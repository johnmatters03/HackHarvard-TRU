import React from 'react';
import Text from '../../../components/Text';
import AudioUpload from '../../../components/AudioUpload';
const Content = () => {
  return (
    <div className="container">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Text text="Content" fontSize="1em" textColor="#C73C1E" />
        <div className="form-container" style={{ margin: '50% 0' }}>
          <AudioUpload />
        </div>
      </div>
    </div>
  );
};

export default Content;
