import { LoginCredentials, UserContract } from '@api';
import { HttpService } from './http.service';

/**
 * Auth service
 */
class AuthService {
  private mockCredentials = {
    email: 'test@gmail.com',
    password: 'test1234'
  };

  constructor(private http: HttpService) {}

  /**
   * Login
   */
  public login = async (data: LoginCredentials) =>
    new Promise((resolve, reject) => {
      if (
        data.email === this.mockCredentials.email &&
        data.password === this.mockCredentials.password
      ) {
        resolve(true);

        return;
      }

      reject();
    });

  /**
   * Log out
   */
  public logout = async () => {};

  /**
   * Get user
   */
  public getUser = () => new Promise(resolve => resolve({} as UserContract));
}

export { AuthService };
