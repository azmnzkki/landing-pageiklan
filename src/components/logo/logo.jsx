import { mergeClasses } from 'minimal-shared/utils';

import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

import { logoClasses } from './classes';

// ----------------------------------------------------------------------

export function Logo({ sx, disabled, className, href = '/', isSingle = true, ...other }) {

  /*
    * OR using local (public folder)
    *
    const singleLogo = (
      <img
        alt="Single logo"
        src={`${CONFIG.assetsDir}/logo/logo-single.svg`}
        width="100%"
        height="100%"
      />
    );

    const fullLogo = (
      <img
        alt="Full logo"
        src={`${CONFIG.assetsDir}/logo/logo-full.svg`}
        width="100%"
        height="100%"
      />
    );
    *
    */

  const singleLogo = (
    <img
      alt="HSIBS Logo"
      src="/logo/logohsibs.webp"
      width="100%"
      height="100%"
      style={{ objectFit: 'contain' }}
    />
  );

  const fullLogo = (
    <img
      alt="HSIBS Logo"
      src="/logo/logohsibs.webp"
      width="100%"
      height="100%"
      style={{ objectFit: 'contain' }}
    />
  );

  return (
    <LogoRoot
      component="a"
      href={href}
      aria-label="Logo"
      underline="none"
      className={mergeClasses([logoClasses.root, className])}
      sx={[
        {
          width: 40,
          height: 40,
          ...(!isSingle && { width: 102, height: 36 }),
          ...(disabled && { pointerEvents: 'none' }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {isSingle ? singleLogo : fullLogo}
    </LogoRoot>
  );
}

// ----------------------------------------------------------------------

const LogoRoot = styled(Link)(() => ({
  flexShrink: 0,
  color: 'transparent',
  display: 'inline-flex',
  verticalAlign: 'middle',
}));
