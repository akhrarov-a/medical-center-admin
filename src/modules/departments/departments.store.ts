import { GlobalStore } from '@store';
import { makeAutoObservable, runInAction } from 'mobx';
import { DepartmentContract } from '@api';
import { DepartmentsAdapter } from './lib';
import { DepartmentForm } from './departments.types';

/**
 * Departments store
 */
class DepartmentsStore {
  constructor(global: GlobalStore) {
    this.global = global;

    makeAutoObservable(this, {}, { autoBind: true });
  }

  public global: GlobalStore;

  public loading: boolean = false;
  public departments: DepartmentContract[] = [];

  public initialValues: DepartmentForm = {} as DepartmentForm;
  public currentDepartmentId: number = 0;

  public clearInitialValues = () => {
    runInAction(() => {
      this.initialValues = {} as DepartmentForm;
      this.currentDepartmentId = 0;
    });
  };

  public getData = async () => {
    runInAction(() => {
      this.loading = true;
    });

    try {
      const response = await this.global.api.departments.getAllDepartments();

      runInAction(() => {
        this.departments = response.data;
      });
    } catch (error) {
      console.log('error', error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  public getDepartmentById = async (id: string) => {
    try {
      const response = await this.global.api.departments.getDepartmentById(id);

      runInAction(() => {
        this.currentDepartmentId = response.data.id;
        this.initialValues =
          DepartmentsAdapter.departmentContractToDepartmentForm(response.data);
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  public createDepartment = async (
    department: DepartmentForm,
    navigate: (path: string) => void
  ) => {
    try {
      const response = await this.global.api.departments.createDepartment(
        DepartmentsAdapter.departmentFormToDepartmentDto(department)
      );

      navigate(`/departments/${response.data.id}`);
    } catch (error) {
      console.log('error', error);
    }
  };

  public updateDepartment = async (
    department: DepartmentForm,
    navigate: (path: string) => void
  ) => {
    try {
      const id = this.currentDepartmentId;
      await this.global.api.departments.updateDepartment(
        id,
        DepartmentsAdapter.departmentFormToDepartmentDto(department)
      );

      this.clearInitialValues();

      navigate(`/departments/${id}`);
    } catch (error) {
      console.log('error', error);
    }
  };

  public deleteDepartmentsByIds = async (ids: number[]) => {
    runInAction(() => {
      this.loading = true;
    });

    try {
      await this.global.api.departments.deleteDepartments(ids);

      await this.getData();
    } catch (error) {
      console.log('error', error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}

export { DepartmentsStore };
