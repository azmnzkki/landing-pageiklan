import { Container, Typography } from '@mui/material';

export function ErrorBoundary() {
  return (
    <Container maxWidth="lg" sx={{ py: 10, textAlign: 'center' }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Oops! Something went wrong
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Please try refreshing the page or contact support if the problem persists.
      </Typography>
    </Container>
  );
}
