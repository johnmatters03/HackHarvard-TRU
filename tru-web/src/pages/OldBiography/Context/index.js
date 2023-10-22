import React, { useState } from 'react';
import Text from '../../../components/Text';
import './index.css';
import BiographyForm from '../../../components/BiographyForm';
import OldContent from '../OldContent';

const Context = () => {
  const [showContent, setShowContent] = useState(false);
  const handleNextClick = () => {
    setShowContent(true);
  };

  const initialValues = {
    subject: 'John Doe',
    relationship: 'Friend',
    birthYear: '1980',
    authorName: 'Author Name',
    pronouns: 'he/him',
    briefSummary: 'This is a brief summary.'
  };

  return (
    <div>
      {showContent ? (
        <OldContent name={initialValues.subject}/>
      ) : (
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Text text="Initial Context" fontSize="1em" textColor="#C73C1E" />
            <div className="form-container" style={{ margin: '25px 0' }}>
              <BiographyForm initialValues={initialValues} onButtonClick={handleNextClick} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Context;
