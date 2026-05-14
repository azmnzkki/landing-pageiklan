import { Box, Link, Stack, Drawer } from '@mui/material';

export function NavMobile({ data, open, onClose }) {
  return (
    <Drawer 
      anchor="left" 
      open={open} 
      onClose={onClose}
      aria-label="Mobile navigation menu"
      PaperProps={{
        sx: {
          backgroundColor: '#FFFFFF',
          backgroundImage: 'none',
        }
      }}
    >
      <Box sx={{ width: 280, p: 2, backgroundColor: '#FFFFFF' }} role="navigation">
        <Stack spacing={2}>
          {data.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              onClick={onClose}
              component="a"
              sx={{
                color: '#1C252E',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'color 0.3s ease',
                py: 1.5,
                px: 1,
                borderRadius: 1,
                minHeight: 48,
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  color: '#2196F3',
                  backgroundColor: 'rgba(33, 150, 243, 0.08)',
                },
                '&:focus-visible': {
                  outline: '2px solid #2196F3',
                  outlineOffset: '2px',
                },
              }}
            >
              {item.title}
            </Link>
          ))}
        </Stack>
      </Box>
    </Drawer>
  );
}
