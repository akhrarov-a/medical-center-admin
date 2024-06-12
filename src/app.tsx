import { Outlet } from 'react-router-dom';
import { Layout } from '@components';

/**
 * App
 */
const App = () => (
  <Layout>
    <Outlet />
  </Layout>
);

export { App };
