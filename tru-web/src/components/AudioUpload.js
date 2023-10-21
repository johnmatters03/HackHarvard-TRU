import React, { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';

const AudioUpload = () => {
  const buttonStyle = {
    fontFamily: 'Courier',
    backgroundColor: '#C73C1E',
    color: '#ffffff',
    margin: '5%'
  };
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Ensure the selected file is of type 'audio/*' (e.g., audio/mpeg)
      if (file.type.startsWith('audio/')) {
        setSelectedFile(file);
      } else {
        alert('Please select an audio file.');
      }
    }
  };

  const processFile = () => {
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const fileData = event.target.result; // Contains the audio file data as ArrayBuffer
        console.log('Audio File Data (ArrayBuffer):', fileData);
        const audioBlob = new Blob([fileData], { type: selectedFile.type });
        console.log('Audio File Data (Blob):', audioBlob);
      };
      reader.readAsArrayBuffer(selectedFile);
    } else {
      alert('Please select an audio file first.');
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Typography style={{ fontFamily: 'Courier', marginTop: '10px' }}>Upload an audio file:</Typography>
        </Grid>
        <Grid item xs={3}>
          <input
            type="file"
            accept="audio/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            id="audio-file-upload"
          />
          <label htmlFor="audio-file-upload">
            <Button variant="contained" style={buttonStyle} component="span">
              Browse
            </Button>
          </label>
        </Grid>
      </Grid>
      {selectedFile && (
        <Typography style={{ fontFamily: 'Courier', marginTop: '10px', fontStyle: 'italic'}}>
          Uploaded File: {selectedFile.name}
        </Typography>
      )}
      <Button variant="contained" style={buttonStyle} onClick={processFile}>
        Process
      </Button>
    </div>
  );
};

export default AudioUpload;
