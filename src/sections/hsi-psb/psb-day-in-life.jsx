import { Box, Card, Stack, alpha, Container, Typography } from "@mui/material";

import { Iconify } from "src/components/iconify";

export default function PSBDayInLife() {
  const schedule = [
    {
      time: "03:30 – 05:00",
      activity: "Menjemput Berkah di Sepertiga Malam",
      description: "Mengawali hari dengan Qiyamul Lail dan shalat Subuh berjamaah untuk mengisi energi spiritual sebelum memulai aktivitas.",
      icon: "mdi:moon-waning-crescent",
      color: "#2196F3",
    },
    {
      time: "05:00 – 06:00",
      activity: "Menanam Ayat dalam Sanubari (Tahfidz)",
      description: "Memanfaatkan kesegaran pikiran di pagi hari untuk menghafal Al-Qur'an, mempermudah ayat demi ayat terpatri kuat dalam ingatan.",
      icon: "mdi:book-open-variant",
      color: "#64B5F6",
    },
    {
      time: "06:00 – 07:30",
      activity: "Persiapan Diri & Lingkungan",
      description: "Waktu bagi santri untuk sarapan, menjaga kebersihan asrama melalui piket pagi, dan bersiap diri sebelum memasuki jam pelajaran.",
      icon: "mdi:shower",
      color: "#42A5F5",
    },
    {
      time: "07:30 – 10:15",
      activity: "Sesi Akademik & Penguatan Disiplin",
      description: "Diawali dengan Thabur Shabah (apel pagi) untuk memacu semangat dan motivasi belajar santri sebelum mendalami materi akademik di kelas.",
      icon: "mdi:school",
      color: "#1E88E5",
    },
    {
      time: "10:15 – 11:30",
      activity: "Istirahat Sejenak (Qailulah)",
      description: "Mengambil sunnah tidur siang sejenak untuk mengembalikan stamina dan fokus di tengah padatnya jadwal kegiatan.",
      icon: "mdi:sleep",
      color: "#2196F3",
    },
    {
      time: "12:00 – 12:30",
      activity: "Ishoma (Istirahat, Shalat, Makan)",
      description: "Jedah tengah hari untuk menunaikan shalat Zhuhur berjamaah dan menikmati makan siang bersama untuk menjaga asupan nutrisi.",
      icon: "mdi:silverware-fork-knife",
      color: "#64B5F6",
    },
    {
      time: "13:00 – 15:00",
      activity: "Pendalaman Materi (KBM Sesi II)",
      description: "Melanjutkan proses belajar mengajar dengan fokus pada materi-materi pengembangan kompetensi santri.",
      icon: "mdi:laptop",
      color: "#42A5F5",
    },
    {
      time: "15:00 – 17:00",
      activity: "Ibadah & Aktualisasi Diri",
      description: "Setelah shalat Ashar berjamaah, santri memiliki waktu luang untuk berolahraga, bersosialisasi, atau menjalankan hobi pribadi demi menjaga keseimbangan mental.",
      icon: "mdi:basketball",
      color: "#1E88E5",
    },
    {
      time: "17:00 – 17:30",
      activity: "Persiapan Malam",
      description: "Waktu mandi dan makan malam sebagai persiapan sebelum memasuki rangkaian ibadah malam.",
      icon: "mdi:shower",
      color: "#2196F3",
    },
    {
      time: "18:00 – 19:00",
      activity: "Halaqah Qur'an: Menjaga Hafalan",
      description: "Momen muraja'ah atau mengulang kembali hafalan yang telah disetorkan di pagi hari guna memperkuat ingatan (itqan).",
      icon: "mdi:book-open-variant",
      color: "#64B5F6",
    },
    {
      time: "19:30 – 21:00",
      activity: "Menyelami Warisan Ilmu (Hifdzul Mutun)",
      description: "Setelah Isya, santri fokus menghafal serta membedah makna kitab-kitab para ulama (Thalibul Ilmi) secara bertahap.",
      icon: "mdi:book",
      color: "#42A5F5",
    },
    {
      time: "21:00 – 21:30",
      activity: "Melepas Lelah, Menuju Esok",
      description: "Waktu istirahat total untuk memulihkan energi agar siap kembali berjuang menuntut ilmu keesokan harinya.",
      icon: "mdi:bed",
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
              Rutinitas Harian
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
              Daily activity santri di HSI Boarding School
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
              Menyelami Ritme Hidup Penuntut Ilmu: Sinergi Harmonis antara Disiplin Akademik, Pembinaan Ruhiyah, dan Pengasahan Soft Skill.
            </Typography>
          </Box>

          {/* Timeline */}
          <Stack spacing={3}>
            {schedule.map((item, idx) => (
              <Card
                key={idx}
                sx={{
                  p: 4,
                  background: alpha('#F4F6F8', 0.9),
                  border: `1px solid ${alpha(item.color, 0.2)}`,
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
                    background: `linear-gradient(90deg, ${item.color} 0%, transparent 100%)`,
                  },
                  "&:hover": {
                    borderColor: item.color,
                    boxShadow: `0 20px 40px ${alpha(item.color, 0.2)}`,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Stack direction={{ xs: "column", sm: "row" }} spacing={4} alignItems={{ xs: "flex-start", sm: "flex-start" }}>
                  {/* Time & Icon */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2,
                      minWidth: { xs: "100%", sm: 120 },
                    }}
                  >
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: "12px",
                        background: alpha(item.color, 0.15),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: `2px solid ${alpha(item.color, 0.3)}`,
                      }}
                    >
                      <Iconify
                        icon={item.icon}
                        width={32}
                        sx={{ color: item.color }}
                      />
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 700,
                        color: item.color,
                        textAlign: "center",
                        fontSize: "0.85rem",
                      }}
                    >
                      {item.time}
                    </Typography>
                  </Box>

                  {/* Content */}
                  <Box flex={1}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 800,
                        color: "#1C252E",
                        mb: 1,
                      }}
                    >
                      {item.activity}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: alpha('#1C252E', 0.85),
                        lineHeight: 1.7,
                        fontSize: "0.95rem",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            ))}
          </Stack>

          {/* Summary */}
          <Card
            sx={{
              p: 4,
              background: alpha('#F4F6F8', 0.9),
              border: `1px solid ${alpha("#2196F3", 0.2)}`,
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
            <Stack spacing={3}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  color: "#1C252E",
                }}
              >
                Keseimbangan Sempurna
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: alpha('#1C252E', 0.85),
                  lineHeight: 1.8,
                  fontSize: "0.95rem",
                }}
              >
                Jadwal harian santri dirancang untuk menciptakan keseimbangan sempurna antara pembelajaran akademik, pengembangan spiritual, aktivitas fisik, dan istirahat yang cukup. Setiap kegiatan memiliki tujuan edukatif dan mendukung pertumbuhan holistik santri. (Jadwal ini flexible bisa berubah sewaktu2 sesuai dengan waktu sholat dan kegiatan2 yang ada)
              </Typography>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
