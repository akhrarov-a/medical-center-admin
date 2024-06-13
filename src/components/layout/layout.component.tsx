import { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { hoc } from '@utils';
import { GlobalStore, useStore } from '@store';
import { Header } from './components';

/**
 * <Layout />
 */
const Layout = hoc.observer<PropsWithChildren, GlobalStore>(
  useStore,
  ({ loading, children }) => (
    <div>
      <Header />
      <div>{children}</div>

      <div
        className={classNames('loader', {
          ['loader-loading']: loading
        })}
      />
    </div>
  )
);

export { Layout };
