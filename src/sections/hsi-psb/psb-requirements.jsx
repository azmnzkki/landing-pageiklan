import { useState } from "react";

import { Box, Stack, alpha, Container, Accordion, Typography, AccordionSummary, AccordionDetails } from "@mui/material";

import { Iconify } from "src/components/iconify";

export default function PSBRequirements() {
  const [expanded, setExpanded] = useState(0);

  const requirements = [
    {
      title: "Persyaratan Umum",
      icon: "mdi:clipboard-check",
      color: "#2196F3",
      items: [
        "Lulusan SMP/MTs/sederajat.",
        "Surat pernyataan: tidak merokok & siap taat aturan.",
        "Dokumen keluarga: KTP orang tua, KK, Akta Kelahiran.",
        "Pas foto 4x6 (background biru).",
        "Surat keterangan: sehat, bebas narkoba, dan kelakuan baik.",
        "Sertifikat prestasi (jika ada).",
        "Hafalan Qur'an 5–10 juz (nilai tambah).",
        "Semua dokumen harus jelas dan dipisah per berkas.",
      ],
    },
    {
      title: "Persyaratan Khusus Beasiswa",
      icon: "mdi:gift",
      color: "#64B5F6",
      items: [
        "Surat Keterangan Tidak Mampu (SKTM) dari desa/kelurahan (bukan RT/RW).",
        "Surat keterangan penghasilan orang tua (dari instansi tempat bekerja atau dari desa).",
        "Foto pemohon di depan rumah (tampak jelas kondisi rumah).",
        "Surat rekomendasi resmi dari Ketua DKM masjid setempat.",
        "Santri jalur aktivis dakwah: wajib surat pernyataan wali santri + pengesahan Ketua Yayasan.",
        "Dokumen beasiswa harus sinkron dengan dokumen penerimaan santri.",
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
              Syarat & Ketentuan
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
              Persyaratan Pendaftaran
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
              Berikut adalah persyaratan lengkap untuk mendaftar sebagai santri baru di HSI Boarding School
            </Typography>
          </Box>

          {/* Requirements Accordion */}
          <Stack spacing={3}>
            {requirements.map((req, idx) => (
              <Accordion
                key={idx}
                expanded={expanded === idx}
                onChange={() => setExpanded(expanded === idx ? -1 : idx)}
                sx={{
                  background: alpha('#F4F6F8', 0.9),
                  border: `1px solid ${alpha(req.color, 0.2)}`,
                  borderRadius: "16px",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, ${req.color} 0%, transparent 100%)`,
                  },
                  "&.Mui-expanded": {
                    borderColor: req.color,
                    boxShadow: `0 20px 40px ${alpha(req.color, 0.2)}`,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<Iconify icon="mdi:chevron-down" width={24} sx={{ color: req.color }} />}
                  sx={{
                    p: 3,
                    background: alpha('#F4F6F8', 0.9),
                    "&:hover": {
                      background: alpha('#F4F6F8', 0.95),
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 3,
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "12px",
                        background: alpha(req.color, 0.15),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Iconify
                        icon={req.icon}
                        width={24}
                        sx={{ color: req.color }}
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 800,
                          color: "#1C252E",
                        }}
                      >
                        {req.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: alpha('#1C252E', 0.7),
                        fontWeight: 600,
                        flexShrink: 0,
                      }}
                    >
                      {req.items.length} item
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 4, pt: 0, background: alpha('#F4F6F8', 0.9) }}>
                  <Stack spacing={2.5}>
                    {req.items.map((item, iidx) => (
                      <Box
                        key={iidx}
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 2.5,
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: req.color,
                            mt: 1,
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: alpha('#1C252E', 0.85),
                            lineHeight: 1.7,
                            fontSize: "0.95rem",
                          }}
                        >
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>

          {/* Important Note */}
          <Box
            sx={{
              p: 4,
              background: alpha("#2196F3", 0.1),
              border: `2px solid ${alpha("#2196F3", 0.3)}`,
              borderRadius: "16px",
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: "linear-gradient(90deg, #2196F3 0%, transparent 100%)",
              },
            }}
          >
            <Stack direction="row" spacing={3} alignItems="flex-start">
              <Iconify
                icon="mdi:alert-circle"
                width={28}
                sx={{ color: "#2196F3", mt: 0.5, flexShrink: 0 }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    color: "#1C252E",
                    mb: 1,
                  }}
                >
                  Penting untuk Diperhatikan
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: alpha('#1C252E', 0.85),
                    lineHeight: 1.7,
                    fontSize: "0.95rem",
                  }}
                >
                  Semua persyaratan harus dipenuhi dan dokumen harus asli atau fotokopi yang telah dilegalisir. Calon santri yang tidak memenuhi persyaratan tidak akan diproses lebih lanjut. Kami berhak melakukan verifikasi ulang terhadap semua dokumen yang diserahkan.
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
