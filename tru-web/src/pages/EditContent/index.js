import React from 'react';
import Text from '../../components/Text';
import ContentEdit from '../../components/ContentEdit';
import { useParams } from 'react-router-dom';

const Launch = () => {
  const { id } = useParams();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Text text="Edit Biography" fontSize="1em" textColor="#C73C1E" />
      <div className="form-container" style={{ margin: '15px 0' }}>
        <Text text="as generated through audio recordings" fontSize="0.5em" textColor="#000000" />
      </div>
      <ContentEdit id={id} />
    </div>
  );
};

export default Launch;
