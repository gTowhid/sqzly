import { useEffect, useState } from 'react';
import EditLink from '../../../components/EditLink';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';

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

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        height: '97vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {content}
    </Box>
  );
}
