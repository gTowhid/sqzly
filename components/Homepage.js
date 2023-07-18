import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Divider,
  Tooltip,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CompressIcon from '@mui/icons-material/Compress';
import { useState } from 'react';
import Link from 'next/link';

export default function Homepage() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

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
    } else {
      setShortUrl('URL entered is not valid!!!');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
  };

  const handleGoTo = () => {
    if (!(longUrl.startsWith('http://') || longUrl.startsWith('https://'))) {
      window.open(`http://${longUrl}`, '_blank');
    } else {
      window.open(longUrl, '_blank');
    }
  };

  const buttonSx = {
    padding: '15px',
    backgroundColor: '#52ab98',
    borderRadius: 50,
    border: 'none',
    color: '#f2f2f2',
    textTransform: 'none',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
    '&:hover': {
      backgroundColor: '#008080',
      border: 'none',
    },
  };

  return (
    <Stack
      spacing={3}
      alignItems="center"
      justifyContent="center"
      height="100vh"
      maxWidth="100vw"
      marginLeft="auto"
      marginRight="auto"
      backgroundColor="#b2d8d8"
    >
      <Typography
        variant="h1"
        fontSize={44}
        fontWeight={20}
        textAlign={{ xs: 'center' }}
      >
        Welcome to SQZ.LY
      </Typography>
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
        <Tooltip title="Squeeeeeze!!!" arrow>
          <Button variant="outlined" sx={buttonSx} onClick={handleClick}>
            <CompressIcon />
          </Button>
        </Tooltip>
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
          <Tooltip title="Copy" arrow>
            <Button variant="outlined" sx={buttonSx} onClick={handleCopy}>
              <ContentCopyIcon />
            </Button>
          </Tooltip>

          <Tooltip title="Go To" arrow>
            <Button variant="outlined" sx={buttonSx} onClick={handleGoTo}>
              <ExitToAppIcon />
            </Button>
          </Tooltip>
        </Stack>
      </Stack>
      <Link href="/list">
        <Tooltip title="List All" arrow>
          <Button variant="outlined" sx={buttonSx}>
            Show All Links
          </Button>
        </Tooltip>
      </Link>
    </Stack>
  );
}
