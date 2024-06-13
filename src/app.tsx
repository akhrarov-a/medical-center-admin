import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '@store';
import { Layout } from '@components';
import { hoc } from '@utils';

/**
 * App
 */
const App = hoc.observer(
  useStore,
  ({ auth: { isAuthorized, setIsAuthorized } }) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      const isAuthorizedFromSessionStorage =
        sessionStorage.getItem('isAuthorized');

      if (!isAuthorizedFromSessionStorage) return;

      setIsAuthorized(true);
    }, []);

    useEffect(() => {
      const isAuthorizedFromSessionStorage =
        sessionStorage.getItem('isAuthorized');

      if (isAuthorized || isAuthorizedFromSessionStorage) return;

      navigate('/auth');
    }, [isAuthorized]);

    useEffect(() => {
      if (location.pathname !== '/') return;

      navigate('/doctors');
    }, [location.pathname]);

    return (
      <Layout>
        <Outlet />
      </Layout>
    );
  }
);

export { App };
