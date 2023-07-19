import { useEffect, useState } from 'react';
import EditLink from '../../../components/EditLink';
import { Box, Stack, Typography, Tooltip, Button } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Edit() {
  const [link, setLink] = useState({});
  const router = useRouter();
  const linkId = router.query.linkId;

  useEffect(() => {
    const link = JSON.parse(localStorage.getItem('shortLink')).filter(
      (link) => link.id === linkId
    );
    setLink(link[0]);
  }, [linkId]);

  const content =
    link && Object.keys(link).length > 0 ? (
      <EditLink key={link.id} link={link} />
    ) : (
      'No link found!!!'
    );

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
        Update or Delete Your Saved Link
      </Typography>
      <Typography variant="h2" fontSize={22} textAlign={{ xs: 'center' }}>
        Editing/Deleting
        <span style={{ fontWeight: 'bold' }}> {link?.shortUrl}</span>
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {content}
      </Box>
      <Stack spacing={1.5} direction={{ xs: 'column', sm: 'row' }}>
        <Link href="/">
          <Tooltip title="Home" arrow>
            <Button variant="outlined" sx={buttonSx}>
              Back to Home
            </Button>
          </Tooltip>
        </Link>
        <Link href="/list">
          <Tooltip title="List All" arrow>
            <Button variant="outlined" sx={buttonSx}>
              Show All Links
            </Button>
          </Tooltip>
        </Link>
      </Stack>
    </Stack>
  );
}
