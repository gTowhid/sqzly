import { Box, Button, TextField } from '@mui/material';
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

    const index = allLinks.map((testLink, testIndex) => {
      if (testLink.id === link.id) return testIndex;
    });

    allLinks.splice(index, 1);

    localStorage.setItem('shortLink', JSON.stringify(allLinks));

    router.push('/');
  };

  const handleUpdate = () => {
    const allLinks = JSON.parse(localStorage.getItem('shortLink'));

    const index = allLinks.map((testLink, testIndex) => {
      if (testLink.id === link.id) return testIndex;
    });

    // allLinks.splice(index, 1);
    const newLink = {
      ...allLinks[index],
      longUrl,
    };

    allLinks[index] = newLink;

    localStorage.setItem('shortLink', JSON.stringify(allLinks));

    router.push('/list');
  };

  return (
    <Box sx={{ display: 'flex', gap: '5px' }}>
      <TextField
        variant="outlined"
        id="outlined-read-only-input"
        value={longUrl}
        onChange={(e) => handleChange(e)}
      />
      <Button variant="outlined" onClick={handleUpdate}>
        Update
      </Button>
      <Button variant="outlined" onClick={handleDelete}>
        Delete
      </Button>
    </Box>
  );
}
