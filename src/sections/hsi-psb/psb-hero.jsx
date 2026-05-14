import { Box, Stack, alpha, Button, Container, Typography } from "@mui/material";

import { Iconify } from "src/components/iconify";

export default function PSBHero() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "url(/assets/background/hero.png) center/cover no-repeat",
        backgroundAttachment: "scroll",
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
        },
      }}
      role="banner"
      aria-label="Hero section - Pendaftaran santri baru HSI Boarding School"
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
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
        </Stack>
      </Container>
    </Box>
  );
}
