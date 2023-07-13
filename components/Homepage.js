import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export default function Homepage() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const addToLocalStorage = (short, long) => {
    const list = JSON.parse(localStorage.getItem('shortLink')) || [];
    list.push({
      shortUrl: short,
      longUrl: long,
    });
    localStorage.setItem('shortLink', JSON.stringify(list));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setLongUrl(e.target.value);
  };

  const validateUrl = (url) => {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ); // fragment locator
    return !!pattern.test(url);
  };

  const handleClick = () => {
    if (validateUrl(longUrl)) {
      const hash = Math.random().toString(36).slice(2, 10);
      const newShortUrl = 'sqz.ly/' + hash;
      setShortUrl(newShortUrl);

      addToLocalStorage(newShortUrl, longUrl);
      setLongUrl('');
    } else {
      setShortUrl('URL entered is not valid!!!');
    }
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
