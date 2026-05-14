import IconButton from '@mui/material/IconButton';

import { Iconify } from 'src/components/iconify';

export function MenuButton({ onClick, sx }) {
  return (
    <IconButton onClick={onClick} sx={sx}>
      <Iconify icon="mdi:menu" />
    </IconButton>
  );
}
