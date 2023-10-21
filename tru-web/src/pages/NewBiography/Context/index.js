import React from 'react';
import Text from '../../../components/Text'; 
import "./index.css"
import BiographyForm from '../../../components/BiographyForm';

const Context = () => {
  return (
    <div className="container">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Text text="Context" fontSize="1em" textColor='#C73C1E' />
        <div className="form-container" style={{ margin: '50px 0' }}>
          <BiographyForm />
        </div>
      </div>
    </div>
  );
};

export default Context;
