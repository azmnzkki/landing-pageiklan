import { Box, Grid, Card, Chip, Stack, alpha, Container, Typography } from "@mui/material";

import { Iconify } from "src/components/iconify";

export default function PSBSchedule() {
  const schedules = [
    {
      phase: "Fase 1: Pendaftaran Awal",
      period: "1 Januari - 28 Februari 2024",
      icon: "mdi:calendar-start",
      color: "#2196f3",
      details: [
        { label: "Pembukaan Pendaftaran", date: "1 Januari 2024" },
        { label: "Batas Pendaftaran", date: "28 Februari 2024" },
        { label: "Verifikasi Dokumen", date: "1-15 Maret 2024" },
        { label: "Pengumuman Lolos Seleksi Awal", date: "20 Maret 2024" },
      ],
    },
    {
      phase: "Fase 2: Tes & Wawancara",
      period: "25 Maret - 30 April 2024",
      icon: "mdi:clipboard-check",
      color: "#4caf50",
      details: [
        { label: "Tes Akademik", date: "25-31 Maret 2024" },
        { label: "Tes Psikologi", date: "1-7 April 2024" },
        { label: "Wawancara Pribadi", date: "8-25 April 2024" },
        { label: "Pengumuman Hasil Akhir", date: "30 April 2024" },
      ],
    },
    {
      phase: "Fase 3: Pendaftaran Ulang",
      period: "1 Mei - 31 Mei 2024",
      icon: "mdi:file-document-multiple",
      color: "#ff9800",
      details: [
        { label: "Pendaftaran Ulang Diterima", date: "1-15 Mei 2024" },
        { label: "Pembayaran Uang Pangkal", date: "1-20 Mei 2024" },
        { label: "Pengiriman Perlengkapan", date: "21-31 Mei 2024" },
        { label: "Orientasi Santri Baru", date: "1-10 Juni 2024" },
      ],
    },
    {
      phase: "Fase 4: Tahun Ajaran Baru",
      period: "Mulai 15 Juni 2024",
      icon: "mdi:school",
      color: "#9c27b0",
      details: [
        { label: "Upacara Pembukaan", date: "15 Juni 2024" },
        { label: "Pembelajaran Dimulai", date: "17 Juni 2024" },
        { label: "Adaptasi & Pengenalan", date: "17-30 Juni 2024" },
        { label: "Pembelajaran Reguler", date: "1 Juli 2024" },
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
              Jadwal Penting
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mt: 1,
                fontWeight: 700,
                color: "#001a4d",
              }}
            >
              Jadwal Pendaftaran 2024/2025
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
              Ikuti jadwal pendaftaran dengan cermat agar tidak ketinggalan kesempatan
            </Typography>
          </Box>

          {/* Schedule Grid */}
          <Grid container spacing={3}>
            {schedules.map((schedule, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <Card
                  sx={{
                    p: 3,
                    height: "100%",
                    background: `linear-gradient(135deg, ${alpha(schedule.color, 0.08)} 0%, ${alpha(schedule.color, 0.02)} 100%)`,
                    border: "1px solid",
                    borderColor: alpha(schedule.color, 0.2),
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: schedule.color,
                      boxShadow: `0 12px 32px ${alpha(schedule.color, 0.15)}`,
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
                            background: alpha(schedule.color, 0.15),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Iconify
                            icon={schedule.icon}
                            width={20}
                            sx={{ color: schedule.color }}
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
                            {schedule.phase}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "text.secondary",
                              fontWeight: 600,
                            }}
                          >
                            {schedule.period}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    {/* Details */}
                    <Stack spacing={2} sx={{ flex: 1 }}>
                      {schedule.details.map((detail, didx) => (
                        <Box
                          key={didx}
                          sx={{
                            p: 2,
                            borderRadius: 1,
                            background: alpha(schedule.color, 0.05),
                            border: "1px solid",
                            borderColor: alpha(schedule.color, 0.1),
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: 2,
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 600,
                                color: "#001a4d",
                              }}
                            >
                              {detail.label}
                            </Typography>
                            <Chip
                              icon={<Iconify icon="mdi:calendar" width={16} />}
                              label={detail.date}
                              size="small"
                              sx={{
                                background: alpha(schedule.color, 0.15),
                                color: schedule.color,
                                fontWeight: 600,
                                fontSize: "0.75rem",
                              }}
                            />
                          </Box>
                        </Box>
                      ))}
                    </Stack>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Important Notes */}
          <Card
            sx={{
              p: 3,
              background: alpha("#f44336", 0.05),
              border: "2px solid",
              borderColor: alpha("#f44336", 0.2),
            }}
          >
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Iconify
                  icon="mdi:alert-circle"
                  width={24}
                  sx={{ color: "#f44336" }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 700,
                    color: "#001a4d",
                  }}
                >
                  Catatan Penting
                </Typography>
              </Box>
              <Stack spacing={1}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  • Jadwal dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  • Pastikan Anda mengikuti semua tahapan sesuai jadwal yang telah ditentukan
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  • Keterlambatan dalam pendaftaran dapat mengakibatkan pembatalan pendaftaran
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  • Ikuti update terbaru melalui website dan media sosial resmi kami
                </Typography>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
