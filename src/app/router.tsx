import { createBrowserRouter } from 'react-router';
import AppContainer from './components/AppContainer';
import AuthenticationPage from '../pages/authentication-page/AuthenticationPage';

export const router = createBrowserRouter([
    {
      path: '/',
      element: <AppContainer />,
    },
    {
      path: '/auth',
      element: <AuthenticationPage />,
    },
  ]);