import { useState } from "react";

import { Box, Stack, alpha, Container, Accordion, Typography, AccordionSummary, AccordionDetails } from "@mui/material";

import { Iconify } from "src/components/iconify";

export default function PSBFaq() {
  const [expanded, setExpanded] = useState(0);

  const faqs = [
    {
      question: "Berapa biaya pendaftaran dan SPP per bulan di HSI Boarding School?",
      answer: "Biaya pendaftaran sebesar Rp 700.000. Untuk SPP, jalur reguler Rp 2.000.000/bulan sudah termasuk makan, asrama, dan fasilitas yang memadai.",
      icon: "mdi:cash-multiple",
      color: "#2196F3",
    },
    {
      question: "Apakah orang tua bisa mengunjungi anak selama di pesantren?",
      answer: "Wali santri boleh mengunjungi santri maksimal 1 bulan sekali namun tidak ada batasan khusus terkait waktu.",
      icon: "mdi:family-tree",
      color: "#64B5F6",
    },
    {
      question: "Di mana lokasi HSI Boarding School?",
      answer: "Kampus 1 (Sukabumi): Kelas 11 & 12 Ikhwan, Kampus 2 (Purworejo): Kelas 10 Ikhwan, Kampus 3 (Bekasi): Kelas 10-12 Akhwat.",
      icon: "mdi:map-marker",
      color: "#42A5F5",
    },
    {
      question: "Bagaimana proses seleksi dan kapan pengumuman hasil diterima?",
      answer: "Sistem yang digunakan adalah one day one services, sehingga bisa langsung pengumuman kelulusan jika serangkaian seleksi berjalan lancar.",
      icon: "mdi:clipboard-check",
      color: "#1E88E5",
    },
    {
      question: "Apakah ada program beasiswa dan bagaimana cara mendapatkannya?",
      answer: "Ada, cara mendapatkannya adalah dengan melampirkan SKTM dari pemerintah.",
      icon: "mdi:gift",
      color: "#1565C0",
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, background: '#FFFFFF' }}>
      <Container maxWidth="lg">
        <Stack spacing={6}>
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
              Pertanyaan Umum
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
              FAQ - Pertanyaan yang Sering Diajukan
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
              Temukan jawaban atas pertanyaan-pertanyaan umum tentang HSI Boarding School
            </Typography>
          </Box>

          {/* FAQs Accordion */}
          <Stack spacing={3}>
            {faqs.map((faq, idx) => (
              <Accordion
                key={idx}
                expanded={expanded === idx}
                onChange={() => setExpanded(expanded === idx ? -1 : idx)}
                sx={{
                  background: alpha('#F4F6F8', 0.9),
                  border: `1px solid ${alpha(faq.color, 0.2)}`,
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
                    background: `linear-gradient(90deg, ${faq.color} 0%, transparent 100%)`,
                  },
                  "&.Mui-expanded": {
                    borderColor: faq.color,
                    boxShadow: `0 20px 40px ${alpha(faq.color, 0.2)}`,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<Iconify icon="mdi:chevron-down" width={24} sx={{ color: faq.color }} />}
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
                        background: alpha(faq.color, 0.15),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Iconify
                        icon={faq.icon}
                        width={24}
                        sx={{ color: faq.color }}
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 800,
                        color: "#1C252E",
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 4, pt: 0, background: alpha('#F4F6F8', 0.9) }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: alpha('#1C252E', 0.85),
                      lineHeight: 1.8,
                      fontSize: "0.95rem",
                      ml: 9,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>

          {/* Contact Support */}
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
                height: "4px",
                background: "linear-gradient(90deg, #2196F3 0%, transparent 100%)",
              },
            }}
          >
            <Stack direction="row" spacing={3} alignItems="flex-start">
              <Iconify
                icon="mdi:help-circle"
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
                  Tidak Menemukan Jawaban?
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: alpha('#1C252E', 0.85),
                    lineHeight: 1.7,
                    fontSize: "0.95rem",
                  }}
                >
                  Hubungi tim customer service kami melalui telepon, email, atau chat. Kami siap membantu Anda 24/7.
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
