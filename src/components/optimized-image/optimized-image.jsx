import { useState } from 'react';

import { Box } from '@mui/material';

/**
 * Optimized Image Component dengan lazy loading dan blur placeholder
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  placeholder,
  sx,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        width,
        height,
        ...sx,
      }}
    >
      {/* Placeholder blur */}
      {!isLoaded && placeholder && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${placeholder})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(10px)',
            zIndex: 1,
          }}
        />
      )}

      {/* Main image */}
      <Box
        component="img"
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          ...sx,
        }}
        {...props}
      />
    </Box>
  );
}

export default OptimizedImage;
