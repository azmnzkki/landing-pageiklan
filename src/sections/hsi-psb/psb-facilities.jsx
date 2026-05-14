import { Box, Grid, Card, Stack, alpha, Container, Typography } from "@mui/material";

import { Iconify } from "src/components/iconify";

export default function PSBFacilities() {
  const facilities = [
    {
      category: "Akademik",
      icon: "mdi:school",
      color: "#2196f3",
      items: [
        "Ruang Kelas Modern",
        "Perpustakaan Digital",
        "Lab Komputer",
        "Lab Sains",
        "Studio Multimedia",
        "Ruang Diskusi",
      ],
    },
    {
      category: "Spiritual",
      icon: "mdi:prayer-beads",
      color: "#4caf50",
      items: [
        "Masjid Utama",
        "Ruang Tahsin",
        "Ruang Halaqah",
        "Perpustakaan Islami",
        "Ruang Doa",
        "Taman Qur&apos;an",
      ],
    },
    {
      category: "Olahraga & Rekreasi",
      icon: "mdi:basketball",
      color: "#ff9800",
      items: [
        "Lapangan Sepak Bola",
        "Lapangan Basket",
        "Lapangan Voli",
        "Kolam Renang",
        "Gym & Fitness",
        "Taman Santri",
      ],
    },
    {
      category: "Akomodasi",
      icon: "mdi:home-heart",
      color: "#9c27b0",
      items: [
        "Asrama Nyaman",
        "Kamar Ber-AC",
        "Kamar Mandi Modern",
        "Ruang Bersama",
        "Dapur Pusat",
        "Laundry Service",
      ],
    },
    {
      category: "Kesehatan",
      icon: "mdi:hospital-box",
      color: "#f44336",
      items: [
        "Klinik Kesehatan",
        "Dokter 24 Jam",
        "Apotek Lengkap",
        "Ruang Isolasi",
        "Ambulans",
        "Asuransi Kesehatan",
      ],
    },
    {
      category: "Teknologi",
      icon: "mdi:laptop",
      color: "#00bcd4",
      items: [
        "WiFi Gratis",
        "Server Cloud",
        "Platform E-Learning",
        "Video Conference",
        "Smart Classroom",
        "Digital Library",
      ],
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, background: alpha("#f5f5f5", 0.5) }}>
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
              Infrastruktur
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mt: 1,
                fontWeight: 700,
                color: "#001a4d",
              }}
            >
              Fasilitas Lengkap & Modern
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                color: "text.secondary",
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Semua fasilitas dirancang untuk mendukung pembelajaran dan kehidupan santri yang optimal
            </Typography>
          </Box>

          {/* Facilities Grid */}
          <Grid container spacing={3}>
            {facilities.map((facility, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card
                  sx={{
                    p: 3,
                    height: "100%",
                    background: `linear-gradient(135deg, ${alpha(facility.color, 0.08)} 0%, ${alpha(facility.color, 0.02)} 100%)`,
                    border: "1px solid",
                    borderColor: alpha(facility.color, 0.2),
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: facility.color,
                      boxShadow: `0 12px 32px ${alpha(facility.color, 0.15)}`,
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Stack spacing={3} sx={{ height: "100%" }}>
                    {/* Header */}
                    <Box>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 1.5,
                          background: alpha(facility.color, 0.15),
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 2,
                        }}
                      >
                        <Iconify
                          icon={facility.icon}
                          width={32}
                          sx={{ color: facility.color }}
                        />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: "#001a4d",
                        }}
                      >
                        {facility.category}
                      </Typography>
                    </Box>

                    {/* Items */}
                    <Stack spacing={1.5} sx={{ flex: 1 }}>
                      {facility.items.map((item, iidx) => (
                        <Box
                          key={iidx}
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 1.5,
                          }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              background: facility.color,
                              mt: 0.75,
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              color: "text.secondary",
                              lineHeight: 1.5,
                            }}
                          >
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Note */}
          <Card
            sx={{
              p: 3,
              background: alpha("#2196f3", 0.05),
              border: "1px solid",
              borderColor: alpha("#2196f3", 0.2),
            }}
          >
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <Iconify
                icon="mdi:information"
                width={24}
                sx={{ color: "#2196f3", mt: 0.5 }}
              />
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 700,
                    color: "#001a4d",
                  }}
                >
                  Komitmen Kami
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    mt: 0.5,
                    lineHeight: 1.6,
                  }}
                >
                  Kami terus melakukan upgrade dan pemeliharaan fasilitas untuk memastikan lingkungan belajar yang aman, nyaman, dan mendukung perkembangan santri secara optimal.
                </Typography>
              </Box>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
