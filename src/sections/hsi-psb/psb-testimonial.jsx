import { Box, Grid, Card, Stack, alpha, Rating, Container, Typography } from "@mui/material";

import { Iconify } from "src/components/iconify";

export default function PSBTestimonial() {
  const testimonials = [
    {
      name: "Ahmad Rizki",
      role: "Santri Angkatan 2021",
      campus: "Sukabumi Putra",
      rating: 5,
      text: "HSI Boarding School telah mengubah hidup saya. Saya tidak hanya belajar akademik, tetapi juga mengembangkan karakter dan spiritual saya. Guru-guru di sini sangat peduli dan supportif.",
      color: "#2196f3",
    },
    {
      name: "Siti Nurhaliza",
      role: "Santri Angkatan 2020",
      campus: "Bekasi Putri",
      rating: 5,
      text: "Lingkungan belajar yang kondusif dan fasilitas yang lengkap membuat saya nyaman belajar. Program hafalan Al-Qur&apos;an sangat terstruktur dan membantu saya mencapai target hafalan.",
      color: "#4caf50",
    },
    {
      name: "Muhammad Faisal",
      role: "Santri Angkatan 2022",
      campus: "Purworejo Putra",
      rating: 5,
      text: "Program IT di HSI sangat relevan dengan kebutuhan industri. Saya sudah bisa membuat aplikasi dan website. Mentor-mentor kami adalah praktisi berpengalaman.",
      color: "#ff9800",
    },
    {
      name: "Fatimah Az-Zahra",
      role: "Santri Angkatan 2021",
      campus: "Bekasi Putri",
      rating: 5,
      text: "Saya sangat bersyukur bisa belajar di HSI. Tidak hanya akademik, tetapi juga belajar tentang kepemimpinan, tanggung jawab, dan nilai-nilai Islam yang mendalam.",
      color: "#9c27b0",
    },
    {
      name: "Doni Hermawan",
      role: "Santri Angkatan 2020",
      campus: "Sukabumi Putra",
      rating: 5,
      text: "Fasilitas boarding yang nyaman dan makanan yang bergizi membuat saya fokus belajar. Sistem pembelajaran yang terintegrasi membuat saya berkembang secara holistik.",
      color: "#f44336",
    },
    {
      name: "Nisa Putri",
      role: "Santri Angkatan 2022",
      campus: "Bekasi Putri",
      rating: 5,
      text: "HSI memberikan kesempatan untuk mengembangkan bakat dan minat. Saya aktif di organisasi dan ekstrakurikuler sambil tetap fokus pada akademik.",
      color: "#00bcd4",
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
              Suara Santri
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mt: 1,
                fontWeight: 700,
                color: "#001a4d",
              }}
            >
              Testimoni Santri
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
              Pengalaman nyata dari santri-santri kami yang telah merasakan transformasi di HSI Boarding School
            </Typography>
          </Box>

          {/* Testimonials Grid */}
          <Grid container spacing={3}>
            {testimonials.map((testimonial, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <Card
                  sx={{
                    p: 3,
                    height: "100%",
                    background: `linear-gradient(135deg, ${alpha(testimonial.color, 0.08)} 0%, ${alpha(testimonial.color, 0.02)} 100%)`,
                    border: "1px solid",
                    borderColor: alpha(testimonial.color, 0.2),
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: testimonial.color,
                      boxShadow: `0 12px 32px ${alpha(testimonial.color, 0.15)}`,
                    },
                  }}
                >
                  <Stack spacing={2} sx={{ height: "100%" }}>
                    {/* Rating */}
                    <Box>
                      <Rating
                        value={testimonial.rating}
                        readOnly
                        sx={{
                          "& .MuiRating-iconFilled": {
                            color: testimonial.color,
                          },
                        }}
                      />
                    </Box>

                    {/* Quote */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.8,
                        fontStyle: "italic",
                        flex: 1,
                      }}
                    >
                      &quot;{testimonial.text}&quot;
                    </Typography>

                    {/* Author */}
                    <Box
                      sx={{
                        pt: 2,
                        borderTop: "1px solid",
                        borderColor: alpha(testimonial.color, 0.2),
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            background: alpha(testimonial.color, 0.15),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Iconify
                            icon="mdi:account"
                            width={20}
                            sx={{ color: testimonial.color }}
                          />
                        </Box>
                        <Box flex={1}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontWeight: 700,
                              color: "#001a4d",
                            }}
                          >
                            {testimonial.name}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "text.secondary",
                              display: "block",
                            }}
                          >
                            {testimonial.role}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: testimonial.color,
                              fontWeight: 600,
                              display: "block",
                            }}
                          >
                            {testimonial.campus}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Stats */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  p: 3,
                  textAlign: "center",
                  background: alpha("#2196f3", 0.1),
                  border: "1px solid",
                  borderColor: alpha("#2196f3", 0.2),
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    color: "#2196f3",
                  }}
                >
                  3000+
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    display: "block",
                    mt: 0.5,
                  }}
                >
                  Santri Puas
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  p: 3,
                  textAlign: "center",
                  background: alpha("#4caf50", 0.1),
                  border: "1px solid",
                  borderColor: alpha("#4caf50", 0.2),
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    color: "#4caf50",
                  }}
                >
                  98%
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    display: "block",
                    mt: 0.5,
                  }}
                >
                  Rating Kepuasan
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  p: 3,
                  textAlign: "center",
                  background: alpha("#ff9800", 0.1),
                  border: "1px solid",
                  borderColor: alpha("#ff9800", 0.2),
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    color: "#ff9800",
                  }}
                >
                  500+
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    display: "block",
                    mt: 0.5,
                  }}
                >
                  Alumni Sukses
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  p: 3,
                  textAlign: "center",
                  background: alpha("#9c27b0", 0.1),
                  border: "1px solid",
                  borderColor: alpha("#9c27b0", 0.2),
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    color: "#9c27b0",
                  }}
                >
                  20+
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    display: "block",
                    mt: 0.5,
                  }}
                >
                  Tahun Berpengalaman
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
