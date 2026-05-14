import { Box, Grid, Card, Stack, alpha, Container, Typography } from "@mui/material";

import { Iconify } from "src/components/iconify";

export default function PSBUsp() {
  const uspItems = [
    {
      title: "Manhaj Salaf",
      description: "Pendekatan pembelajaran berbasis Al-Qur&apos;an dan Sunnah dengan metode yang telah terbukti efektif",
      icon: "mdi:book-open-variant",
      color: "#2196f3",
    },
    {
      title: "Kurikulum IT 3 Tahun",
      description: "Program teknologi informasi intensif yang mempersiapkan santri menjadi profesional di era digital",
      icon: "mdi:laptop",
      color: "#4caf50",
    },
    {
      title: "Lingkungan Berbahasa",
      description: "Immersive environment untuk menguasai bahasa Arab, Inggris, dan Mandarin secara natural",
      icon: "mdi:translate",
      color: "#ff9800",
    },
    {
      title: "Standar Hafalan",
      description: "Program hafalan Al-Qur&apos;an terstruktur dengan target dan metode yang jelas dan terukur",
      icon: "mdi:prayer-beads",
      color: "#9c27b0",
    },
    {
      title: "HSI Akademi",
      description: "Platform pembelajaran online dengan ribuan konten edukatif dan mentoring dari para ahli",
      icon: "mdi:school",
      color: "#f44336",
    },
    {
      title: "Boarding 24 Jam",
      description: "Fasilitas asrama lengkap dengan pengawasan 24 jam untuk mendukung pembelajaran holistik",
      icon: "mdi:home-heart",
      color: "#00bcd4",
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, background: '#FFFFFF' }}>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          {/* Header */}
          <Box textAlign="center">
            <Typography
              variant="overline"
              sx={{
                color: "#2196F3",
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              Keunggulan Kami
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mt: 1,
                fontWeight: 700,
                color: "#1C252E",
              }}
            >
              6 Pilar Utama HSI Boarding School
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                color: alpha('#1C252E', 0.85),
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Kombinasi unik dari nilai-nilai Islam, akademik berkualitas, dan teknologi modern
            </Typography>
          </Box>

          {/* USP Grid */}
          <Grid container spacing={3}>
            {uspItems.map((item, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card
                  sx={{
                    p: 3,
                    height: "100%",
                    background: alpha('#F4F6F8', 0.8),
                    border: "1px solid",
                    borderColor: alpha(item.color, 0.2),
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: item.color,
                      boxShadow: `0 12px 32px ${alpha(item.color, 0.15)}`,
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Stack spacing={2}>
                    {/* Icon */}
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 1.5,
                        background: alpha(item.color, 0.15),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Iconify
                        icon={item.icon}
                        width={32}
                        sx={{ color: item.color }}
                      />
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: "#1C252E",
                      }}
                    >
                      {item.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: alpha('#1C252E', 0.7),
                        lineHeight: 1.6,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
