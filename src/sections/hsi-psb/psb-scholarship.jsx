import { Box, Grid, Card, Chip, Stack, alpha, Container, Typography } from "@mui/material";

import { Iconify } from "src/components/iconify";

export default function PSBScholarship() {
  const scholarships = [
    {
      name: "Beasiswa Penuh",
      icon: "mdi:star",
      color: "#2196f3",
      coverage: "100%",
      description: "Mencakup semua biaya pendidikan dan asrama",
      requirements: [
        "Nilai akademik rata-rata minimal 9.0",
        "Hafalan Al-Qur&apos;an minimal 5 juz",
        "Lulus tes akademik dengan skor 95+",
        "Rekomendasi dari kepala sekolah",
        "Wawancara dengan tim seleksi",
      ],
      quota: "10 santri/tahun",
    },
    {
      name: "Beasiswa Sebagian",
      icon: "mdi:percent",
      color: "#4caf50",
      coverage: "50-75%",
      description: "Mencakup sebagian dari biaya pendidikan",
      requirements: [
        "Nilai akademik rata-rata minimal 8.0",
        "Hafalan Al-Qur&apos;an minimal 3 juz",
        "Lulus tes akademik dengan skor 85+",
        "Kondisi ekonomi keluarga menengah",
        "Prestasi di bidang akademik atau non-akademik",
      ],
      quota: "25 santri/tahun",
    },
    {
      name: "Beasiswa Prestasi",
      icon: "mdi:trophy",
      color: "#ff9800",
      coverage: "25-50%",
      description: "Untuk santri dengan prestasi luar biasa",
      requirements: [
        "Juara dalam kompetisi akademik/non-akademik",
        "Nilai akademik minimal 8.0",
        "Hafalan Al-Qur&apos;an minimal 2 juz",
        "Sertifikat prestasi dari lembaga resmi",
        "Rekomendasi dari pembimbing/pelatih",
      ],
      quota: "30 santri/tahun",
    },
    {
      name: "Beasiswa Yatim Piatu",
      icon: "mdi:heart",
      color: "#9c27b0",
      coverage: "50-100%",
      description: "Khusus untuk santri yatim atau piatu",
      requirements: [
        "Surat keterangan yatim/piatu dari desa",
        "Nilai akademik minimal 7.0",
        "Kondisi ekonomi keluarga kurang mampu",
        "Rekomendasi dari tokoh masyarakat",
        "Wawancara dengan tim sosial",
      ],
      quota: "20 santri/tahun",
    },
    {
      name: "Beasiswa Hafiz",
      icon: "mdi:book-open-variant",
      color: "#f44336",
      coverage: "50-75%",
      description: "Untuk santri yang sudah hafal Al-Qur&apos;an",
      requirements: [
        "Hafalan Al-Qur&apos;an minimal 10 juz",
        "Nilai akademik minimal 7.5",
        "Sertifikat hafalan dari lembaga resmi",
        "Tes hafalan dengan tim penguji",
        "Komitmen melanjutkan hafalan",
      ],
      quota: "15 santri/tahun",
    },
    {
      name: "Beasiswa BTI",
      icon: "mdi:gift",
      color: "#00bcd4",
      coverage: "Bervariasi",
      description: "Program beasiswa dari Badan Tanggung Jawab Sosial",
      requirements: [
        "Terdaftar sebagai calon santri HSI",
        "Nilai akademik minimal 7.0",
        "Kondisi ekonomi keluarga menengah ke bawah",
        "Lulus seleksi administrasi",
        "Bersedia menjadi duta program BTI",
      ],
      quota: "50+ santri/tahun",
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
              Dukungan Finansial
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mt: 1,
                fontWeight: 700,
                color: "#001a4d",
              }}
            >
              Program Beasiswa HSI
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
              Kami menyediakan berbagai program beasiswa untuk membantu santri berprestasi dan kurang mampu
            </Typography>
          </Box>

          {/* Scholarships Grid */}
          <Grid container spacing={3}>
            {scholarships.map((scholarship, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <Card
                  sx={{
                    p: 3,
                    height: "100%",
                    background: `linear-gradient(135deg, ${alpha(scholarship.color, 0.08)} 0%, ${alpha(scholarship.color, 0.02)} 100%)`,
                    border: "1px solid",
                    borderColor: alpha(scholarship.color, 0.2),
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: scholarship.color,
                      boxShadow: `0 12px 32px ${alpha(scholarship.color, 0.15)}`,
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Stack spacing={3} sx={{ height: "100%" }}>
                    {/* Header */}
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          mb: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: 1,
                            background: alpha(scholarship.color, 0.15),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Iconify
                            icon={scholarship.icon}
                            width={20}
                            sx={{ color: scholarship.color }}
                          />
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              color: "#001a4d",
                            }}
                          >
                            {scholarship.name}
                          </Typography>
                          <Chip
                            label={scholarship.coverage}
                            size="small"
                            sx={{
                              background: alpha(scholarship.color, 0.15),
                              color: scholarship.color,
                              fontWeight: 700,
                              mt: 0.5,
                            }}
                          />
                        </Box>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.6,
                        }}
                      >
                        {scholarship.description}
                      </Typography>
                    </Box>

                    {/* Quota */}
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 1,
                        background: alpha(scholarship.color, 0.1),
                        border: "1px solid",
                        borderColor: alpha(scholarship.color, 0.2),
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: "text.secondary",
                          display: "block",
                          fontWeight: 600,
                        }}
                      >
                        Kuota Tersedia
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 700,
                          color: scholarship.color,
                          mt: 0.5,
                        }}
                      >
                        {scholarship.quota}
                      </Typography>
                    </Box>

                    {/* Requirements */}
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 700,
                          color: "#001a4d",
                          display: "block",
                          mb: 1,
                        }}
                      >
                        Persyaratan
                      </Typography>
                      <Stack spacing={1}>
                        {scholarship.requirements.map((req, ridx) => (
                          <Box
                            key={ridx}
                            sx={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 1,
                            }}
                          >
                            <Box
                              sx={{
                                width: 4,
                                height: 4,
                                borderRadius: "50%",
                                background: scholarship.color,
                                mt: 0.75,
                                flexShrink: 0,
                              }}
                            />
                            <Typography
                              variant="caption"
                              sx={{
                                color: "text.secondary",
                                lineHeight: 1.5,
                              }}
                            >
                              {req}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Box>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Application Process */}
          <Card
            sx={{
              p: 3,
              background: alpha("#2196f3", 0.05),
              border: "1px solid",
              borderColor: alpha("#2196f3", 0.2),
            }}
          >
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Iconify
                  icon="mdi:clipboard-list"
                  width={24}
                  sx={{ color: "#2196f3" }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 700,
                    color: "#001a4d",
                  }}
                >
                  Proses Pengajuan Beasiswa
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <Box textAlign="center">
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: alpha("#2196f3", 0.15),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 700,
                          color: "#2196f3",
                        }}
                      >
                        1
                      </Typography>
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 600,
                        color: "#001a4d",
                      }}
                    >
                      Daftar Sebagai Calon Santri
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box textAlign="center">
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: alpha("#2196f3", 0.15),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 700,
                          color: "#2196f3",
                        }}
                      >
                        2
                      </Typography>
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 600,
                        color: "#001a4d",
                      }}
                    >
                      Ajukan Permohonan Beasiswa
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box textAlign="center">
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: alpha("#2196f3", 0.15),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 700,
                          color: "#2196f3",
                        }}
                      >
                        3
                      </Typography>
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 600,
                        color: "#001a4d",
                      }}
                    >
                      Verifikasi & Seleksi
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box textAlign="center">
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: alpha("#2196f3", 0.15),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 700,
                          color: "#2196f3",
                        }}
                      >
                        4
                      </Typography>
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 600,
                        color: "#001a4d",
                      }}
                    >
                      Pengumuman Hasil
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
