import { m } from "framer-motion";

import { Box, Stack, alpha, Button, Container, Typography } from "@mui/material";

import { Iconify } from "src/components/iconify";

export default function PSBCta() {

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        background: "linear-gradient(135deg, #E3F2FD 0%, #F4F6F8 50%, #E3F2FD 100%)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "url(/assets/background/shape-circle-3.svg)",
          backgroundSize: "cover",
          opacity: 0.05,
          pointerEvents: "none",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 50%, ${alpha("#2196F3", 0.1)} 0%, transparent 50%), radial-gradient(circle at 80% 80%, ${alpha("#64B5F6", 0.08)} 0%, transparent 50%)`,
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <m.div
          style={{ width: '100%' }}
        >
          <Stack spacing={4} alignItems="center" textAlign="center">
            {/* Main Message */}
            <m.div variants={itemVariants}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #2196F3 0%, #64B5F6 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1.3,
                  maxWidth: "800px",
                  fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
                }}
              >
                Siap Memulai Perjalanan Transformasi Anda?
              </Typography>
            </m.div>

            {/* Subtext */}
            <m.div variants={itemVariants}>
              <Typography
                variant="h6"
                sx={{
                  color: alpha('#1C252E', 0.85),
                  maxWidth: "600px",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  fontSize: "1.05rem",
                }}
              >
                Bergabunglah dengan ribuan santri yang telah merasakan perubahan positif dalam akademik, spiritual, dan pengembangan diri mereka
              </Typography>
            </m.div>

            {/* CTA Buttons */}
            <m.div variants={itemVariants}>
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
                  startIcon={<Iconify icon="mdi:pencil" width={20} sx={{ color: "#ffffff" }} />}
                  sx={{
                    background: "linear-gradient(135deg, #2196F3 0%, #64B5F6 100%)",
                    color: "#ffffff !important",
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    borderRadius: "12px",
                    textTransform: "none",
                    transition: "all 0.3s ease",
                    boxShadow: `0 12px 32px ${alpha("#2196F3", 0.3)}`,
                    "& .MuiButton-startIcon": {
                      color: "#ffffff",
                    },
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: `0 20px 48px ${alpha("#2196F3", 0.4)}`,
                      color: "#ffffff !important",
                    },
                  }}
                >
                  Daftar Sekarang
                </Button>
                <Button
                  component="a"
                  href="/assets/brosur_ikhwan.pdf"
                  download
                  variant="outlined"
                  size="large"
                  startIcon={<Iconify icon="mdi:download" width={20} />}
                  sx={{
                    color: "#2196F3",
                    borderColor: "#2196F3",
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    borderRadius: "12px",
                    textTransform: "none",
                    transition: "all 0.3s ease",
                    background: alpha("#2196F3", 0.05),
                    "&:hover": {
                      borderColor: "#64B5F6",
                      color: "#64B5F6",
                      background: alpha("#2196F3", 0.1),
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  Download Brosur
                </Button>
              </Stack>
            </m.div>

            {/* Features */}
            <m.div variants={itemVariants}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
                sx={{
                  pt: 4,
                  mt: 4,
                  borderTop: `1px solid ${alpha("#2196F3", 0.2)}`,
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Iconify
                    icon="mdi:check-circle"
                    width={24}
                    sx={{ color: "#2196F3" }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: alpha('#1C252E', 0.9),
                      fontWeight: 600,
                    }}
                  >
                    Proses Cepat & Mudah
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Iconify
                    icon="mdi:check-circle"
                    width={24}
                    sx={{ color: "#64B5F6" }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: alpha('#1C252E', 0.9),
                      fontWeight: 600,
                    }}
                  >
                    Beasiswa Tersedia
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Iconify
                    icon="mdi:check-circle"
                    width={24}
                    sx={{ color: "#42A5F5" }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: alpha('#1C252E', 0.9),
                      fontWeight: 600,
                    }}
                  >
                    Dukungan Penuh
                  </Typography>
                </Box>
              </Stack>
            </m.div>

            {/* Contact Info */}
            <m.div variants={itemVariants}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
                sx={{
                  pt: 4,
                  mt: 4,
                  borderTop: `1px solid ${alpha("#2196F3", 0.2)}`,
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Iconify
                    icon="mdi:phone"
                    width={20}
                    sx={{ color: "#2196F3" }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: alpha('#1C252E', 0.9),
                    }}
                  >
                    +62 895-2451-3151
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Iconify
                    icon="mdi:email"
                    width={20}
                    sx={{ color: "#64B5F6" }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: alpha('#1C252E', 0.9),
                    }}
                  >
                    smait@hsi.id
                  </Typography>
                </Box>
                <Box
                  component="a"
                  href="https://link.rotator.biz.id/tanya-psb"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Iconify
                    icon="mdi:whatsapp"
                    width={20}
                    sx={{ color: "#42A5F5" }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: alpha('#1C252E', 0.9),
                    }}
                  >
                    Chat WhatsApp
                  </Typography>
                </Box>
              </Stack>
            </m.div>
          </Stack>
        </m.div>
      </Container>
    </Box>
  );
}
