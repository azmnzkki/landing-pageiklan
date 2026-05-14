import { Helmet } from 'react-helmet-async';

import { Box, Button, Container, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
      </Helmet>

      <Container
        component="main"
        maxWidth="md"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          textAlign: 'center',
        }}
      >
        <Box sx={{ mb: 3 }}>
          <Typography variant="h1" sx={{ fontSize: '120px', fontWeight: 'bold', color: 'primary.main' }}>
            404
          </Typography>
        </Box>

        <Typography variant="h4" sx={{ mb: 2 }}>
          Halaman Tidak Ditemukan
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
          Maaf, halaman yang Anda cari tidak tersedia. Silakan kembali ke halaman utama.
        </Typography>

        <Button
          component="a"
          href="/"
          variant="contained"
          size="large"
        >
          Kembali ke Beranda
        </Button>
      </Container>
    </>
  );
}
