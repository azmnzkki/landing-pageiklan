import { Box, Card, Stack, alpha, Button, Container, Typography } from "@mui/material";

import { Iconify } from "src/components/iconify";

export default function PSBCampus() {
  const campuses = [
    {
      name: "Sukabumi",
      subtitle: "(Pusat – Putra)",
      focus: "Pengembangan Karakter & Lingkungan Kondusif",
      description: "Cabang pusat yang memadukan lingkungan asri dengan fasilitas lengkap guna menciptakan atmosfer pembelajaran yang tenang bagi pengembangan potensi diri santri.",
      icon: "mdi:home-city",
      color: "#2196F3",
      mapsLink: "https://maps.app.goo.gl/2z6p58iikDJhPyPt5",
      facilities: [
        "Asrama Modern: Hunian nyaman untuk mendukung kemandirian.",
        "Masjid Utama: Pusat peribadatan dan halaqah ilmu yang luas.",
        "Area Olahraga: Sarana kebugaran untuk menjaga kesehatan fisik.",
        "Dapur Pusat: Layanan konsumsi terpadu dengan gizi terjamin.",
        "Jaringan internet yang stabil dan standar Industri",
      ],
    },
    {
      name: "Purworejo",
      subtitle: "(Putra)",
      focus: "Akselerasi Bahasa & Diniyah Terpadu",
      description: "Menonjolkan program bahasa yang intensif dan kurikulum diniyah yang sistematis, didukung dengan fasilitas yang dirancang untuk kedalaman literasi santri.",
      icon: "mdi:school",
      color: "#64B5F6",
      mapsLink: "https://maps.app.goo.gl/VwFUT2ZcgQz47Dbr8",
      facilities: [
        "Asrama Nyaman: Lingkungan tinggal yang tenang untuk fokus belajar.",
        "Masjid Utama: Jantung kegiatan spiritual yang megah dan bersih.",
        "Taman Santri: Area komunal terbuka untuk diskusi dan inspirasi.",
        "Ruang Kelas: Fasilitas KBM yang representatif dan tertib.",
        "Dapur Terpadu: Penyediaan konsumsi harian yang bersih dan higienis.",
        "Jaringan internet yang stabil dan standar Industri",
      ],
    },
    {
      name: "Bekasi",
      subtitle: "(Khusus Putri)",
      focus: "Keamanan Tinggi & Pemberdayaan Akhwat",
      description: "Menghadirkan lingkungan pendidikan muslimah dengan standar privasi dan keamanan ketat, serta program pemberdayaan yang relevan bagi santriwati.",
      icon: "mdi:shield-check",
      color: "#42A5F5",
      mapsLink: "https://maps.app.goo.gl/8ceNGKVvKpfcHGuQ7",
      facilities: [
        "Asrama Full AC: Hunian sejuk untuk istirahat yang lebih berkualitas.",
        "Ruang Kelas AC: Ruang belajar modern yang nyaman di segala cuaca.",
        "Masjid Utama: Pusat ibadah dan pembinaan adab khusus akhwat.",
        "Dapur Utama: Layanan katering dengan standar kebersihan tinggi.",
        "Jaringan internet yang stabil dan standar Industri",
      ],
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, background: '#FFFFFF' }}>
      <Container maxWidth="lg">
        <Stack spacing={8}>
          {/* Header */}
          <Box textAlign="center">
            <Typography
              variant="overline"
              sx={{
                color: "#2196F3",
                fontWeight: 700,
                letterSpacing: 1.5,
                display: "block",
                mb: 2,
              }}
            >
              Lokasi Kami
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                color: "#1C252E",
                mb: 3,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              3 Cabang HSI Boarding School
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: alpha('#1C252E', 0.85),
                maxWidth: "700px",
                mx: "auto",
                fontSize: "1.05rem",
                lineHeight: 1.7,
              }}
            >
              Menapaki Langkah Awal di Tiga Titik Perjuangan: Membangun Lingkungan Belajar yang Nyaman dan Terus Berbenah demi Mendukung Tumbuh Kembang Santri secara Maksimal
            </Typography>
          </Box>

          {/* Campus Grid - 3 Equal Columns */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
              gap: 4,
            }}
          >
            {campuses.map((campus, idx) => (
              <Card
                key={idx}
                sx={{
                  p: 4,
                  height: "100%",
                  background: alpha('#F4F6F8', 0.9),
                  border: `1px solid ${alpha(campus.color, 0.2)}`,
                  borderRadius: "16px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, ${campus.color} 0%, transparent 100%)`,
                  },
                  "&:hover": {
                    borderColor: campus.color,
                    boxShadow: `0 20px 40px ${alpha(campus.color, 0.2)}`,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Stack spacing={4} sx={{ flex: 1 }}>
                  {/* Icon & Title */}
                  <Box>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: "12px",
                        background: alpha(campus.color, 0.15),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                      }}
                    >
                      <Iconify
                        icon={campus.icon}
                        width={32}
                        sx={{ color: campus.color }}
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        color: "#1C252E",
                        fontSize: "1.5rem",
                      }}
                    >
                      {campus.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: campus.color,
                        fontWeight: 700,
                        display: "block",
                        mt: 0.5,
                      }}
                    >
                      {campus.subtitle}
                    </Typography>
                  </Box>

                  {/* Focus */}
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: alpha('#1C252E', 0.7),
                        fontWeight: 600,
                        display: "block",
                        mb: 1,
                      }}
                    >
                      Fokus
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: campus.color,
                        fontWeight: 700,
                        fontSize: "0.95rem",
                      }}
                    >
                      {campus.focus}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: alpha('#1C252E', 0.85),
                      lineHeight: 1.7,
                      fontSize: "0.95rem",
                      flex: 1,
                    }}
                  >
                    {campus.description}
                  </Typography>

                  {/* Facilities */}
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: alpha('#1C252E', 0.7),
                        fontWeight: 600,
                        display: "block",
                        mb: 2,
                      }}
                    >
                      Fasilitas Utama
                    </Typography>
                    <Stack spacing={2}>
                      {campus.facilities.map((facility, fidx) => (
                        <Box
                          key={fidx}
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 2,
                          }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              background: campus.color,
                              mt: 1,
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            variant="caption"
                            sx={{
                              color: alpha('#1C252E', 0.8),
                              fontSize: "0.85rem",
                              lineHeight: 1.6,
                            }}
                          >
                            {facility}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>

                  {/* Maps Button */}
                  <Button
                    component="a"
                    href={campus.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<Iconify icon="mdi:map-marker" width={20} />}
                    sx={{
                      mt: 2,
                      background: alpha(campus.color, 0.15),
                      color: campus.color,
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      py: 1.5,
                      borderRadius: 1,
                      textTransform: "none",
                      transition: "all 0.3s ease",
                      border: `1px solid ${alpha(campus.color, 0.3)}`,
                      "&:hover": {
                        background: alpha(campus.color, 0.25),
                        borderColor: campus.color,
                      },
                    }}
                  >
                    Lihat di Maps
                  </Button>

                  {/* Decorative Dot */}
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: campus.color,
                      mt: 2,
                    }}
                  />
                </Stack>
              </Card>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
