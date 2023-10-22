import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

const BiographyForm = ({ onButtonClick }) => {
  const [biographyData, setBiographyData] = useState({
    subject: '',
    relationship: '',
    birthYear: '',
    authorName: '',
    pronouns: '',
    briefSummary: ''
  });

  const buttonStyle = {
    fontFamily: 'Courier',
    backgroundColor: '#C73C1E',
    color: '#ffffff'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBiographyData({ ...biographyData, [name]: value });
  };

  const handleSubmit = (e) => {
    onButtonClick();
    //  e.preventDefault();
    // Handle the form submission, e.g., sending data to the backend
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography style={{ fontFamily: 'Courier', marginTop: '15px' }}>
              * Who is the subject of this biography?
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              name="subject"
              value={biographyData.subject}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Typography style={{ fontFamily: 'Courier', marginTop: '15px' }}>
              * What is their relationship to you?
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              name="relationship"
              value={biographyData.relationship}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Typography style={{ fontFamily: 'Courier', marginTop: '15px' }}>* What year were they born?</Typography>
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              name="birthYear"
              value={biographyData.birthYear}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Typography style={{ fontFamily: 'Courier', marginTop: '15px' }}>* What is the author's name?</Typography>
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              name="authorName"
              value={biographyData.authorName}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Typography style={{ fontFamily: 'Courier', marginTop: '15px' }}>* Pronouns of subject?</Typography>
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              name="pronouns"
              value={biographyData.pronouns}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Typography style={{ fontFamily: 'Courier', marginTop: '10%' }}>
              If possible, give us a brief summary of their background:
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              name="briefSummary"
              value={biographyData.briefSummary}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={6}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" style={buttonStyle}>
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default BiographyForm;
