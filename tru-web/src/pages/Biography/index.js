import React from 'react';
import TypeWriteText from '../../components/TypeWriteText';
import './index.css';
import { Link } from 'react-router-dom';
import Text from '../../components/Text';
import BookReader from '../../components/BookReader';

const Launch = () => {
  const message = 'A story \n To Remember U';

  return (
    <div className="container">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <BookReader />
      </div>
    </div>
  );
};

export default Launch;
