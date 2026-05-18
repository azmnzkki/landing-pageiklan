import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';

import { Logo } from 'src/components/logo';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    icon: 'socials:instagram',
    href: 'https://www.instagram.com/hsiboardingschool/',
    color: '#E4405F',
  },
  {
    name: 'Facebook',
    icon: 'socials:facebook',
    href: 'https://www.facebook.com/profile.php?id=61586171438715&locale=id_ID',
    color: '#1877F2',
  },
  {
    name: 'LinkedIn',
    icon: 'socials:linkedin',
    href: 'https://www.linkedin.com/school/hsiboardingschool/posts/?feedView=all',
    color: '#0A66C2',
  },
  {
    name: 'YouTube',
    icon: 'mdi:youtube',
    href: 'https://www.youtube.com/@hsiboardingschool/streams',
    color: '#FF0000',
  },
];

// ----------------------------------------------------------------------

const FooterRoot = styled('footer')(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#FFFFFF',
  borderTop: `1px solid rgba(33, 150, 243, 0.1)`,
}));

export function Footer({ sx, layoutQuery = 'md', ...other }) {
  return (
    <FooterRoot sx={sx} {...other}>
      <Container
        sx={{
          py: { xs: 8, md: 10 },
        }}
      >
        <Stack spacing={6}>
          {/* Top Section */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 4, md: 6 },
              alignItems: 'start',
            }}
          >
            {/* Left - Logo & Description */}
            <Stack spacing={3} sx={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center', width: '100%' }}>
              <Box sx={{ width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Logo isSingle={false} />
              </Box>

              <Typography
                variant="body2"
                sx={{
                  color: alpha('#1C252E', 0.8),
                  maxWidth: 300,
                  lineHeight: 1.7,
                  fontSize: '0.95rem',
                }}
              >
                HSI Boarding School adalah lembaga pendidikan berbasis asrama yang mengintegrasikan nilai-nilai Islam dengan penguasaan teknologi modern.
              </Typography>

              {/* Social Media Icons */}
              <Stack direction="row" spacing={1}>
                {SOCIAL_LINKS.map((social) => (
                  <IconButton
                    key={social.name}
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '12px',
                      background: alpha(social.color, 0.1),
                      color: social.color,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: alpha(social.color, 0.2),
                        transform: 'translateY(-4px)',
                        boxShadow: `0 8px 24px ${alpha(social.color, 0.3)}`,
                      },
                    }}
                    title={social.name}
                  >
                    <Iconify icon={social.icon} width={24} />
                  </IconButton>
                ))}
              </Stack>
            </Stack>

            {/* Right - Quick Links */}
            <Stack spacing={4}>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 800,
                    color: '#1C252E',
                    mb: 2,
                    fontSize: '0.95rem',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                  }}
                >
                  Navigasi Cepat
                </Typography>
                <Stack spacing={1.5}>
                  {[
                    { label: 'Beranda', href: '/' },
                    { label: 'Tentang Kami', href: '#tentang' },
                    { label: 'Program', href: '#program' },
                    { label: 'Kampus', href: '#kampus' },
                  ].map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      sx={{
                        color: alpha('#1C252E', 0.8),
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        '&:hover': {
                          color: '#2196F3',
                          transform: 'translateX(4px)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          background: '#2196F3',
                        }}
                      />
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Box>

              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 800,
                    color: '#1C252E',
                    mb: 2,
                    fontSize: '0.95rem',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                  }}
                >
                  Kontak
                </Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Iconify icon="mdi:phone" width={18} sx={{ color: '#2196F3' }} />
                    <Typography
                      sx={{
                        color: alpha('#1C252E', 0.8),
                        fontSize: '0.9rem',
                      }}
                    >
                      +62 895-2451-3151
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Iconify icon="mdi:email" width={18} sx={{ color: '#64B5F6' }} />
                    <Typography
                      sx={{
                        color: alpha('#1C252E', 0.8),
                        fontSize: '0.9rem',
                      }}
                    >
                      smait@hsi.id
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>

          {/* Divider */}
          <Divider sx={{ borderColor: alpha('#2196F3', 0.1) }} />

          {/* Bottom Section */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 2,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: alpha('#1C252E', 0.6),
                fontSize: '0.85rem',
              }}
            >
              © 2026 HSI Boarding School. All rights reserved.
            </Typography>

            <Stack direction="row" spacing={3}>
              <Link
                href="#"
                sx={{
                  color: alpha('#1C252E', 0.6),
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#2196F3',
                  },
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                sx={{
                  color: alpha('#1C252E', 0.6),
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#2196F3',
                  },
                }}
              >
                Terms & Conditions
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </FooterRoot>
  );
}

// ----------------------------------------------------------------------

export function HomeFooter({ sx, ...other }) {
  return (
    <FooterRoot
      sx={[
        {
          py: 5,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Box sx={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Logo isSingle={false} />
          </Box>

          <Typography
            variant="caption"
            sx={{
              color: alpha('#1C252E', 0.6),
              fontSize: '0.85rem',
            }}
          >
            © 2026 HSI Boarding School. All rights reserved.
          </Typography>

          {/* Social Icons */}
          <Stack direction="row" spacing={1}>
            {SOCIAL_LINKS.map((social) => (
              <IconButton
                key={social.name}
                component="a"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '10px',
                  background: alpha(social.color, 0.1),
                  color: social.color,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: alpha(social.color, 0.2),
                    transform: 'translateY(-3px)',
                  },
                }}
                title={social.name}
              >
                <Iconify icon={social.icon} width={20} />
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Container>
    </FooterRoot>
  );
}
