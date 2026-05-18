import { Box, Stack, alpha, Button, Tooltip, Container, Typography, IconButton } from "@mui/material";

import { Iconify } from "src/components/iconify";

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

export default function PSBHero() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(15, 20, 25, 0.6)",
          pointerEvents: "none",
          zIndex: 1,
        },
      }}
      role="banner"
      aria-label="Hero section - Pendaftaran santri baru HSI Boarding School"
    >
      {/* LCP-optimized img tag - must be visible immediately, not lazy-loaded */}
      <picture>
        <source srcSet="/assets/background/hero.webp" type="image/webp" />
        <Box
          component="img"
          src="/assets/background/hero.png"
          alt=""
          loading="eager"
          fetchpriority="high"
          decoding="async"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
          }}
        />
      </picture>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Stack spacing={4} alignItems="center" textAlign="center">
          {/* Badge */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 1,
              borderRadius: "50px",
              background: alpha("#2196F3", 0.15),
              border: "1px solid",
              borderColor: alpha("#2196F3", 0.3),
            }}
          >
            <Iconify icon="mdi:star" width={16} sx={{ color: "#2196F3" }} />
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                color: "#2196F3",
                letterSpacing: 0.5,
              }}
            >
              Pendaftaran santri baru telah dibuka
            </Typography>
          </Box>

          {/* Main Headline */}
          <Typography
            component="h1"
            variant="h2"
            sx={{
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.3,
              maxWidth: "900px",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
            }}
          >
            Cetak Generasi Rabbani yang Kuasai Teknologi Masa Depan
          </Typography>

          {/* Subheadline */}
          <Typography
            variant="h6"
            sx={{
              color: alpha('#ffffff', 0.9),
              maxWidth: "700px",
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Memadukan kurikulum Islam komprehensif dan kecakapan digital untuk mempersiapkan pemimpin masa depan. Pendaftaran Siswa Baru TA 2026/2027 resmi dibuka.
          </Typography>

          {/* CTA Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ pt: 2 }}
          >
            <Button
              component="a"
              href="https://psb.hsiboardingschool.id/auth/auth-user"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              aria-label="Daftar sekarang di portal PSB HSI Boarding School"
              sx={{
                background: "#2196F3",
                color: "#ffffff",
                fontWeight: 700,
                px: 4,
                py: 1.5,
                minHeight: 48,
                borderRadius: 1,
                "&:hover": {
                  background: "#0D47A1",
                  color: "#ffffff",
                  boxShadow: `0 8px 24px rgba(33, 150, 243, 0.3)`,
                },
                "&:focus-visible": {
                  outline: "2px solid #ffffff",
                  outlineOffset: "2px",
                },
              }}
            >
              Daftar Sekarang
            </Button>
            <Button
              component="a"
              href="#tentang"
              variant="outlined"
              size="large"
              aria-label="Pelajari lebih lanjut tentang HSI Boarding School"
              sx={{
                color: "#ffffff",
                borderColor: `rgba(255, 255, 255, 0.5)`,
                fontWeight: 700,
                px: 4,
                py: 1.5,
                minHeight: 48,
                borderRadius: 1,
                "&:hover": {
                  borderColor: "#ffffff",
                  background: `rgba(255, 255, 255, 0.1)`,
                },
                "&:focus-visible": {
                  outline: "2px solid #ffffff",
                  outlineOffset: "2px",
                },
              }}
            >
              Kenali Kami Lebih Lanjut
            </Button>
          </Stack>

          {/* Social Media Icons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1.5,
              mt: 1,
            }}
          >
            {/* Divider label */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                width: "100%",
                maxWidth: 280,
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  height: "1px",
                  background: "rgba(255,255,255,0.2)",
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  color: alpha("#ffffff", 0.55),
                  fontWeight: 500,
                  letterSpacing: 1,
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                Ikuti Kami
              </Typography>
              <Box
                sx={{
                  flex: 1,
                  height: "1px",
                  background: "rgba(255,255,255,0.2)",
                }}
              />
            </Box>

            {/* Icon Row */}
            <Stack
              direction="row"
              spacing={1.5}
              sx={{
                px: 2.5,
                py: 1.5,
                borderRadius: "50px",
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {SOCIAL_LINKS.map((social) => (
                <Tooltip key={social.name} title={social.name} placement="top" arrow>
                  <IconButton
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ikuti HSI Boarding School di ${social.name}`}
                    sx={{
                      width: 40,
                      height: 40,
                      p: 0,
                      borderRadius: "10px",
                      background: alpha(social.color, 0.15),
                      color: "#ffffff",
                      transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      "&:hover": {
                        background: alpha(social.color, 0.35),
                        transform: "translateY(-5px) scale(1.1)",
                        boxShadow: `0 8px 20px ${alpha(social.color, 0.5)}`,
                        color: "#ffffff",
                      },
                      "&:focus-visible": {
                        outline: "2px solid #ffffff",
                        outlineOffset: "2px",
                      },
                    }}
                  >
                    <Iconify icon={social.icon} width={20} />
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
