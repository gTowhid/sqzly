import { Button } from '@mui/material';
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
    <Link href={link.longUrl}>
      <Button variant="outlined">{link.shortUrl}</Button>
    </Link>
  );
}
