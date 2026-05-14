import { useState, useEffect } from 'react';

import { Box, Link } from '@mui/material';

export function NavDesktop({ data, sx }) {
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    // Set initial hash from URL
    setActiveHash(window.location.hash || '/');

    // Listen for hash changes
    const handleHashChange = () => {
      setActiveHash(window.location.hash || '/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavClick = (e, path) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.location.hash = path;
      }
    }
  };

  return (
    <Box sx={sx}>
      {data.map((item) => {
        const isActive = activeHash === item.path || (activeHash === '' && item.path === '/');
        
        return (
          <Link
            key={item.title}
            href={item.path}
            onClick={(e) => handleNavClick(e, item.path)}
            sx={{
              mr: 3,
              color: isActive ? '#2196F3' : '#1C252E',
              textDecoration: 'none',
              fontWeight: isActive ? 600 : 500,
              transition: 'color 0.3s ease',
              whiteSpace: 'nowrap',
              '&:hover': {
                color: '#2196F3',
              },
            }}
          >
            {item.title}
          </Link>
        );
      })}
    </Box>
  );
}
