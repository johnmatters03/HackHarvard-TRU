import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';

const ContentEdit = () => {
  const [content, setContent] = useState('');
  const [editedContent, setEditedContent] = useState('');

  useEffect(() => {
    // Fetch the initial content from the backend when the component mounts
    fetch('/api/biography')
      .then((response) => response.json())
      .then((data) => {
        setContent(data.content);
        setEditedContent(data.content);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setEditedContent(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. A erat nam at lectus urna duis convallis. Sodales ut etiam sit amet nisl purus in mollis. Ultrices in iaculis nunc sed. Nunc aliquet bibendum enim facilisis gravida neque. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vitae semper quis lectus nulla at. Eget duis at tellus at urna. Ultrices sagittis orci a scelerisque purus semper eget duis. Vulputate mi sit amet mauris commodo quis. Nam aliquam sem et tortor consequat id. Viverra mauris in aliquam sem. Turpis egestas integer eget aliquet nibh praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. A erat nam at lectus urna duis convallis. Sodales ut etiam sit amet nisl purus in mollis. Ultrices in iaculis nunc sed. Nunc aliquet bibendum enim facilisis gravida neque. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vitae semper quis lectus nulla at. Eget duis at tellus at urna. Ultrices sagittis orci a scelerisque purus semper eget duis. Vulputate mi sit amet mauris commodo quis. Nam aliquam sem et tortor consequat id. Viverra mauris in aliquam sem. Turpis egestas integer eget aliquet nibh praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. A erat nam at lectus urna duis convallis. Sodales ut etiam sit amet nisl purus in mollis. Ultrices in iaculis nunc sed. Nunc aliquet bibendum enim facilisis gravida neque. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vitae semper quis lectus nulla at. Eget duis at tellus at urna. Ultrices sagittis orci a scelerisque purus semper eget duis. Vulputate mi sit amet mauris commodo quis. Nam aliquam sem et tortor consequat id. Viverra mauris in aliquam sem. Turpis egestas integer eget aliquet nibh praesent.'
        ); // delete later
      });
  }, []);

  const handleContentChange = (event) => {
    setEditedContent(event.target.value);
  };

  const handleSubmit = () => {
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
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default ContentEdit;
