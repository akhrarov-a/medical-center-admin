import { createBrowserRouter } from 'react-router-dom';
import { Auth } from '@auth';
import { CreateDoctorForm, DoctorsList, UpdateDoctorForm } from '@doctors';
import {
  CreateDepartmentForm,
  DepartmentsList,
  UpdateDepartmentForm
} from '@departments';
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
      },
      {
        path: 'departments',
        children: [
          {
            path: '',
            element: <DepartmentsList />
          },
          {
            path: 'create',
            element: <CreateDepartmentForm />
          },
          {
            path: ':id',
            element: <UpdateDepartmentForm />
          }
        ]
      }
    ]
  }
]);

export { router };
