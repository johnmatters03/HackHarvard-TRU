import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ContentEdit = ({ id }) => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [editedContent, setEditedContent] = useState('');
  const buttonStyle = {
    fontFamily: 'Courier',
    backgroundColor: '#C73C1E',
    color: '#ffffff',
    margin: '10px'
  };

  useEffect(() => {
    // Fetch the initial content from the backend when the component mounts
    fetch(`/get_bio?insertedId=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setContent(data.biography);
        setEditedContent(data.biography);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        // Handle error as needed
      });
  }, []);

  const handleContentChange = (event) => {
    setEditedContent(event.target.value);
  };

  const handleSubmit = () => {
    navigate('/biography');
    // Send a POST request to update the content on the backend
    fetch('/api/updateBiography', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: editedContent })
    })
      .then((response) => response.json())
      .then(() => {
        // Redirect to /biography with the updated content as a query parameter
        // history.push(`/?content=${encodeURIComponent(editedContent)}`);
        // history.push(`/?content=$hello`);
        navigate('/biography');
      })
      .catch((error) => {
        console.error('Error updating data:', error);
      });
  };

  return (
    <div style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
      <TextField
        multiline
        fullWidth
        variant="outlined"
        label="Biography"
        value={editedContent}
        onChange={handleContentChange}
        style={{ width: '100%', height: '100%' }}
      />

      <Button variant="contained" style={buttonStyle} onClick={handleSubmit}>
        Process
      </Button>
    </div>
  );
};

export default ContentEdit;
