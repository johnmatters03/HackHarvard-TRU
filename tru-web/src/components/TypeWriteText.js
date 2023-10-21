import React from 'react';
import { TypeAnimation } from 'react-type-animation'; 

const TypeWriteText = ({ message }) => {
//   const textStyle = {
//     fontFamily: 'Courier, monospace', // Set the font to Courier (typewriter font)
//     textAlign: 'center', // Center the text
//     fontSize: '3em', // Set the font size to 1.5em
//   };

   return (
      <div style={{ fontFamily: 'Courier, monospace' }}>
      <TypeAnimation
         sequence={[
            message,
            1000,
            '',
         ]}
         speed={180}
         style={{ whiteSpace: 'pre-line' }}
         repeat={Infinity}
      />
      </div>
   );
};

export default TypeWriteText;
