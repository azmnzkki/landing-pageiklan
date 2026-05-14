import { HomePage } from 'src/pages/home';
import { MainLayout } from 'src/layouts/main';

export const routesSection = [
  {
    path: '/',
    Component: () => (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },
];
