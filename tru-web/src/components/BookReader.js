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

  //   useEffect(() => {
  //     // Fetch content from your API backend
  //     fetch('/get_bio') // Replace with your actual API endpoint
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const fetchedContent = data.content; // Adjust this based on your API response structure
  //         setContent(fetchedContent);
  //         setLoading(false); // Set loading to false once content is available
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching content:', error);
  //         setLoading(false); // Set loading to false in case of an error
  //       });
  //   }, []);
  setContent(
    "The Early Years \n Anna Eleanor Roosevelt was born in New York City on October 11, 1884. \n Her father was Elliott Roosevelt, President Theodore Roosevelt's younger brother and her mother was Anna Hall, a member of the distinguished Livingston family. Both her parents died when she was a child, her mother in 1892, and her father in 1894. After her mother's death, Eleanor went to live with her grandmother, Mrs. Valentine G. Hall, in Tivoli, New York. She was educated by private tutors until the age of 15, when she was sent to Allenswood, a school for girls in England. The headmistress, Mademoiselle Marie Souvestre, took a special interest in young Eleanor and had a great influence on her education and thinking. At age 18, Eleanor returned to New York with a fresh sense of confidence in herself and her abilities. She became involved in social service work, joined the Junior League and taught at the Rivington Street \n Settlement House. \nOn March 17, 1905, she married her fifth cousin, Franklin Delano Roosevelt, and between 1906 and 1916, they became the parents of six children: Anna Eleanor (1906-75), James (1907-91), Franklin Delano, Jr. (1909), Elliott (1910-90), Franklin, Jr. (1914-88) and John (1916-81). During this period, her public activities gave way to family concerns and her husband's political career. However, with American entry in World War I, she became active in the American Red Cross and in volunteer work in Navy hospitals. In 1921, Franklin Roosevelt was stricken with polio causing Mrs. Roosevelt to become increasingly active in politics in part to help him maintain his interests but also to assert her own personality and goals. She participated in the League of Women Voters, joined the Women's Trade Union League, and worked for the Women's Division of the New York State Democratic Committee. She helped to establish Val-Kill Industries, a non-profit furniture factory in Hyde Park, New York, and taught at the Todhunter School, a private girls' school in New York City. \nThe First Lady \n Upon moving to the White House in 1933, Eleanor Roosevelt informed the nation that they should not expect their new first lady to be a symbol of elegance, but rather 'plain, ordinary Mrs. Roosevelt.' Despite this disclaimer, she showed herself to be an extraordinary First Lady. \n In 1933, Mrs. Roosevelt became the first, First Lady to hold her own press conference. In an attempt to afford equal time to women--who were traditionally barred from presidential press conferences--she allowed only female reporters to attend. In 1939, the Daughters of the American Revolution (DAR) refused to allow Marion Anderson, an African American singer, to perform in their auditorium. In protest, Mrs. Roosevelt resigned her membership in the DAR. \n Throughout Franklin D. Roosevelt's presidency, Eleanor traveled extensively around the nation, visiting relief projects, surveying working and living conditions, and then reporting her observations to the President. She was called 'the President's eyes, ears and legs' and provided objective information to her husband. When the Japanese attacked Pearl Harbor and the United States entered WWII, Mrs. Roosevelt made certain that the President did not abandon the goals he had put forth in the New Deal. She also exercised her own political and social influence; \n She became an advocate of the rights and needs of the poor, of minorities, and of the disadvantaged. The public was drawn in by the First Lady's exploits and adventures which she recounted in her daily syndicated column, 'My Day'. She began writing the column in 1935 and continued until her death in 1962. \n During the war, she served as Assistant Director of Civilian Defense from 1941 to 1942 and she visited England and the South Pacific to foster good will among the Allies and to boost the morale of U.S. servicemen overseas. \n The 'First Lady of the World'  \n After President Roosevelt's death on April 12, 1945, Mrs. Roosevelt continued in her public life. President Truman appointed her to the United Nations General Assembly. She served as chair of the Human Rights Commission and worked tirelessly to draft the Universal Declaration of Human Rights which was adopted by the General Assembly on December 10, 1948. \n In 1953, Mrs. Roosevelt dutifully resigned from the United States Delegation to the United Nations, so that incoming Republican President Dwight Eisenhower could fill the position with an appointee of his own choosing. She then volunteered her services to the American Association for the U. N., and was an American representative to the World Federation of the U. N. Associations. She later became the chair of the Associations' Board of Directors. She was reappointed to the United States Delegation to the U. N. by President Kennedy in 1961. Later he appointed her to the National Advisory Committee of the Peace Corps and chair of the President's Commission on the Status of Women. Mrs. Roosevelt became a recognized leader in promoting humanitarian efforts. \n She was in great demand as a speaker and lecturer. Like her husband had done with radio, she also made effective use of the emerging technology of television. She was a prolific writer with many articles and books to her credit including a multi-volume autobiography. \n In her later years, Mrs. Roosevelt lived at Val-Kill in Hyde Park, New York. She also maintained an apartment in New York City. She died on November 7, 1962, and is buried alongside her husband in the Rose Garden of their estate at Hyde Park, now a national historic site."
  );
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
