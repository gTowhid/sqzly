import { Box, Button } from '@mui/material';
import Link from 'next/link';

export default function ShortLink({ link }) {
  const createLongLink = () => {
    let longLink = link.longUrl;
    if (!(longLink.startsWith('http://') || longLink.startsWith('https://'))) {
      longLink = 'http://' + longLink;
      link.longUrl = longLink;
    }
  };

  createLongLink();

  return (
    <Box sx={{ display: 'flex', gap: '5px' }}>
      <a target="_blank" href={link.longUrl}>
        <Button variant="outlined">{link.shortUrl}</Button>
      </a>
      <Link href={`http://localhost:3000/edit/${link.id}`}>
        <Button variant="outlined">Edit</Button>
      </Link>
    </Box>
  );
}
