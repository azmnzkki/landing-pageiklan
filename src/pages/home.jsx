import { Helmet } from 'react-helmet-async';

import HSIPSBPage from './hsi-psb';

// ----------------------------------------------------------------------

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>PSB HSI Boarding School 2026/2027 - Pendaftaran Santri Baru SMA</title>
        <meta
          name="description"
          content="Pendaftaran Siswa Baru SMA HSI Boarding School TA 2026/2027. Mendidik generasi Qur'ani dengan diniyah, teknologi IT, dan bahasa dalam lingkungan asrama Islami."
        />
      </Helmet>

      <HSIPSBPage />
    </>
  );
}
