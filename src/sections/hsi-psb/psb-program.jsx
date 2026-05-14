import { Box, Card, Stack, alpha, Container, Typography } from "@mui/material";

import { Iconify } from "src/components/iconify";

export default function PSBProgram() {
  const programs = [
    {
      title: "Program Diniyah",
      icon: "mdi:book-open-variant",
      items: ["Hafalan al qur'an", "Hafalan mutun", "Syarah mutun Fiqih", "Aqidah dan HSI Akademi"],
      color: "#2196F3",
    },
    {
      title: "Program IT",
      icon: "mdi:laptop",
      items: ["Web Programming", "AI Technology", "Networking", "Design"],
      color: "#64B5F6",
    },
    {
      title: "Program Bahasa",
      icon: "mdi:translate",
      items: ["Bahasa Arab", "Bahasa Inggris", "Conversation Skills", "Public Speaking Skill"],
      color: "#42A5F5",
    },
    {
      title: "Program Tambahan",
      icon: "mdi:star",
      items: ["OSIS", "Internship", "LDKS"],
      color: "#1E88E5",
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
              Program Unggulan
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
              Sinergi Ilmu Syar&apos;i dan Keahlian Profesional
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
              Program unggulan kami dirancang khusus untuk mencetak lulusan yang kokoh secara akidah, fasih berbahasa, dan ahli dalam bidang teknologi informasi.
            </Typography>
          </Box>

          {/* Programs Grid - Equal Size Cards */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr" },
              gap: 4,
            }}
          >
            {programs.map((program, idx) => (
              <Card
                key={idx}
                sx={{
                  p: 4,
                  height: "100%",
                  background: alpha('#F4F6F8', 0.9),
                  border: `1px solid ${alpha(program.color, 0.2)}`,
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
                    background: `linear-gradient(90deg, ${program.color} 0%, transparent 100%)`,
                  },
                  "&:hover": {
                    borderColor: program.color,
                    boxShadow: `0 20px 40px ${alpha(program.color, 0.2)}`,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Stack spacing={4} sx={{ flex: 1 }}>
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "12px",
                      background: alpha(program.color, 0.15),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Iconify
                      icon={program.icon}
                      width={32}
                      sx={{ color: program.color }}
                    />
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: "#1C252E",
                      fontSize: "1.5rem",
                    }}
                  >
                    {program.title}
                  </Typography>

                  {/* Items List */}
                  <Stack spacing={2.5} sx={{ flex: 1 }}>
                    {program.items.map((item, itemIdx) => (
                      <Box
                        key={itemIdx}
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
                            background: program.color,
                            mt: 1,
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: alpha('#1C252E', 0.85),
                            fontSize: "0.95rem",
                            lineHeight: 1.6,
                          }}
                        >
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>

                  {/* Decorative Dot at Bottom */}
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: program.color,
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
