import { makeAutoObservable, runInAction } from 'mobx';
import { LoginCredentials } from '@api';
import { GlobalStore } from '@store';

/**
 * Auth store
 */
class AuthStore {
  constructor(global: GlobalStore) {
    this.global = global;

    makeAutoObservable(this, {}, { autoBind: true });
  }

  public global: GlobalStore;

  public isLoginError: boolean = false;
  public isAuthorized: boolean = false;

  public setIsAuthorized = (isAuthorized: boolean) => {
    runInAction(() => {
      this.isAuthorized = isAuthorized;
    });
  };

  public login = async (
    credentials: LoginCredentials,
    navigate: (path: string) => void
  ) => {
    try {
      await this.global.api.auth.login(credentials);

      runInAction(() => {
        this.isLoginError = false;
        this.isAuthorized = true;
      });

      sessionStorage.setItem('isAuthorized', 'true');
      navigate('/');
    } catch (error) {
      runInAction(() => {
        this.isLoginError = true;
      });
      console.log('error', error);
    }
  };

  public logout = async (navigate: (path: string) => void) => {
    try {
      await this.global.api.auth.logout();

      runInAction(() => {
        this.isAuthorized = false;
      });

      sessionStorage.removeItem('isAuthorized');

      navigate('/auth');
    } catch (error) {
      console.log('error', error);
    }
  };
}

export { AuthStore };
