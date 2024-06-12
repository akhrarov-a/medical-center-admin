import { FC, PropsWithChildren } from 'react';
import { Header } from './components';

/**
 * <Layout />
 */
const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
  </div>
);

export { Layout };
