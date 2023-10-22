import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ContentEdit = ({ id }) => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [editedContent, setEditedContent] = useState('');
  setContent(
    "The Early Years \n Anna Eleanor Roosevelt was born in New York City on October 11, 1884. \n Her father was Elliott Roosevelt, President Theodore Roosevelt's younger brother and her mother was Anna Hall, a member of the distinguished Livingston family. Both her parents died when she was a child, her mother in 1892, and her father in 1894. After her mother's death, Eleanor went to live with her grandmother, Mrs. Valentine G. Hall, in Tivoli, New York. She was educated by private tutors until the age of 15, when she was sent to Allenswood, a school for girls in England. The headmistress, Mademoiselle Marie Souvestre, took a special interest in young Eleanor and had a great influence on her education and thinking. At age 18, Eleanor returned to New York with a fresh sense of confidence in herself and her abilities. She became involved in social service work, joined the Junior League and taught at the Rivington Street \n Settlement House. \nOn March 17, 1905, she married her fifth cousin, Franklin Delano Roosevelt, and between 1906 and 1916, they became the parents of six children: Anna Eleanor (1906-75), James (1907-91), Franklin Delano, Jr. (1909), Elliott (1910-90), Franklin, Jr. (1914-88) and John (1916-81). During this period, her public activities gave way to family concerns and her husband's political career. However, with American entry in World War I, she became active in the American Red Cross and in volunteer work in Navy hospitals. In 1921, Franklin Roosevelt was stricken with polio causing Mrs. Roosevelt to become increasingly active in politics in part to help him maintain his interests but also to assert her own personality and goals. She participated in the League of Women Voters, joined the Women's Trade Union League, and worked for the Women's Division of the New York State Democratic Committee. She helped to establish Val-Kill Industries, a non-profit furniture factory in Hyde Park, New York, and taught at the Todhunter School, a private girls' school in New York City. \nThe First Lady \n Upon moving to the White House in 1933, Eleanor Roosevelt informed the nation that they should not expect their new first lady to be a symbol of elegance, but rather 'plain, ordinary Mrs. Roosevelt.' Despite this disclaimer, she showed herself to be an extraordinary First Lady. \n In 1933, Mrs. Roosevelt became the first, First Lady to hold her own press conference. In an attempt to afford equal time to women--who were traditionally barred from presidential press conferences--she allowed only female reporters to attend. In 1939, the Daughters of the American Revolution (DAR) refused to allow Marion Anderson, an African American singer, to perform in their auditorium. In protest, Mrs. Roosevelt resigned her membership in the DAR. \n Throughout Franklin D. Roosevelt's presidency, Eleanor traveled extensively around the nation, visiting relief projects, surveying working and living conditions, and then reporting her observations to the President. She was called 'the President's eyes, ears and legs' and provided objective information to her husband. When the Japanese attacked Pearl Harbor and the United States entered WWII, Mrs. Roosevelt made certain that the President did not abandon the goals he had put forth in the New Deal. She also exercised her own political and social influence; \n She became an advocate of the rights and needs of the poor, of minorities, and of the disadvantaged. The public was drawn in by the First Lady's exploits and adventures which she recounted in her daily syndicated column, 'My Day'. She began writing the column in 1935 and continued until her death in 1962. \n During the war, she served as Assistant Director of Civilian Defense from 1941 to 1942 and she visited England and the South Pacific to foster good will among the Allies and to boost the morale of U.S. servicemen overseas. \n The 'First Lady of the World'  \n After President Roosevelt's death on April 12, 1945, Mrs. Roosevelt continued in her public life. President Truman appointed her to the United Nations General Assembly. She served as chair of the Human Rights Commission and worked tirelessly to draft the Universal Declaration of Human Rights which was adopted by the General Assembly on December 10, 1948. \n In 1953, Mrs. Roosevelt dutifully resigned from the United States Delegation to the United Nations, so that incoming Republican President Dwight Eisenhower could fill the position with an appointee of his own choosing. She then volunteered her services to the American Association for the U. N., and was an American representative to the World Federation of the U. N. Associations. She later became the chair of the Associations' Board of Directors. She was reappointed to the United States Delegation to the U. N. by President Kennedy in 1961. Later he appointed her to the National Advisory Committee of the Peace Corps and chair of the President's Commission on the Status of Women. Mrs. Roosevelt became a recognized leader in promoting humanitarian efforts. \n She was in great demand as a speaker and lecturer. Like her husband had done with radio, she also made effective use of the emerging technology of television. She was a prolific writer with many articles and books to her credit including a multi-volume autobiography. \n In her later years, Mrs. Roosevelt lived at Val-Kill in Hyde Park, New York. She also maintained an apartment in New York City. She died on November 7, 1962, and is buried alongside her husband in the Rose Garden of their estate at Hyde Park, now a national historic site."
  );
  setEditedContent(
    "The Early Years \n Anna Eleanor Roosevelt was born in New York City on October 11, 1884. \n Her father was Elliott Roosevelt, President Theodore Roosevelt's younger brother and her mother was Anna Hall, a member of the distinguished Livingston family. Both her parents died when she was a child, her mother in 1892, and her father in 1894. After her mother's death, Eleanor went to live with her grandmother, Mrs. Valentine G. Hall, in Tivoli, New York. She was educated by private tutors until the age of 15, when she was sent to Allenswood, a school for girls in England. The headmistress, Mademoiselle Marie Souvestre, took a special interest in young Eleanor and had a great influence on her education and thinking. At age 18, Eleanor returned to New York with a fresh sense of confidence in herself and her abilities. She became involved in social service work, joined the Junior League and taught at the Rivington Street \n Settlement House. \nOn March 17, 1905, she married her fifth cousin, Franklin Delano Roosevelt, and between 1906 and 1916, they became the parents of six children: Anna Eleanor (1906-75), James (1907-91), Franklin Delano, Jr. (1909), Elliott (1910-90), Franklin, Jr. (1914-88) and John (1916-81). During this period, her public activities gave way to family concerns and her husband's political career. However, with American entry in World War I, she became active in the American Red Cross and in volunteer work in Navy hospitals. In 1921, Franklin Roosevelt was stricken with polio causing Mrs. Roosevelt to become increasingly active in politics in part to help him maintain his interests but also to assert her own personality and goals. She participated in the League of Women Voters, joined the Women's Trade Union League, and worked for the Women's Division of the New York State Democratic Committee. She helped to establish Val-Kill Industries, a non-profit furniture factory in Hyde Park, New York, and taught at the Todhunter School, a private girls' school in New York City. \nThe First Lady \n Upon moving to the White House in 1933, Eleanor Roosevelt informed the nation that they should not expect their new first lady to be a symbol of elegance, but rather 'plain, ordinary Mrs. Roosevelt.' Despite this disclaimer, she showed herself to be an extraordinary First Lady. \n In 1933, Mrs. Roosevelt became the first, First Lady to hold her own press conference. In an attempt to afford equal time to women--who were traditionally barred from presidential press conferences--she allowed only female reporters to attend. In 1939, the Daughters of the American Revolution (DAR) refused to allow Marion Anderson, an African American singer, to perform in their auditorium. In protest, Mrs. Roosevelt resigned her membership in the DAR. \n Throughout Franklin D. Roosevelt's presidency, Eleanor traveled extensively around the nation, visiting relief projects, surveying working and living conditions, and then reporting her observations to the President. She was called 'the President's eyes, ears and legs' and provided objective information to her husband. When the Japanese attacked Pearl Harbor and the United States entered WWII, Mrs. Roosevelt made certain that the President did not abandon the goals he had put forth in the New Deal. She also exercised her own political and social influence; \n She became an advocate of the rights and needs of the poor, of minorities, and of the disadvantaged. The public was drawn in by the First Lady's exploits and adventures which she recounted in her daily syndicated column, 'My Day'. She began writing the column in 1935 and continued until her death in 1962. \n During the war, she served as Assistant Director of Civilian Defense from 1941 to 1942 and she visited England and the South Pacific to foster good will among the Allies and to boost the morale of U.S. servicemen overseas. \n The 'First Lady of the World'  \n After President Roosevelt's death on April 12, 1945, Mrs. Roosevelt continued in her public life. President Truman appointed her to the United Nations General Assembly. She served as chair of the Human Rights Commission and worked tirelessly to draft the Universal Declaration of Human Rights which was adopted by the General Assembly on December 10, 1948. \n In 1953, Mrs. Roosevelt dutifully resigned from the United States Delegation to the United Nations, so that incoming Republican President Dwight Eisenhower could fill the position with an appointee of his own choosing. She then volunteered her services to the American Association for the U. N., and was an American representative to the World Federation of the U. N. Associations. She later became the chair of the Associations' Board of Directors. She was reappointed to the United States Delegation to the U. N. by President Kennedy in 1961. Later he appointed her to the National Advisory Committee of the Peace Corps and chair of the President's Commission on the Status of Women. Mrs. Roosevelt became a recognized leader in promoting humanitarian efforts. \n She was in great demand as a speaker and lecturer. Like her husband had done with radio, she also made effective use of the emerging technology of television. She was a prolific writer with many articles and books to her credit including a multi-volume autobiography. \n In her later years, Mrs. Roosevelt lived at Val-Kill in Hyde Park, New York. She also maintained an apartment in New York City. She died on November 7, 1962, and is buried alongside her husband in the Rose Garden of their estate at Hyde Park, now a national historic site."
  );

  const buttonStyle = {
    fontFamily: 'Courier',
    backgroundColor: '#C73C1E',
    color: '#ffffff',
    margin: '10px'
  };

  // useEffect(() => {
  //   // Fetch the initial content from the backend when the component mounts
  //   fetch(`/get_bio?insertedId=${id}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setContent(data.biography);
  //       setEditedContent(data.biography);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //       // Handle error as needed
  //     });
  // }, []);

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
