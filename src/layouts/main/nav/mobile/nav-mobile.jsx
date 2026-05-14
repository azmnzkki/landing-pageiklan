import { Box, Link, Stack, Drawer } from '@mui/material';

export function NavMobile({ data, open, onClose }) {
  return (
    <Drawer 
      anchor="left" 
      open={open} 
      onClose={onClose}
      PaperProps={{
        sx: {
          backgroundColor: '#FFFFFF',
          backgroundImage: 'none',
        }
      }}
    >
      <Box sx={{ width: 280, p: 2, backgroundColor: '#FFFFFF' }}>
        <Stack spacing={2}>
          {data.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              onClick={onClose}
              sx={{
                color: '#1C252E',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#2196F3',
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
