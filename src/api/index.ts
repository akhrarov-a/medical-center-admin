import {
  AuthService,
  DepartmentsService,
  DoctorsService,
  HttpService,
  NursesService
} from './services';

/**
 * Api service
 */
class ApiService {
  private http = new HttpService(import.meta.env.API_URL);

  public auth = new AuthService(this.http);
  public departments = new DepartmentsService(this.http);
  public doctors = new DoctorsService(this.http);
  public nurses = new NursesService(this.http);
}

export { ApiService };
export * from './models';
export * from './services';
