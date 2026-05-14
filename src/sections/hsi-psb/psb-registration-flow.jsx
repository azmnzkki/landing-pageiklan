import { m } from "framer-motion";

import { Box, Card, Stack, alpha, Container, Typography } from "@mui/material";

import { Iconify } from "src/components/iconify";

export default function PSBRegistrationFlow() {
  const steps = [
    {
      number: 1,
      title: "Buat Akun",
      description: "Buat akun pendaftaran di website resmi HSI Boarding School",
      items: ["Membuat akun pendaftaran"],
      icon: "mdi:account-plus",
      color: "#64B5F6",
    },
    {
      number: 2,
      title: "Lengkapi Data",
      description: "Lengkapi data pribadi calon santri dan upload dokumen yang diperlukan",
      items: [
        "Akta kelahiran",
        "KTP Orang Tua",
        "Kartu Keluarga",
        "Pas photo 80% wajah, background biru",
        "SKTM (Khusus Beasiswa)",
        "Sertifikat prestasi (jika ada)",
      ],
      icon: "mdi:file-document-multiple",
      color: "#64B5F6",
    },
    {
      number: 3,
      title: "Pembayaran",
      description: "Lakukan pembayaran biaya pendaftaran dan ikuti tes seleksi",
      items: [
        "Pembayaran biaya pendaftaran sebesar Rp 700.000",
        "Tes baca Al-Qur'an",
        "Tes tulis akademik",
        "Wawancara dengan orang tua",
        "Tes lainnya (jika dibutuhkan)",
      ],
      icon: "mdi:credit-card",
      color: "#64B5F6",
    },
    {
      number: 4,
      title: "Hasil Seleksi",
      description: "Menunggu pengumuman hasil seleksi dan daftar ulang",
      items: [
        "Pengumuman hasil seleksi dalam 7-14 hari kerja",
        "Notifikasi melalui WhatsApp",
        "Melakukan daftar ulang jika diterima",
        "Persiapan masuk asrama",
      ],
      icon: "mdi:check-circle",
      color: "#64B5F6",
    },
  ];

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
    <Box sx={{ py: { xs: 8, md: 12 }, background: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <m.div style={{ width: "100%" }}>
          <Stack spacing={8}>
            {/* Header */}
            <Box textAlign="center">
              <m.div variants={itemVariants}>
                <Typography
                  variant="overline"
                  sx={{
                    color: "#64B5F6",
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    display: "block",
                    mb: 2,
                  }}
                >
                  Proses Pendaftaran
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
                  Bagaimana Alur Pendaftarannya?
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: alpha("#1C252E", 0.85),
                    maxWidth: "700px",
                    mx: "auto",
                    fontSize: "1.05rem",
                    lineHeight: 1.7,
                  }}
                >
                  Ikuti langkah-langkah mudah berikut untuk mendaftar di HSI Boarding School
                </Typography>
              </m.div>
            </Box>

            {/* Timeline Steps */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: { xs: 3, md: 4 },
              }}
            >
              {steps.map((step, idx) => (
                <m.div key={idx} variants={itemVariants}>
                  <Card
                    sx={{
                      height: "100%",
                      background: alpha("#F4F6F8", 0.9),
                      border: `1px solid ${alpha(step.color, 0.2)}`,
                      borderRadius: "16px",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: `linear-gradient(90deg, ${step.color} 0%, transparent 100%)`,
                      },
                      "&:hover": {
                        borderColor: step.color,
                        boxShadow: `0 20px 40px ${alpha(step.color, 0.15)}`,
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    {/* Step Header */}
                    <Box
                      sx={{
                        p: 3,
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 2.5,
                        borderBottom: `1px solid ${alpha(step.color, 0.1)}`,
                      }}
                    >
                      {/* Step Number Circle */}
                      <Box
                        sx={{
                          minWidth: 48,
                          width: 48,
                          height: 48,
                          borderRadius: "50%",
                          background: alpha(step.color, 0.15),
                          border: `2px solid ${step.color}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 800,
                            color: step.color,
                            fontSize: "1.2rem",
                          }}
                        >
                          {step.number}
                        </Typography>
                      </Box>

                      {/* Title and Icon */}
                      <Box sx={{ flex: 1 }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            mb: 0.5,
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 800,
                              color: "#1C252E",
                              fontSize: "1.1rem",
                            }}
                          >
                            {step.title}
                          </Typography>
                          <Iconify
                            icon={step.icon}
                            width={24}
                            sx={{ color: step.color }}
                          />
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{
                            color: alpha("#1C252E", 0.7),
                            fontSize: "0.9rem",
                            lineHeight: 1.5,
                          }}
                        >
                          {step.description}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Step Items */}
                    <Stack sx={{ p: 3, gap: 1.5, flex: 1 }}>
                      {step.items.map((item, itemIdx) => (
                        <Box
                          key={itemIdx}
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 1.5,
                          }}
                        >
                          <Box
                            sx={{
                              minWidth: 6,
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              background: step.color,
                              mt: 1,
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              color: alpha("#1C252E", 0.85),
                              fontSize: "0.95rem",
                              lineHeight: 1.6,
                              flex: 1,
                            }}
                          >
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Card>
                </m.div>
              ))}
            </Box>

            {/* Additional Info */}
            <Box
              sx={{
                background: alpha("#64B5F6", 0.08),
                border: `1px solid ${alpha("#64B5F6", 0.2)}`,
                borderRadius: "12px",
                p: 3,
              }}
            >
              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                <Iconify
                  icon="mdi:information"
                  width={24}
                  sx={{ color: "#64B5F6", mt: 0.5, flexShrink: 0 }}
                />
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 700,
                      color: "#1C252E",
                      mb: 1,
                    }}
                  >
                    Berkas Tambahan (Diupload saat Daftar Ulang)
                  </Typography>
                  <Stack spacing={0.8}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: alpha("#1C252E", 0.85),
                        fontSize: "0.95rem",
                      }}
                    >
                      • Surat pernyataan orang tua (format disediakan)
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: alpha("#1C252E", 0.85),
                        fontSize: "0.95rem",
                      }}
                    >
                      • Surat pernyataan santri (format disediakan)
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Box>

            {/* CTA Button */}
            <m.div variants={itemVariants}>
              <Box textAlign="center">
                <Box
                  component="a"
                  href="https://psb.hsiboardingschool.id/auth/auth-user"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "inline-block",
                    background: "#64B5F6",
                    color: "#ffffff",
                    fontWeight: 700,
                    px: 6,
                    py: 2,
                    borderRadius: "12px",
                    fontSize: "1.05rem",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                    cursor: "pointer",
                    "&:hover": {
                      background: "#1E88E5",
                      boxShadow: `0 12px 32px ${alpha("#64B5F6", 0.4)}`,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Daftar Sekarang
                </Box>
              </Box>
            </m.div>
          </Stack>
        </m.div>
      </Container>
    </Box>
  );
}
