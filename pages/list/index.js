import { useEffect, useState } from 'react';
import ShortLink from '../../components/ShortLink';
import { Box } from '@mui/material';

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
