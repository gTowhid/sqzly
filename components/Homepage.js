import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export default function Homepage() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const addToLocalStorage = (link) => {
    const list = JSON.parse(localStorage.getItem('shortLink')) || [];
    list.push(link);
    localStorage.setItem('shortLink', JSON.stringify(list));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setLongUrl(e.target.value);
  };

  const handleClick = () => {
    const shortLink = 'sqz.ly/' + longUrl;
    setShortUrl(shortLink);
    addToLocalStorage(shortLink);
    setLongUrl('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',

          minWidth: '75%',
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Enter complete URL to shorten..."
          sx={{ minWidth: '75%' }}
          onChange={(e) => handleChange(e)}
          value={longUrl}
        />

        <Button
          variant="outlined"
          sx={{ padding: '15px' }}
          onClick={handleClick}
        >
          Generate
        </Button>
      </Box>

      <Box sx={{}}>
        <Typography variant="h5">Here's the shortened link: </Typography>
        <TextField
          variant="outlined"
          id="outlined-read-only-input"
          value={shortUrl}
          InputProps={{
            readOnly: true,
          }}
        />
        <Box>
          <Button variant="outlined">Copy</Button>
          <Button variant="outlined">Go to</Button>
        </Box>
      </Box>
    </Box>
  );
}
