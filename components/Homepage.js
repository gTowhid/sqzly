import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Divider,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CompressIcon from '@mui/icons-material/Compress';
import { useState } from 'react';
import { useRouter } from 'next/router';
import image from '../public/background.jpg';

export default function Homepage() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const router = useRouter();

  const addToLocalStorage = (short, long, id) => {
    const list = JSON.parse(localStorage.getItem('shortLink')) || [];
    list.push({
      id,
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

      addToLocalStorage(newShortUrl, longUrl, hash);
      setLongUrl('');
    } else {
      setShortUrl('URL entered is not valid!!!');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
  };

  return (
    <Stack
      spacing={2}
      divider={<Divider orientation="horizontal" flexItem />}
      alignItems="center"
      justifyContent="center"
      height="97vh"
      maxWidth="90vw"
      marginLeft="auto"
      marginRight="auto"
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
          InputProps={{
            sx: {
              borderRadius: 20,
              border: '2px solid #2b6777',
              backgroundColor: '#c8d8e4',
              color: 'black',
            },
          }}
          onChange={(e) => handleChange(e)}
          value={longUrl}
        />

        <Button
          variant="outlined"
          sx={{
            padding: '15px',
            backgroundColor: '#52ab98',
            borderRadius: 50,
            border: 'none',
            color: '#f2f2f2',
            textTransform: 'none',
          }}
          onClick={handleClick}
        >
          <CompressIcon />
        </Button>
      </Box>

      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        marginLeft="auto"
        marginRight="auto"
        width="100%"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <Typography variant="h2" fontSize={22} textAlign={{ xs: 'center' }}>
          Here's the shortened link:{' '}
        </Typography>
        <TextField
          variant="outlined"
          id="outlined-read-only-input"
          sx={{ minWidth: '30%' }}
          value={shortUrl}
          InputProps={{
            sx: {
              borderRadius: 20,
              border: '2px solid #2b6777',
              backgroundColor: '#c8d8e4',
              color: 'black',
            },
            readOnly: true,
          }}
        />

        <Stack direction="row" gap={2}>
          <Button
            variant="outlined"
            sx={{
              padding: '15px',
              backgroundColor: '#52ab98',
              borderRadius: 50,
              border: 'none',
              color: '#f2f2f2',
              textTransform: 'none',
            }}
            onClick={handleCopy}
          >
            <ContentCopyIcon />
          </Button>
          <Button
            variant="outlined"
            sx={{
              padding: '15px',
              backgroundColor: '#52ab98',
              borderRadius: 50,
              border: 'none',
              color: '#f2f2f2',
              textTransform: 'none',
            }}
            onClick={() => router.push('/list')}
          >
            <ExitToAppIcon />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
