import { Helmet } from 'react-helmet-async';

import { Box } from '@mui/material';

import PSBFaq from 'src/sections/hsi-psb/psb-faq';
import PSBCta from 'src/sections/hsi-psb/psb-cta';
import PSBHero from 'src/sections/hsi-psb/psb-hero';
import PSBAbout from 'src/sections/hsi-psb/psb-about';
import PSBCampus from 'src/sections/hsi-psb/psb-campus';
import PSBProgram from 'src/sections/hsi-psb/psb-program';
import PSBGallery from 'src/sections/hsi-psb/psb-gallery';
import PSBContact from 'src/sections/hsi-psb/psb-contact';
import PSBDayInLife from 'src/sections/hsi-psb/psb-day-in-life';
import PSBRequirements from 'src/sections/hsi-psb/psb-requirements';
import PSBRegistration from 'src/sections/hsi-psb/psb-registration';
import PSBRegistrationFlow from 'src/sections/hsi-psb/psb-registration-flow';

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
        <Box id="tentang">
          <PSBAbout />
        </Box>
        <Box id="program">
          <PSBProgram />
        </Box>
        <PSBDayInLife />
        <Box id="kampus">
          <PSBCampus />
        </Box>
        <PSBRegistration />
        <PSBRequirements />
        <PSBRegistrationFlow />
        <PSBGallery />
        <Box id="faq">
          <PSBFaq />
        </Box>
        <Box id="kontak">
          <PSBContact />
        </Box>
        <PSBCta />
      </Box>
    </>
  );
}
