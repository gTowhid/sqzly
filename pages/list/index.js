import { useEffect, useState } from 'react';
import ShortLink from '../../components/ShortLink';
import { Box, Stack, Typography, Button, Tooltip } from '@mui/material';
import Link from 'next/link';

export default function List() {
  const [linkList, setlinkList] = useState(null);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('shortLink'));
    setlinkList(list);
  }, []);

  const content =
    linkList && linkList.length > 0
      ? linkList.map((link) => <ShortLink key={link.id} link={link} />)
      : 'No link found!!!';

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={3}
      height="100vh"
      maxWidth="100vw"
      marginLeft="auto"
      marginRight="auto"
      backgroundColor="#b2d8d8"
    >
      <Typography
        variant="h2"
        fontSize={36}
        fontWeight={15}
        textAlign={{ xs: 'center' }}
      >
        All the links you have Squeezed!!!
      </Typography>
      <Typography variant="h2" fontSize={22} textAlign={{ xs: 'center' }}>
        Click to follow | Hover to see the full link
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {content}
      </Box>
      <Link href="/">
        <Tooltip title="Home" arrow>
          <Button
            variant="outlined"
            sx={{
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
            }}
          >
            Back to Home
          </Button>
        </Tooltip>
      </Link>
    </Stack>
  );
}
