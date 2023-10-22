import React from 'react';
import TypeWriteText from '../../components/TypeWriteText';
import { Link } from 'react-router-dom';
import Text from '../../components/Text';
import ContentEdit from '../../components/ContentEdit';

const Launch = () => {
  return (
    <div className="container">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Text text="Edit Bibliography" fontSize="1em" textColor="#C73C1E" />
        <Text text="as generated through audio recordings" fontSize="0.5em" textColor="#000000" />
        <ContentEdit />
      </div>
    </div>
  );
};

export default Launch;
