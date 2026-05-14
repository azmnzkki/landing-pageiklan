import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navData = [
  { title: 'Beranda', path: '/', icon: <Iconify width={22} icon="solar:home-angle-bold-duotone" /> },
  {
    title: 'Tentang Kami',
    path: '#tentang',
    icon: <Iconify width={22} icon="solar:info-circle-bold-duotone" />,
  },
  {
    title: 'Program',
    path: '#program',
    icon: <Iconify width={22} icon="solar:book-bold-duotone" />,
  },
  {
    title: 'Kampus',
    path: '#kampus',
    icon: <Iconify width={22} icon="solar:buildings-bold-duotone" />,
  },
  {
    title: 'FAQ',
    path: '#faq',
    icon: <Iconify width={22} icon="solar:question-circle-bold-duotone" />,
  },
  {
    title: 'Kontak',
    path: '#kontak',
    icon: <Iconify width={22} icon="solar:phone-bold-duotone" />,
  },
];
