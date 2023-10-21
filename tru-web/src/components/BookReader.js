import React, { useState, useEffect } from 'react';
import { Typography, Paper, IconButton, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const sampleBookData = {
  bookName: 'Sample Book',
  bookContent:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. A erat nam at lectus urna duis convallis. Sodales ut etiam sit amet nisl purus in mollis. Ultrices in iaculis nunc sed. Nunc aliquet bibendum enim facilisis gravida neque. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vitae semper quis lectus nulla at. Eget duis at tellus at urna. Ultrices sagittis orci a scelerisque purus semper eget duis. Vulputate mi sit amet mauris commodo quis. Nam aliquam sem et tortor consequat id. Viverra mauris in aliquam sem. Turpis egestas integer eget aliquet nibh praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. A erat nam at lectus urna duis convallis. Sodales ut etiam sit amet nisl purus in mollis. Ultrices in iaculis nunc sed. Nunc aliquet bibendum enim facilisis gravida neque. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vitae semper quis lectus nulla at. Eget duis at tellus at urna. Ultrices sagittis orci a scelerisque purus semper eget duis. Vulputate mi sit amet mauris commodo quis. Nam aliquam sem et tortor consequat id. Viverra mauris in aliquam sem. Turpis egestas integer eget aliquet nibh praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. A erat nam at lectus urna duis convallis. Sodales ut etiam sit amet nisl purus in mollis. Ultrices in iaculis nunc sed. Nunc aliquet bibendum enim facilisis gravida neque. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vitae semper quis lectus nulla at. Eget duis at tellus at urna. Ultrices sagittis orci a scelerisque purus semper eget duis. Vulputate mi sit amet mauris commodo quis. Nam aliquam sem et tortor consequat id. Viverra mauris in aliquam sem. Turpis egestas integer eget aliquet nibh praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. A erat nam at lectus urna duis convallis. Sodales ut etiam sit amet nisl purus in mollis. Ultrices in iaculis nunc sed. Nunc aliquet bibendum enim facilisis gravida neque. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vitae semper quis lectus nulla at. Eget duis at tellus at urna. Ultrices sagittis orci a scelerisque purus semper eget duis. Vulputate mi sit amet mauris commodo quis. Nam aliquam sem et tortor consequat id. Viverra mauris in aliquam sem. Turpis egestas integer eget aliquet nibh praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. A erat nam at lectus urna duis convallis. Sodales ut etiam sit amet nisl purus in mollis. Ultrices in iaculis nunc sed. Nunc aliquet bibendum enim facilisis gravida neque. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vitae semper quis lectus nulla at. Eget duis at tellus at urna. Ultrices sagittis orci a scelerisque purus semper eget duis. Vulputate mi sit amet mauris commodo quis. Nam aliquam sem et tortor consequat id. Viverra mauris in aliquam sem. Turpis egestas integer eget aliquet nibh praesent.'
};

const BookReader = () => {
  const [bookData, setBookData] = useState(sampleBookData);
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    // Organize the book's content into pages without cutting words
    const content = bookData.bookContent;
    const pageLength = 900;
    const words = content.split(' '); // Split text into words
    const pages = [];

    let currentPageText = '';
    for (const word of words) {
      if ((currentPageText + word).length > pageLength) {
        pages.push(currentPageText);
        currentPageText = '';
      }
      currentPageText += `${word} `;
    }
    if (currentPageText.trim() !== '') {
      pages.push(currentPageText);
    }

    setPages(pages);
  }, [bookData]);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: 20, width: '80%', height: '80vh' }}>
      <Grid container>
        {currentPage === 0 ? (
          <Grid item xs={12}>
            <Typography variant="h4" component="div" style={{ marginTop: '25%', fontFamily: 'Courier' }}>
              {bookData?.bookName}
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
      <div
        style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}
      >
        <IconButton style={{ color: '#C73C1E' }} onClick={prevPage} disabled={currentPage === 0}>
          <ArrowBackIcon />
        </IconButton>
        <IconButton style={{ color: '#C73C1E' }} onClick={nextPage} disabled={currentPage === pages.length - 1}>
          <ArrowForwardIcon />
        </IconButton>
      </div>
    </Paper>
  );
};

export default BookReader;
