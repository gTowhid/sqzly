import { Box, Button, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
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

  const buttonSx = {
    padding: '15px',
    backgroundColor: '#52ab98',
    borderRadius: 5,
    border: 'none',
    color: '#f2f2f2',
    textTransform: 'none',

    '&:hover': {
      backgroundColor: '#008080',
      border: 'none',
    },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '5px',
        borderRadius: 5,
        backgroundColor: '#c8d8e4',
        minWidth: '20vw',
        boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Tooltip title={link.longUrl} arrow>
        <a target="_blank" href={link.longUrl}>
          <Button variant="outlined" sx={buttonSx} style={{ minWidth: '14vw' }}>
            {link.shortUrl}
          </Button>
        </a>
      </Tooltip>

      <Tooltip title="Edit Link" arrow>
        <Link href={`/edit/${link.id}`}>
          <Button variant="outlined" sx={buttonSx} style={{ height: '100%' }}>
            <EditIcon />
          </Button>
        </Link>
      </Tooltip>
    </Box>
  );
}
