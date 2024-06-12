import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from '@dashboard';
import { Auth } from '@auth';
import { CreateDoctorForm, DoctorsList, UpdateDoctorForm } from '@doctors';
import { App } from './app';

/**
 * Router
 */
const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Auth />
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Dashboard />
      },
      {
        path: 'doctors',
        children: [
          {
            path: '',
            element: <DoctorsList />
          },
          {
            path: 'create',
            element: <CreateDoctorForm />
          },
          {
            path: ':id',
            element: <UpdateDoctorForm />
          }
        ]
      }

    ]
  }
]);

export { router };
