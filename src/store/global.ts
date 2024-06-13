import { ApiService } from '@api';
import { DoctorsStore } from '@doctors/doctors.store';
import { AuthStore } from '@auth/auth.store';
import { DepartmentsStore } from '@departments/departments.store';

/**
 * Global store
 */
class GlobalStore {
  public api: ApiService;
  public auth: AuthStore;
  public departments: DepartmentsStore;
  public doctors: DoctorsStore;

  constructor() {
    this.api = new ApiService();
    this.auth = new AuthStore(this);
    this.departments = new DepartmentsStore(this);
    this.doctors = new DoctorsStore(this);
  }
}

export { GlobalStore };
