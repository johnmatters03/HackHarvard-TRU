import React from 'react';
import Text from '../../../components/Text'; 
import "./index.css"


const Context = () => {

  return (
    <div className="container">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
       <Text text="Context" fontSize="1em" textColor='#C73C1E' />
      </div> 
   </div>
  );
};


export default Context;
