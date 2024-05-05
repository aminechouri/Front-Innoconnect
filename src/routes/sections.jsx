import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const NewPage = lazy(() => import('src/pages/landingPage/Home'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const SignupPage = lazy(() => import('src/pages/signup'));
export const ForgotpwdPage = lazy(() => import('src/pages/forgotpwd'));
export const About = lazy(() => import('src/pages/landingPage/About'));
export const Contact = lazy(() => import('src/pages/landingPage/Contact'));
export const Services = lazy(() => import('src/pages/landingPage/Services'));
export const IdeaPage = lazy(() => import('src/pages/idea'));
export const ProfilPage = lazy(() => import ('src/pages/profil'));
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { path: 'dashboard', element: <IndexPage />  },
        { path: 'user', element: <UserPage /> },
        { path: 'ideas', element: <ProductsPage /> },
        { path: 'forum', element: <BlogPage /> },
        { path: 'idea', element: <IdeaPage /> },
        { path: 'profil', element: <ProfilPage /> }
        
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'signup',
      element: <SignupPage />,
    },
    {
      path: 'forgotpwd',
      element: <ForgotpwdPage />,
    },
    {
      path: 'about',
      element: <About />,
    },
    {
      path: 'contact',
      element: <Contact />,
    },
    {
      path: 'services',
      element: <Services />,
    },
    {
      path: '/',
      element: <NewPage />,
      index: true,
    },
   
  ]);

  return routes;
}