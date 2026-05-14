import { m } from "framer-motion";

import { Box, Card, Stack, alpha, Typography } from "@mui/material";

import { Iconify } from "src/components/iconify";

export default function PSBAbout() {
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

  const cardHoverVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(33, 150, 243, 0.2)",
    },
  };

  const visionMissionCards = [
    {
      icon: "mdi:target",
      title: "Visi",
      description: "Membina Generasi Pemimpin yang Beradab, Berilmu, dan Berwawasan Global",
      color: "#2196F3",
    },
    {
      icon: "mdi:compass",
      title: "Misi",
      description: "Belajar Ilmu Al Quran, Mengamalkan Sunnah, dan Berprestasi",
      color: "#64B5F6",
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, background: '#FFFFFF' }}>
      <m.div
        style={{ width: '100%' }}
      >
        {/* Split Screen - Full Width Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6 },
            mb: 12,
            px: { xs: 2, md: 4 },
            maxWidth: "1400px",
            mx: "auto",
          }}
        >
          {/* Left Column - Content (50%) */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <m.div variants={itemVariants}>
              {/* Overline */}
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
                Tentang Kami
              </Typography>

              {/* Main Title with Gradient */}
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  background: "linear-gradient(135deg, #2196F3 0%, #64B5F6 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 4,
                  lineHeight: 1.2,
                }}
              >
                HSI Boarding School
              </Typography>

              {/* Description Paragraphs */}
              <Stack spacing={3}>
                {/* Paragraph 1 */}
                <Typography
                  variant="body1"
                  sx={{
                    color: alpha('#1C252E', 0.85),
                    lineHeight: 1.7,
                    fontSize: "1.05rem",
                    fontWeight: 400,
                  }}
                >
                  HSI Boarding School adalah lembaga pendidikan berbasis asrama yang mengintegrasikan{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "#2196F3",
                      fontWeight: 600,
                    }}
                  >
                    nilai-nilai Islam
                  </Box>{" "}
                  sesuai pemahaman salafush shalih dengan penguasaan{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "#64B5F6",
                      fontWeight: 600,
                    }}
                  >
                    teknologi modern
                  </Box>
                  . Sekolah ini berfokus mencetak &quot;Generasi Rabbani&quot; yang tidak hanya kokoh secara akidah dan adab melalui program tahfidz Al-Qur&apos;an, tetapi juga kompeten di bidang digital seperti AI dan web development.
                </Typography>

                {/* Paragraph 2 */}
                <Typography
                  variant="body1"
                  sx={{
                    color: alpha('#1C252E', 0.85),
                    lineHeight: 1.7,
                    fontSize: "1.05rem",
                    fontWeight: 400,
                  }}
                >
                  Melalui{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "#2196F3",
                      fontWeight: 600,
                    }}
                  >
                    ekosistem digital yang proaktif
                  </Box>
                  , institusi ini mendigitalisasi manajemen pendidikan guna menciptakan lingkungan belajar yang efisien dan kondusif bagi siswa. Secara keseluruhan, HSI Boarding School menjadi solusi bagi orang tua yang menginginkan anak-anaknya tumbuh menjadi ahli teknologi yang tetap memegang teguh prinsip-prinsip syariat Islam.
                </Typography>
              </Stack>
            </m.div>
          </Box>

          {/* Right Column - Visual (50%) */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <m.div variants={itemVariants}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: "300px", md: "450px" },
                  width: "100%",
                }}
              >
                {/* Image with Border Radius */}
                <Box
                  component="img"
                  src="/assets/background/about.jpg"
                  alt="HSI Boarding School"
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "24px",
                    boxShadow: `0 20px 60px ${alpha("#2196F3", 0.2)}`,
                    border: `2px solid ${alpha("#2196F3", 0.1)}`,
                  }}
                />

                {/* Decorative Gradient Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: "24px",
                    background: `linear-gradient(135deg, ${alpha("#2196F3", 0.1)} 0%, ${alpha("#0F1419", 0.3)} 100%)`,
                    pointerEvents: "none",
                  }}
                />
              </Box>
            </m.div>
          </Box>
        </Box>

        {/* Vision & Mission Bento Grid - Full Width */}
        <Box sx={{ px: { xs: 2, md: 4 }, maxWidth: "1400px", mx: "auto" }}>
          <m.div variants={itemVariants}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: "#1C252E",
                mb: 6,
                textAlign: "center",
              }}
            >
              Visi & Misi Kami
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 4,
              }}
            >
              {visionMissionCards.map((card, idx) => (
                <m.div
                  key={idx}
                  variants={cardHoverVariants}
                  whileHover="hover"
                  style={{
                    height: "100%",
                  }}
                >
                  <Card
                    sx={{
                      p: 4,
                      height: "100%",
                      minHeight: "300px",
                      background: alpha('#F4F6F8', 0.9),
                      border: `1px solid ${alpha(card.color, 0.2)}`,
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
                        background: `linear-gradient(90deg, ${card.color} 0%, transparent 100%)`,
                      },
                      "&:hover": {
                        borderColor: card.color,
                        boxShadow: `0 20px 40px ${alpha(card.color, 0.2)}`,
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <Stack spacing={3} sx={{ flex: 1 }}>
                      {/* Icon */}
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: "12px",
                          background: alpha(card.color, 0.15),
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Iconify
                          icon={card.icon}
                          width={32}
                          sx={{ color: card.color }}
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
                        {card.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: alpha('#1C252E', 0.8),
                          lineHeight: 1.7,
                          fontSize: "1rem",
                          flex: 1,
                        }}
                      >
                        {card.description}
                      </Typography>

                      {/* Decorative Dot */}
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: card.color,
                          mt: 2,
                        }}
                      />
                    </Stack>
                  </Card>
                </m.div>
              ))}
            </Box>
          </m.div>
        </Box>
      </m.div>
    </Box>
  );
}
