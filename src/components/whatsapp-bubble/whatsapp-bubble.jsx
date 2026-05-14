import { Tooltip, IconButton } from '@mui/material';

import { Iconify } from 'src/components/iconify';

export function WhatsAppBubble() {
  return (
    <Tooltip title="Chat WhatsApp - Tanya PSB" arrow placement="left">
      <IconButton
        component="a"
        href="https://link.rotator.biz.id/tanya-psb"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi kami melalui WhatsApp untuk pertanyaan PSB"
        sx={{
          position: 'fixed',
          bottom: { xs: 24, md: 40 },
          right: { xs: 16, md: 24 },
          width: 60,
          height: 60,
          minWidth: 60,
          minHeight: 60,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366 0%, #20BA5A 100%)',
          color: '#ffffff',
          zIndex: 999,
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover': {
            transform: 'scale(1.1)',
            boxShadow: '0 12px 32px rgba(37, 211, 102, 0.6)',
          },
          '&:active': {
            transform: 'scale(0.95)',
          },
          '&:focus-visible': {
            outline: '2px solid #ffffff',
            outlineOffset: '2px',
          },
        }}
      >
        <Iconify icon="mdi:whatsapp" width={32} />
      </IconButton>
    </Tooltip>
  );
}
