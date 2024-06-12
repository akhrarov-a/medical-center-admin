import { ApiService } from '@api';
import { DoctorsStore } from '@doctors/doctors.store';
import { AuthStore } from '@auth/auth.store';

/**
 * Global store
 */
class GlobalStore {
  public api: ApiService;
  public auth: AuthStore;
  public doctorsStore: DoctorsStore;

  constructor() {
    this.api = new ApiService();
    this.auth = new AuthStore(this);
    this.doctorsStore = new DoctorsStore();
  }
}

export { GlobalStore };
