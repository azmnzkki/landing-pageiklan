import { m } from "framer-motion";

import { Box, Card, Stack, alpha, Button, Container, Typography } from "@mui/material";

import { Iconify } from "src/components/iconify";

export default function PSBContact() {
  const contactInfo = [
    {
      icon: "mdi:whatsapp",
      label: "WhatsApp",
      value: "+62 895-2451-3151",
      color: "#25D366",
      action: "https://link.rotator.biz.id/tanya-psb",
      actionType: "link",
      buttonLabel: "Chat WhatsApp",
    },
    {
      icon: "mdi:email",
      label: "Email",
      value: "smait@hsi.id",
      color: "#64B5F6",
      action: "smait@hsi.id",
      actionType: "email",
      buttonLabel: "Kirim Email",
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
                      minHeight: "240px",
                      background: alpha('#F4F6F8', 0.9),
                      border: `1px solid ${alpha(contact.color, 0.2)}`,
                      borderRadius: "16px",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
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
                    <Stack spacing={3} sx={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
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
                        variant="h6"
                        sx={{
                          color: "#1C252E",
                          fontWeight: 800,
                          fontSize: "1.1rem",
                        }}
                      >
                        {contact.label}
                      </Typography>
                    </Stack>

                    {/* Action Button */}
                    <Button
                      component="a"
                      href={contact.actionType === "email" ? `mailto:${contact.action}` : contact.action}
                      target={contact.actionType === "email" ? undefined : "_blank"}
                      rel={contact.actionType === "email" ? undefined : "noopener noreferrer"}
                      startIcon={<Iconify icon={contact.icon} width={20} />}
                      aria-label={`${contact.buttonLabel} - ${contact.value}`}
                      sx={{
                        background: alpha(contact.color, 0.15),
                        color: contact.color,
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        py: 1.5,
                        minHeight: 44,
                        borderRadius: 1,
                        textTransform: "none",
                        transition: "all 0.3s ease",
                        border: `1px solid ${alpha(contact.color, 0.3)}`,
                        width: "100%",
                        "&:hover": {
                          background: alpha(contact.color, 0.25),
                          borderColor: contact.color,
                          transform: "scale(1.02)",
                        },
                        "&:focus-visible": {
                          outline: `2px solid ${contact.color}`,
                          outlineOffset: "2px",
                        },
                      }}
                    >
                      {contact.buttonLabel}
                    </Button>
                  </Card>
                </m.div>
              ))}
            </Box>

            {/* CTA Button */}
            <m.div variants={itemVariants}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: alpha('#1C252E', 0.7),
                    fontStyle: "italic",
                  }}
                >
                  Klik tombol di atas untuk menghubungi kami langsung
                </Typography>
              </Box>
            </m.div>
          </Stack>
        </m.div>
      </Container>
    </Box>
  );
}
