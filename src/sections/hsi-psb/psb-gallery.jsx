import { m } from "framer-motion";

import { Box, Card, Stack, alpha, Button, Container, Typography } from "@mui/material";

import { Iconify } from "src/components/iconify";

export default function PSBGallery() {
  const activities = [
    {
      title: "HSI Tree Climbing",
      image: "/assets/background/hsi-tree-climbing.jpg",
      description: "Kegiatan outdoor yang menantang dan membangun keberanian santri",
      link: "https://photos.google.com/share/AF1QipOBFtCMwMstb7nGiN4pOm5cs8faOrQ1aO88CzRayX9-KQ0h0LLyt8YLv8M6dyKnpw?key=ODlMcEswOEp3cHp5V0ppMTF1bi1JT19MUXFyWWl3",
      color: "#64B5F6",
      icon: "mdi:tree",
    },
    {
      title: "Farewell Party with GE",
      image: "/assets/background/farewell-party.jpg",
      description: "Momen spesial perpisahan dengan guru dan teman-teman",
      link: "https://photos.google.com/share/AF1QipOBj4PvCLBD0dXwQJAnppwAgcB8e1hkzhI8bcuFuyhlJlHycawyFI8BME-UwLh06g?key=SzctVVVNNUZEaVhycmozTmh0WmZ6VThsS3VVc3RB",
      color: "#64B5F6",
      icon: "mdi:party-popper",
    },
    {
      title: "HSIBS Goes to Masjid",
      image: "/assets/background/goestomasjid.jpg",
      description: "Kunjungan ke masjid untuk memperdalam pemahaman spiritual",
      link: "https://photos.google.com/share/AF1QipMOTORk1aP9zjnpdKeAjLrP3PXTOPtT1dmO5Net7EIK9TbiVO9O--F9oFUV6zORFg?key=M3NDcVNleHJKYlJDR2ZMN2NsQVdYSnBSX0dvX3Jn",
      color: "#64B5F6",
      icon: "mdi:mosque",
    },
    {
      title: "Nusantara Spirit Day",
      image: "/assets/background/nusantara-spirit.JPG",
      description: "Perayaan semangat kebangsaan dan budaya nusantara",
      link: "https://photos.google.com/share/AF1QipOStgR-WEcQI-wehg9NE9CzLIWgkn92vnagSdyr3G1gDgjVvbGQDG_mSALxU-r06Q?key=Y3NaQXVpV0NMOHlBT2JXUm5CSEVJdTRGUkdXWmN3",
      color: "#64B5F6",
      icon: "mdi:flag",
    },
    {
      title: "Kunjungan Panti Asuhan",
      image: "/assets/background/kunjungan-panti.jpg",
      description: "Program sosial berbagi kasih sayang kepada anak-anak panti",
      link: "https://photos.google.com/share/AF1QipOd9o1z3q_YFzFGwkpxZzqx4fzPY7FkMVsrIOhtei3NIFQFE80tSCC3pk-dIcKtyA?key=S05vZkRHb0Zxekh2TFU1Z3ZidjRKdEVBTXF5ZzV3",
      color: "#64B5F6",
      icon: "mdi:heart-handshake",
    },
    {
      title: "Tadabbur Alam",
      image: "/assets/background/tadabur-alam.JPG",
      description: "Refleksi spiritual melalui keindahan alam ciptaan Allah",
      link: "https://photos.google.com/share/AF1QipPnuwRZyFMfYt5AGUNLL8MP69EyhOiKl3pDmey0xZjhl0QwhhwVRdekbQi_ZhRxJQ?key=NGFWSEdaMjlCWDdGNmtsc0dUWlBJRnk3TTF4eGxB",
      color: "#64B5F6",
      icon: "mdi:leaf",
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
    <Box sx={{ py: { xs: 8, md: 12 }, background: '#FFFFFF' }}>
      <Container maxWidth="lg">
        <m.div
          style={{ width: '100%' }}
        >
          <Stack spacing={8}>
            {/* Header */}
            <Box textAlign="center">
              <m.div variants={itemVariants}>
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
                  Galeri Kegiatan
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
                  Momen Berharga Santri HSI
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
                  Dokumentasi kegiatan santri yang penuh makna dan pembelajaran
                </Typography>
              </m.div>
            </Box>

            {/* Gallery Grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
                gap: 4,
              }}
            >
              {activities.map((activity, idx) => (
                <m.div key={idx} variants={itemVariants}>
                  <Card
                    sx={{
                      height: "100%",
                      background: alpha('#F4F6F8', 0.9),
                      border: `1px solid ${alpha(activity.color, 0.2)}`,
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
                        height: "3px",
                        background: `linear-gradient(90deg, ${activity.color} 0%, transparent 100%)`,
                      },
                      "&:hover": {
                        borderColor: activity.color,
                        boxShadow: `0 20px 40px ${alpha(activity.color, 0.2)}`,
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    {/* Image */}
                    <Box
                      sx={{
                        position: "relative",
                        height: 200,
                        overflow: "hidden",
                        background: "#E8E8E8",
                        animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                        "@keyframes pulse": {
                          "0%, 100%": {
                            opacity: 1,
                          },
                          "50%": {
                            opacity: 0.7,
                          },
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={activity.image}
                        alt={activity.title}
                        loading="lazy"
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.05)",
                          },
                        }}
                      />
                    </Box>

                    {/* Content */}
                    <Stack sx={{ p: 4, flex: 1 }} spacing={3}>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 800,
                            color: "#1C252E",
                            mb: 1,
                            fontSize: "1.1rem",
                          }}
                        >
                          {activity.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: alpha('#1C252E', 0.85),
                            lineHeight: 1.7,
                            fontSize: "0.95rem",
                          }}
                        >
                          {activity.description}
                        </Typography>
                      </Box>

                      {/* CTA Button */}
                      <Button
                        component="a"
                        href={activity.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<Iconify icon="mdi:image-multiple" width={20} />}
                        sx={{
                          background: alpha(activity.color, 0.15),
                          color: activity.color,
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          py: 1.5,
                          borderRadius: 1,
                          textTransform: "none",
                          transition: "all 0.3s ease",
                          border: `1px solid ${alpha(activity.color, 0.3)}`,
                          "&:hover": {
                            background: alpha(activity.color, 0.25),
                            borderColor: activity.color,
                          },
                        }}
                      >
                        Lihat Galeri Lengkap
                      </Button>
                    </Stack>
                  </Card>
                </m.div>
              ))}
            </Box>
          </Stack>
        </m.div>
      </Container>
    </Box>
  );
}
