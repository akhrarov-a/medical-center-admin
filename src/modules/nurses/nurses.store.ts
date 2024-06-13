import { message } from 'antd';
import { makeAutoObservable, runInAction } from 'mobx';
import { DefaultOptionType } from 'rc-select/es/Select';
import { NurseContract, NursesTableFilters } from '@api';
import { GlobalStore } from '@store';
import { DepartmentsAdapter } from '@departments/lib';
import { NurseForm } from './nurses.types.ts';
import { NursesAdapter } from './lib';

/**
 * Nurses store
 */
class NursesStore {
  constructor(global: GlobalStore) {
    this.global = global;

    makeAutoObservable(this, {}, { autoBind: true });
  }

  public global: GlobalStore;

  public loading: boolean = false;
  public nurses: NurseContract[] = [];

  public initialValues: NurseForm = {} as NurseForm;
  public currentNurseId: number = 0;

  public departments: DefaultOptionType[] = [];

  public tableFilters: NursesTableFilters = {};

  public setTableFilters = (filters: NursesTableFilters) => {
    runInAction(() => {
      this.tableFilters = { ...this.tableFilters, ...filters };
    });
  };

  public clearInitialValues = () => {
    runInAction(() => {
      this.initialValues = {} as NurseForm;
      this.currentNurseId = 0;
    });
  };

  public clearNurses = () => {
    runInAction(() => {
      this.nurses = [];
    });
  };

  public getData = async () => {
    runInAction(() => {
      this.loading = true;
    });

    try {
      const response = await this.global.api.nurses.getAllNurses();

      runInAction(() => {
        this.nurses = response.data;
      });
    } catch (error) {
      console.log('error', error);

      message.error(
        'Ошибка при загрузке медсестер. Попробуйте обновить страницу.'
      );
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  public getNurseById = async (id: string) => {
    try {
      const response = await this.global.api.nurses.getNurseById(id);

      runInAction(() => {
        this.currentNurseId = response.data.id;
        this.initialValues = NursesAdapter.nurseContractToNurseForm(
          response.data
        );
      });
    } catch (error) {
      console.log('error', error);

      message.error('Ошибка при загрузке медсестры. Попробуйте снова.');
    }
  };

  public createNurse = async (
    nurse: NurseForm,
    navigate: (path: string) => void
  ) => {
    try {
      const response = await this.global.api.nurses.createNurse(
        NursesAdapter.nurseFormToNurseDto(nurse)
      );

      message.success('Медсестра успешно создана.');

      navigate(`/nurses/${response.data.id}`);
    } catch (error) {
      console.log('error', error);

      message.error('Ошибка при создании медсестры. Попробуйте снова.');
    }
  };

  public updateNurse = async (
    nurse: NurseForm,
    navigate: (path: string) => void
  ) => {
    try {
      const id = this.currentNurseId;
      await this.global.api.nurses.updateNurse(
        id,
        NursesAdapter.nurseFormToNurseDto(nurse)
      );

      message.success('Медсестра успешно обновлена.');

      this.clearInitialValues();

      navigate(`/nurses/${id}`);
    } catch (error) {
      console.log('error', error);

      message.error('Ошибка при обновлении медсестры. Попробуйте снова.');
    }
  };

  public deleteNursesByIds = async (ids: number[]) => {
    runInAction(() => {
      this.loading = true;
    });

    try {
      await this.global.api.nurses.deleteNurses(ids);

      message.success(
        ids.length > 1
          ? 'Медсестры успешно удалены.'
          : 'Медсестра успешно удалена.'
      );

      await this.getData();
    } catch (error) {
      console.log('error', error);

      message.error('Ошибка при удалении медсестер. Попробуйте снова.');
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  public getDepartments = async () => {
    try {
      const response = await this.global.api.departments.getAllDepartments();

      runInAction(() => {
        this.departments = DepartmentsAdapter.departmentsToOptionsList(
          response.data
        );
      });
    } catch (error) {
      console.log('error', error);
    }
  };
}

export { NursesStore };
