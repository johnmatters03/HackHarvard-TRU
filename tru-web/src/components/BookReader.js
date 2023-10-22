import React, { useState, useEffect } from 'react';
import { Typography, Paper, IconButton, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// const sampleBookData = {
//   bookName: 'Sample Book',
//   bookContent:
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. A erat nam at lectus urna duis convallis. Sodales ut etiam sit amet nisl purus in mollis. Ultrices in iaculis nunc sed. Nunc aliquet bibendum enim facilisis gravida neque. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vitae semper quis lectus nulla at. Eget duis at tellus at urna. Ultrices sagittis orci a scelerisque purus semper eget duis. Vulputate mi sit amet mauris commodo quis. Nam aliquam sem et tortor consequat id. Viverra mauris in aliquam sem. Turpis egestas integer eget aliquet nibh praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. A erat nam at lectus urna duis convallis. Sodales ut etiam sit amet nisl purus in mollis. Ultrices in iaculis nunc sed. Nunc aliquet bibendum enim facilisis gravida neque. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vitae semper quis lectus nulla at. Eget duis at tellus at urna. Ultrices sagittis orci a scelerisque purus semper eget duis. Vulputate mi sit amet mauris commodo quis. Nam aliquam sem et tortor consequat id. Viverra mauris in aliquam sem. Turpis egestas integer eget aliquet nibh praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. A erat nam at lectus urna duis convallis. Sodales ut etiam sit amet nisl purus in mollis. Ultrices in iaculis nunc sed. Nunc aliquet bibendum enim facilisis gravida neque. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vitae semper quis lectus nulla at. Eget duis at tellus at urna. Ultrices sagittis orci a scelerisque purus semper eget duis. Vulputate mi sit amet mauris commodo quis. Nam aliquam sem et tortor consequat id. Viverra mauris in aliquam sem. Turpis egestas integer eget aliquet nibh praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. A erat nam at lectus urna duis convallis. Sodales ut etiam sit amet nisl purus in mollis. Ultrices in iaculis nunc sed. Nunc aliquet bibendum enim facilisis gravida neque. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vitae semper quis lectus nulla at. Eget duis at tellus at urna. Ultrices sagittis orci a scelerisque purus semper eget duis. Vulputate mi sit amet mauris commodo quis. Nam aliquam sem et tortor consequat id. Viverra mauris in aliquam sem. Turpis egestas integer eget aliquet nibh praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. A erat nam at lectus urna duis convallis. Sodales ut etiam sit amet nisl purus in mollis. Ultrices in iaculis nunc sed. Nunc aliquet bibendum enim facilisis gravida neque. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vitae semper quis lectus nulla at. Eget duis at tellus at urna. Ultrices sagittis orci a scelerisque purus semper eget duis. Vulputate mi sit amet mauris commodo quis. Nam aliquam sem et tortor consequat id. Viverra mauris in aliquam sem. Turpis egestas integer eget aliquet nibh praesent.'
// };

const BookReader = () => {
  //   const [bookData, setBookData] = useState(sampleBookData);
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([]);
  const location = useLocation(); // Use useLocation to access query parameters
  const bookName = 'Sample book';

  // Extract the content parameter from the query string
  const contentParam = new URLSearchParams(location.search).get('content');
  const [content, setContent] = useState(contentParam || 'No content found');
  //   console.log(content);
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
  }, [content]);
  console.log(pages[0]);

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
    <Paper elevation={3} style={{ padding: '5%', height: '80vh', width: '80%', border: '5px solid #C73C1E' }}>
      <Grid container>
        {currentPage === 0 ? (
          <Grid item xs={12}>
            <Typography variant="h4" component="div" style={{ marginTop: '25%', fontFamily: 'Courier' }}>
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
