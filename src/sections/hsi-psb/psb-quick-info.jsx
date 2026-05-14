import { Box, Grid, Card, Stack, alpha, Container, Typography } from "@mui/material";

import { Iconify } from "src/components/iconify";

export default function PSBQuickInfo() {
  const infoItems = [
    {
      icon: "mdi:calendar-range",
      label: "Jenjang",
      value: "SMP & SMA",
      color: "#2196f3",
    },
    {
      icon: "mdi:account-multiple",
      label: "Kapasitas",
      value: "Terbatas per Tahun",
      color: "#4caf50",
    },
    {
      icon: "mdi:map-marker",
      label: "Lokasi",
      value: "3 Kampus",
      color: "#ff9800",
    },
    {
      icon: "mdi:clock-outline",
      label: "Sistem",
      value: "Boarding 24 Jam",
      color: "#9c27b0",
    },
    {
      icon: "mdi:book-multiple",
      label: "Kurikulum",
      value: "Terintegrasi",
      color: "#f44336",
    },
    {
      icon: "mdi:language-javascript",
      label: "Bahasa",
      value: "Arab, Inggris, Mandarin",
      color: "#00bcd4",
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, background: alpha("#001a4d", 0.02) }}>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          {/* Header */}
          <Box textAlign="center">
            <Typography
              variant="overline"
              sx={{
                color: "#ff8c00",
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              Informasi Cepat
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mt: 1,
                fontWeight: 700,
                color: "#001a4d",
              }}
            >
              Profil HSI Boarding School
            </Typography>
          </Box>

          {/* Info Grid */}
          <Grid container spacing={3}>
            {infoItems.map((item, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card
                  sx={{
                    p: 3,
                    textAlign: "center",
                    background: "#ffffff",
                    border: "1px solid",
                    borderColor: alpha(item.color, 0.2),
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: item.color,
                      boxShadow: `0 8px 24px ${alpha(item.color, 0.15)}`,
                    },
                  }}
                >
                  <Stack spacing={2} alignItems="center">
                    {/* Icon */}
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        background: alpha(item.color, 0.15),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Iconify
                        icon={item.icon}
                        width={28}
                        sx={{ color: item.color }}
                      />
                    </Box>

                    {/* Label */}
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.secondary",
                        fontWeight: 600,
                        letterSpacing: 0.5,
                      }}
                    >
                      {item.label}
                    </Typography>

                    {/* Value */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: "#001a4d",
                      }}
                    >
                      {item.value}
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
