import { Box, Grid, Card, Stack, alpha, Table, TableRow, Container, TableBody, TableCell, TableHead, Typography, TableContainer } from "@mui/material";

import { Iconify } from "src/components/iconify";

export default function PSBCost() {
  const costBreakdown = [
    {
      category: "Biaya Pendaftaran",
      amount: "Rp 500.000",
      description: "Biaya satu kali untuk proses pendaftaran",
      icon: "mdi:file-document",
      color: "#2196f3",
    },
    {
      category: "Uang Pangkal",
      amount: "Rp 15.000.000",
      description: "Biaya satu kali saat diterima sebagai santri",
      icon: "mdi:cash-multiple",
      color: "#4caf50",
    },
    {
      category: "SPP Bulanan",
      amount: "Rp 2.500.000",
      description: "Biaya operasional bulanan (akademik, asrama, makan)",
      icon: "mdi:calendar-month",
      color: "#ff9800",
    },
    {
      category: "Biaya Tambahan",
      amount: "Rp 500.000 - 1.000.000",
      description: "Untuk kegiatan ekstrakurikuler, wisata, dan acara khusus",
      icon: "mdi:plus-circle",
      color: "#9c27b0",
    },
  ];

  const detailedCost = [
    { item: "Pendaftaran Online", amount: "Rp 500.000" },
    { item: "Uang Pangkal", amount: "Rp 15.000.000" },
    { item: "SPP Bulanan (12 bulan)", amount: "Rp 30.000.000" },
    { item: "Seragam & Perlengkapan", amount: "Rp 3.000.000" },
    { item: "Buku & Alat Tulis", amount: "Rp 1.500.000" },
    { item: "Asuransi Kesehatan", amount: "Rp 1.200.000" },
    { item: "Kegiatan Ekstrakurikuler", amount: "Rp 2.000.000" },
    { item: "Total Tahun Pertama", amount: "Rp 53.200.000", bold: true },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
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
              Transparansi Biaya
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mt: 1,
                fontWeight: 700,
                color: "#001a4d",
              }}
            >
              Struktur Biaya Pendidikan
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
              Kami berkomitmen pada transparansi penuh dalam hal biaya pendidikan
            </Typography>
          </Box>

          {/* Cost Breakdown Cards */}
          <Grid container spacing={3}>
            {costBreakdown.map((cost, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Card
                  sx={{
                    p: 3,
                    height: "100%",
                    background: `linear-gradient(135deg, ${alpha(cost.color, 0.08)} 0%, ${alpha(cost.color, 0.02)} 100%)`,
                    border: "1px solid",
                    borderColor: alpha(cost.color, 0.2),
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: cost.color,
                      boxShadow: `0 8px 24px ${alpha(cost.color, 0.15)}`,
                    },
                  }}
                >
                  <Stack spacing={2} sx={{ height: "100%" }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 1,
                        background: alpha(cost.color, 0.15),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Iconify
                        icon={cost.icon}
                        width={20}
                        sx={{ color: cost.color }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "text.secondary",
                          fontWeight: 600,
                          display: "block",
                        }}
                      >
                        {cost.category}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: cost.color,
                          mt: 0.5,
                        }}
                      >
                        {cost.amount}
                      </Typography>
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.5,
                        flex: 1,
                      }}
                    >
                      {cost.description}
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Detailed Cost Table */}
          <Card
            sx={{
              border: "1px solid",
              borderColor: alpha("#001a4d", 0.1),
            }}
          >
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow
                    sx={{
                      background: alpha("#001a4d", 0.05),
                    }}
                  >
                    <TableCell
                      sx={{
                        fontWeight: 700,
                        color: "#001a4d",
                        borderColor: alpha("#001a4d", 0.1),
                      }}
                    >
                      Item Biaya
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        fontWeight: 700,
                        color: "#001a4d",
                        borderColor: alpha("#001a4d", 0.1),
                      }}
                    >
                      Jumlah
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {detailedCost.map((row, idx) => (
                    <TableRow
                      key={idx}
                      sx={{
                        background:
                          row.bold && idx === detailedCost.length - 1
                            ? alpha("#ff8c00", 0.1)
                            : "transparent",
                        borderColor: alpha("#001a4d", 0.1),
                        "&:hover": {
                          background: alpha("#001a4d", 0.02),
                        },
                      }}
                    >
                      <TableCell
                        sx={{
                          color: row.bold ? "#001a4d" : "text.secondary",
                          fontWeight: row.bold ? 700 : 500,
                          borderColor: alpha("#001a4d", 0.1),
                        }}
                      >
                        {row.item}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          color: row.bold ? "#ff8c00" : "text.secondary",
                          fontWeight: row.bold ? 700 : 500,
                          borderColor: alpha("#001a4d", 0.1),
                        }}
                      >
                        {row.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>

          {/* Payment Methods */}
          <Card
            sx={{
              p: 3,
              background: alpha("#4caf50", 0.05),
              border: "1px solid",
              borderColor: alpha("#4caf50", 0.2),
            }}
          >
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Iconify
                  icon="mdi:credit-card"
                  width={24}
                  sx={{ color: "#4caf50" }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 700,
                    color: "#001a4d",
                  }}
                >
                  Metode Pembayaran
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 1,
                      background: "#ffffff",
                      border: "1px solid",
                      borderColor: alpha("#4caf50", 0.2),
                      textAlign: "center",
                    }}
                  >
                    <Iconify
                      icon="mdi:bank"
                      width={32}
                      sx={{ color: "#4caf50", mb: 1 }}
                    />
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                      Transfer Bank
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 1,
                      background: "#ffffff",
                      border: "1px solid",
                      borderColor: alpha("#4caf50", 0.2),
                      textAlign: "center",
                    }}
                  >
                    <Iconify
                      icon="mdi:wallet"
                      width={32}
                      sx={{ color: "#4caf50", mb: 1 }}
                    />
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                      E-Wallet
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 1,
                      background: "#ffffff",
                      border: "1px solid",
                      borderColor: alpha("#4caf50", 0.2),
                      textAlign: "center",
                    }}
                  >
                    <Iconify
                      icon="mdi:cash"
                      width={32}
                      sx={{ color: "#4caf50", mb: 1 }}
                    />
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                      Tunai
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 1,
                      background: "#ffffff",
                      border: "1px solid",
                      borderColor: alpha("#4caf50", 0.2),
                      textAlign: "center",
                    }}
                  >
                    <Iconify
                      icon="mdi:calendar-check"
                      width={32}
                      sx={{ color: "#4caf50", mb: 1 }}
                    />
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                      Cicilan
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Stack>
          </Card>

          {/* Important Notes */}
          <Card
            sx={{
              p: 3,
              background: alpha("#2196f3", 0.05),
              border: "1px solid",
              borderColor: alpha("#2196f3", 0.2),
            }}
          >
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Iconify
                  icon="mdi:information"
                  width={24}
                  sx={{ color: "#2196f3" }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 700,
                    color: "#001a4d",
                  }}
                >
                  Informasi Penting
                </Typography>
              </Box>
              <Stack spacing={1}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  • Biaya dapat berubah sesuai kebijakan sekolah dan kondisi ekonomi
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  • Tersedia program cicilan untuk uang pangkal dengan persetujuan khusus
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  • Beasiswa tersedia untuk santri berprestasi dan kurang mampu
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  • Hubungi bagian keuangan untuk informasi lebih detail
                </Typography>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
