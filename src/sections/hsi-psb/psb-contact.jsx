import { m } from "framer-motion";

import { Box, Card, Stack, alpha, Button, Container, Typography } from "@mui/material";

import { Iconify } from "src/components/iconify";

export default function PSBContact() {
  const contactInfo = [
    {
      icon: "mdi:phone",
      label: "Telepon",
      value: "+62 895-2451-3151",
      color: "#2196F3",
    },
    {
      icon: "mdi:email",
      label: "Email",
      value: "smait@hsi.id",
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
                  Hubungi Kami
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
                  Kontak Kami
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: alpha('#1C252E', 0.85),
                    maxWidth: "600px",
                    mx: "auto",
                    fontSize: "1.05rem",
                    lineHeight: 1.7,
                  }}
                >
                  Hubungi kami untuk informasi lebih lanjut tentang pendaftaran dan program HSI Boarding School
                </Typography>
              </m.div>
            </Box>

            {/* Contact Cards Grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 4,
                maxWidth: "600px",
                mx: "auto",
                width: "100%",
              }}
            >
              {contactInfo.map((contact, idx) => (
                <m.div key={idx} variants={itemVariants}>
                  <Card
                    sx={{
                      p: 4,
                      height: "100%",
                      minHeight: "200px",
                      background: alpha('#F4F6F8', 0.9),
                      border: `1px solid ${alpha(contact.color, 0.2)}`,
                      borderRadius: "16px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        background: `linear-gradient(90deg, ${contact.color} 0%, transparent 100%)`,
                      },
                      "&:hover": {
                        borderColor: contact.color,
                        boxShadow: `0 20px 40px ${alpha(contact.color, 0.2)}`,
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <Stack spacing={3} sx={{ alignItems: "center" }}>
                      {/* Icon */}
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: "12px",
                          background: alpha(contact.color, 0.15),
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Iconify
                          icon={contact.icon}
                          width={36}
                          sx={{ color: contact.color }}
                        />
                      </Box>

                      {/* Label */}
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: alpha('#1C252E', 0.7),
                          fontWeight: 600,
                          fontSize: "0.9rem",
                        }}
                      >
                        {contact.label}
                      </Typography>

                      {/* Value */}
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#1C252E",
                          fontWeight: 800,
                          fontSize: "1.1rem",
                        }}
                      >
                        {contact.value}
                      </Typography>

                      {/* Decorative Dot */}
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: contact.color,
                          mt: 1,
                        }}
                      />
                    </Stack>
                  </Card>
                </m.div>
              ))}
            </Box>

            {/* CTA Button */}
            <m.div variants={itemVariants}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  component="a"
                  href="https://link.rotator.biz.id/tanya-psb"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<Iconify icon="mdi:whatsapp" width={24} />}
                  sx={{
                    background: "linear-gradient(135deg, #2196F3 0%, #64B5F6 100%)",
                    color: "#ffffff",
                    fontWeight: 800,
                    fontSize: "1rem",
                    py: 2,
                    px: 6,
                    borderRadius: "12px",
                    textTransform: "none",
                    transition: "all 0.3s ease",
                    boxShadow: `0 12px 32px ${alpha("#2196F3", 0.3)}`,
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: `0 20px 48px ${alpha("#2196F3", 0.4)}`,
                    },
                  }}
                >
                  Hubungi Kami Sekarang
                </Button>
              </Box>
            </m.div>
          </Stack>
        </m.div>
      </Container>
    </Box>
  );
}
