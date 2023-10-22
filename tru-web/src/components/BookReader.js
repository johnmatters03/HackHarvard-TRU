import React, { useState, useEffect } from 'react';
import { Typography, Paper, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BookReader = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([]);
  const [content, setContent] = useState(''); // Initialize content with an empty string
  const bookName = 'Sample book';
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    // Fetch content from your API backend
    fetch('/api/getContent') // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        const fetchedContent = data.content; // Adjust this based on your API response structure
        setContent(fetchedContent);
        setLoading(false); // Set loading to false once content is available
      })
      .catch((error) => {
        console.error('Error fetching content:', error);
        setContent('Hello! My name is');
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  useEffect(() => {
    const pageLength = 900;
    const words = content.split(' ');
    const pages = [];

    let currentPageText = '';
    for (const word of words) {
      if ((currentPageText + word + ' ').length > pageLength) {
        pages.push(currentPageText);
        currentPageText = '';
      }
      currentPageText += word + ' ';
    }
    if (currentPageText.trim() !== '') {
      pages.push(currentPageText);
    }

    setPages(pages);
    //  console.log(pages);
  }, [content]);

  const nextPage = () => {
    //  console.log('next');
    //  console.log(pages);
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
      // console.log(currentPage);
    }
  };

  const prevPage = () => {
    //  console.log('previous');
    //  console.log(pages);
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      // console.log(currentPage);
    }
  };

  return (
    <Paper
      elevation={3}
      style={{ padding: '5%', height: '60vh', width: '80%', border: '5px solid #C73C1E', position: 'relative' }}
      tabIndex="0" // Add tabIndex to make the Paper element focusable
    >
      {loading ? ( // Conditional rendering based on the loading state
        <Typography variant="h6" component="div" style={{ marginTop: '25%', fontFamily: 'Courier' }}>
          Loading content...
        </Typography>
      ) : (
        <>
          <Grid container style={{ height: '100%' }}>
            {currentPage === 0 ? (
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  component="div"
                  style={{ textAlign: 'center', marginTop: '15%', fontFamily: 'Courier' }}
                >
                  {bookName}
                </Typography>
              </Grid>
            ) : null}
            {currentPage === 0 ? null : (
              <>
                <Grid item xs={12} sm={6} style={{ borderRight: '1px solid #ccc' }}>
                  <Typography
                    variant="body1"
                    style={{ marginTop: 20, fontFamily: 'Courier', textAlign: 'left', marginLeft: 20, marginRight: 20 }}
                  >
                    {pages[currentPage - 1]}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="body1"
                    style={{ marginTop: 20, fontFamily: 'Courier', textAlign: 'left', marginLeft: 20, marginRight: 20 }}
                  >
                    {pages[currentPage]}
                  </Typography>
                </Grid>
              </>
            )}
          </Grid>
        </>
      )}
      <div
        style={{
          position: 'absolute',
          bottom: '10px', // Place the arrows 10px from the bottom
          left: 0, // Adjust this to control horizontal positioning
          right: 0, // Adjust this to control horizontal positioning
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 20px' // Add padding to space out the arrows
        }}
      >
        <ArrowBackIcon
          style={{ color: '#C73C1E', cursor: 'pointer' }}
          onClick={prevPage}
          disabled={currentPage === 0}
        />
        <ArrowForwardIcon
          style={{ color: '#C73C1E', cursor: 'pointer' }}
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
        />
      </div>
    </Paper>
  );
};

export default BookReader;
