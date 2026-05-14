import { useState } from "react";

import { Box, Tab, Grid, Card, Tabs, Stack, alpha, Container, Typography } from "@mui/material";

import { Iconify } from "src/components/iconify";

export default function PSBCurriculum() {
  const [activeTab, setActiveTab] = useState(0);

  const curriculumData = [
    {
      name: "Diniyah",
      icon: "mdi:book-open-variant",
      color: "#2196f3",
      subjects: [
        { name: "Al-Qur&apos;an & Tajweed", hours: "10 jam/minggu" },
        { name: "Tafsir & Hadis", hours: "8 jam/minggu" },
        { name: "Fiqih Ibadah", hours: "6 jam/minggu" },
        { name: "Akidah Islamiyah", hours: "4 jam/minggu" },
        { name: "Sirah & Sejarah Islam", hours: "4 jam/minggu" },
        { name: "Adab & Akhlak", hours: "3 jam/minggu" },
      ],
    },
    {
      name: "IT",
      icon: "mdi:laptop",
      color: "#4caf50",
      subjects: [
        { name: "Fundamentals of Programming", hours: "12 jam/minggu" },
        { name: "Web Development", hours: "10 jam/minggu" },
        { name: "Database Management", hours: "8 jam/minggu" },
        { name: "Mobile App Development", hours: "8 jam/minggu" },
        { name: "Data Science & AI", hours: "6 jam/minggu" },
        { name: "Cybersecurity", hours: "4 jam/minggu" },
      ],
    },
    {
      name: "Bahasa",
      icon: "mdi:translate",
      color: "#ff9800",
      subjects: [
        { name: "Bahasa Arab Lisan", hours: "8 jam/minggu" },
        { name: "Bahasa Arab Tulis", hours: "6 jam/minggu" },
        { name: "Bahasa Inggris Conversation", hours: "8 jam/minggu" },
        { name: "Bahasa Inggris Writing", hours: "6 jam/minggu" },
        { name: "Bahasa Mandarin Dasar", hours: "6 jam/minggu" },
        { name: "Conversation Skills", hours: "4 jam/minggu" },
      ],
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
              Kurikulum Detail
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mt: 1,
                fontWeight: 700,
                color: "#1C252E",
              }}
            >
              Struktur Pembelajaran Terintegrasi
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
              Tiga pilar kurikulum yang saling melengkapi untuk pengembangan holistik santri
            </Typography>
          </Box>

          {/* Tabs */}
          <Box sx={{ borderBottom: 1, borderColor: alpha("#ffffff", 0.1) }}>
            <Tabs
              value={activeTab}
              onChange={(e, newValue) => setActiveTab(newValue)}
              sx={{
                "& .MuiTab-root": {
                  fontWeight: 600,
                  fontSize: "1rem",
                  textTransform: "none",
                  minWidth: 120,
                  color: alpha('#1C252E', 0.6),
                },
                "& .Mui-selected": {
                  color: "#2196F3",
                },
                "& .MuiTabs-indicator": {
                  background: "#2196F3",
                },
              }}
            >
              {curriculumData.map((item, idx) => (
                <Tab
                  key={idx}
                  label={item.name}
                  icon={<Iconify icon={item.icon} width={20} />}
                  iconPosition="start"
                />
              ))}
            </Tabs>
          </Box>

          {/* Content */}
          <Box>
            {curriculumData.map((curriculum, idx) => (
              <Box
                key={idx}
                sx={{
                  display: activeTab === idx ? "block" : "none",
                }}
              >
                <Grid container spacing={3}>
                  {curriculum.subjects.map((subject, sidx) => (
                    <Grid item xs={12} sm={6} md={4} key={sidx}>
                      <Card
                        sx={{
                          p: 3,
                          background: alpha('#F4F6F8', 0.8),
                          border: "1px solid",
                          borderColor: alpha(curriculum.color, 0.2),
                          transition: "all 0.3s ease",
                          "&:hover": {
                            borderColor: curriculum.color,
                            boxShadow: `0 8px 24px ${alpha(curriculum.color, 0.15)}`,
                          },
                        }}
                      >
                        <Stack spacing={2}>
                          {/* Subject Name */}
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 700,
                              color: "#1C252E",
                            }}
                          >
                            {subject.name}
                          </Typography>

                          {/* Hours */}
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                              p: 1.5,
                              borderRadius: 1,
                              background: alpha(curriculum.color, 0.1),
                            }}
                          >
                            <Iconify
                              icon="mdi:clock-outline"
                              width={20}
                              sx={{ color: curriculum.color }}
                            />
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 600,
                                color: curriculum.color,
                              }}
                            >
                              {subject.hours}
                            </Typography>
                          </Box>
                        </Stack>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                {/* Summary */}
                <Card
                  sx={{
                    mt: 4,
                    p: 3,
                    background: alpha('#F4F6F8', 0.8),
                    border: "1px solid",
                    borderColor: alpha(curriculum.color, 0.2),
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 1,
                        background: alpha(curriculum.color, 0.15),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Iconify
                        icon={curriculum.icon}
                        width={24}
                        sx={{ color: curriculum.color }}
                      />
                    </Box>
                    <Box flex={1}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 700,
                          color: "#1C252E",
                        }}
                      >
                        Program {curriculum.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: alpha('#1C252E', 0.85),
                          mt: 0.5,
                        }}
                      >
                        Total {curriculum.subjects.length} mata pelajaran dengan total {curriculum.subjects.reduce((acc, s) => acc + parseInt(s.hours), 0)} jam per minggu
                      </Typography>
                    </Box>
                  </Stack>
                </Card>
              </Box>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
