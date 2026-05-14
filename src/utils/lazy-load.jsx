import { lazy, Suspense } from 'react';

import { Box, CircularProgress } from '@mui/material';

/**
 * Lazy load component dengan loading fallback
 */
export const lazyLoad = (importFunc) => {
  const Component = lazy(importFunc);
  
  return (props) => (
    <Suspense
      fallback={
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '400px',
          }}
        >
          <CircularProgress />
        </Box>
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default lazyLoad;
