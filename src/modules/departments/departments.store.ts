import { message } from 'antd';
import { makeAutoObservable, runInAction } from 'mobx';
import { GlobalStore } from '@store';
import { DepartmentContract, DepartmentsTableFilters } from '@api';
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

  public tableFilters: DepartmentsTableFilters = {};

  public setTableFilters = (filters: DepartmentsTableFilters) => {
    runInAction(() => {
      this.tableFilters = { ...this.tableFilters, ...filters };
    });
  };

  public clearInitialValues = () => {
    runInAction(() => {
      this.initialValues = {} as DepartmentForm;
      this.currentDepartmentId = 0;
    });
  };

  public clearDepartments = () => {
    runInAction(() => {
      this.departments = [];
      this.tableFilters = {};
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

      message.error(
        'Ошибка при загрузке отделений. Попробуйте обновить страницу.'
      );
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  public getDepartmentById = async (id: string) => {
    this.global.showLoader();

    try {
      const response = await this.global.api.departments.getDepartmentById(id);

      runInAction(() => {
        this.currentDepartmentId = response.data.id;
        this.initialValues =
          DepartmentsAdapter.departmentContractToDepartmentForm(response.data);
      });
    } catch (error) {
      console.log('error', error);

      message.error(
        'Ошибка при загрузке отделения. Попробуйте обновить страницу.'
      );
    }

    this.global.hideLoader();
  };

  public createDepartment = async (
    department: DepartmentForm,
    navigate: (path: string) => void
  ) => {
    this.global.showLoader();

    try {
      const response = await this.global.api.departments.createDepartment(
        DepartmentsAdapter.departmentFormToDepartmentDto(department)
      );

      message.success('Отделение успешно создана.');

      navigate(`/departments/${response.data.id}`);
    } catch (error) {
      console.log('error', error);

      message.error('Ошибка при создании отделения. Попробуйте снова.');
    }

    this.global.hideLoader();
  };

  public updateDepartment = async (
    department: DepartmentForm,
    navigate: (path: string) => void
  ) => {
    this.global.showLoader();

    try {
      const id = this.currentDepartmentId;
      await this.global.api.departments.updateDepartment(
        id,
        DepartmentsAdapter.departmentFormToDepartmentDto(department)
      );

      message.success('Отделение успешно обновлено.');

      this.clearInitialValues();

      navigate(`/departments/${id}`);
    } catch (error) {
      console.log('error', error);

      message.error('Ошибка при обновлении отделения. Попробуйте снова.');
    }

    this.global.hideLoader();
  };

  public deleteDepartmentsByIds = async (ids: number[]) => {
    runInAction(() => {
      this.loading = true;
    });

    try {
      await this.global.api.departments.deleteDepartments(ids);

      message.success(
        ids.length > 1
          ? 'Отделы успешно удалены.'
          : 'Отделение успешно удалено.'
      );

      await this.getData();
    } catch (error) {
      console.log('error', error);

      message.error('Ошибка при удалении отделений. Попробуйте снова.');
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}

export { DepartmentsStore };
