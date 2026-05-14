import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

import { Box, CircularProgress } from '@mui/material';

import PSBHero from 'src/sections/hsi-psb/psb-hero';

// Lazy load heavy components
const PSBAbout = lazy(() => import('src/sections/hsi-psb/psb-about'));
const PSBProgram = lazy(() => import('src/sections/hsi-psb/psb-program'));
const PSBDayInLife = lazy(() => import('src/sections/hsi-psb/psb-day-in-life'));
const PSBCampus = lazy(() => import('src/sections/hsi-psb/psb-campus'));
const PSBRegistration = lazy(() => import('src/sections/hsi-psb/psb-registration'));
const PSBRequirements = lazy(() => import('src/sections/hsi-psb/psb-requirements'));
const PSBRegistrationFlow = lazy(() => import('src/sections/hsi-psb/psb-registration-flow'));
const PSBGallery = lazy(() => import('src/sections/hsi-psb/psb-gallery'));
const PSBFaq = lazy(() => import('src/sections/hsi-psb/psb-faq'));
const PSBContact = lazy(() => import('src/sections/hsi-psb/psb-contact'));
const PSBCta = lazy(() => import('src/sections/hsi-psb/psb-cta'));

// Loading fallback component
const LoadingFallback = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
    <CircularProgress />
  </Box>
);

export default function HSIPSBPage() {
  return (
    <>
      <Helmet>
        <title>PSB HSI Boarding School 2026/2027 - Pendaftaran Santri Baru SMA</title>
        <meta
          name="description"
          content="Pendaftaran Siswa Baru SMA HSI Boarding School TA 2026/2027. Mendidik generasi Qur'ani dengan diniyah, teknologi IT, dan bahasa dalam lingkungan asrama Islami."
        />
      </Helmet>

      <Box>
        <PSBHero />
        <Suspense fallback={<LoadingFallback />}>
          <Box id="tentang">
            <PSBAbout />
          </Box>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Box id="program">
            <PSBProgram />
          </Box>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <PSBDayInLife />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Box id="kampus">
            <PSBCampus />
          </Box>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <PSBRegistration />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <PSBRequirements />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <PSBRegistrationFlow />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <PSBGallery />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Box id="faq">
            <PSBFaq />
          </Box>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Box id="kontak">
            <PSBContact />
          </Box>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <PSBCta />
        </Suspense>
      </Box>
    </>
  );
}
