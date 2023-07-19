import { Box, Button, TextField, Stack, Tooltip } from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function EditLink({ link }) {
  const [longUrl, setLongUrl] = useState('');
  const router = useRouter();

  useEffect(() => {
    setLongUrl(link.longUrl);
  }, [link]);

  const handleChange = (e) => {
    setLongUrl(e.target.value);
  };

  const handleDelete = () => {
    const allLinks = JSON.parse(localStorage.getItem('shortLink'));

    const index = allLinks.findIndex((testLink) => {
      return testLink.id === link.id;
    });

    allLinks.splice(index, 1);

    localStorage.setItem('shortLink', JSON.stringify(allLinks));

    router.push('/list');
  };

  const handleUpdate = () => {
    const allLinks = JSON.parse(localStorage.getItem('shortLink'));

    const index = allLinks.findIndex((testLink) => {
      return testLink.id === link.id;
    });

    const newLink = {
      ...allLinks[index],
      longUrl,
    };

    allLinks[index] = newLink;

    localStorage.setItem('shortLink', JSON.stringify(allLinks));

    router.push('/list');
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
    <Stack spacing={1.5} direction={{ xs: 'column', sm: 'row' }}>
      <TextField
        variant="outlined"
        sx={{ minWidth: '30%' }}
        value={longUrl}
        InputProps={{
          sx: {
            borderRadius: 20,
            border: '2px solid #2b6777',
            backgroundColor: '#c8d8e4',
            color: 'black',
          },
        }}
        onChange={(e) => handleChange(e)}
      />
      <Stack spacing={1} direction={{ xs: 'column', sm: 'row' }}>
        <Tooltip title="Update" arrow>
          <Button variant="outlined" onClick={handleUpdate} sx={buttonSx}>
            <AutorenewIcon />
          </Button>
        </Tooltip>
        <Tooltip title="Delete" arrow>
          <Button variant="outlined" onClick={handleDelete} sx={buttonSx}>
            <DeleteForeverIcon />
          </Button>
        </Tooltip>
      </Stack>
    </Stack>
  );
}
