import { ApiService } from '@api';
import { DoctorsStore } from '@doctors/doctors.store';
import { AuthStore } from '@auth/auth.store';
import { DepartmentsStore } from '@departments/departments.store';
import { NursesStore } from '@nurses/nurses.store.ts';
import { makeAutoObservable, runInAction } from 'mobx';

/**
 * Global store
 */
class GlobalStore {
  public api: ApiService;
  public auth: AuthStore;
  public departments: DepartmentsStore;
  public doctors: DoctorsStore;
  public nurses: NursesStore;

  constructor() {
    this.api = new ApiService();
    this.auth = new AuthStore(this);
    this.departments = new DepartmentsStore(this);
    this.doctors = new DoctorsStore(this);
    this.nurses = new NursesStore(this);

    makeAutoObservable(this, {}, { autoBind: true });
  }

  public loading = false;

  public showLoader = () => {
    runInAction(() => {
      this.loading = true;
    });
  };

  public hideLoader = () => {
    runInAction(() => {
      this.loading = false;
    });
  };
}

export { GlobalStore };
