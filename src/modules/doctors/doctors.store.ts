import { GlobalStore } from '@store';
import { DefaultOptionType } from 'rc-select/es/Select';
import { makeAutoObservable, runInAction } from 'mobx';
import { DoctorContract } from '@api';
import { DoctorForm } from '@doctors/doctors.types';
import { DoctorsAdapter } from '@doctors/lib';
import { DepartmentsAdapter } from '@departments/lib';
import { message } from 'antd';

/**
 * Doctors store
 */
class DoctorsStore {
  constructor(global: GlobalStore) {
    this.global = global;

    makeAutoObservable(this, {}, { autoBind: true });
  }

  public global: GlobalStore;

  public loading: boolean = false;
  public doctors: DoctorContract[] = [];

  public initialValues: DoctorForm = {} as DoctorForm;
  public currentDoctorId: number = 0;

  public departments: DefaultOptionType[] = [];

  public clearInitialValues = () => {
    runInAction(() => {
      this.initialValues = {} as DoctorForm;
      this.currentDoctorId = 0;
    });
  };

  public clearDoctors = () => {
    runInAction(() => {
      this.doctors = [];
    });
  };

  public getData = async () => {
    runInAction(() => {
      this.loading = true;
    });

    try {
      const response = await this.global.api.doctors.getAllDoctors();

      runInAction(() => {
        this.doctors = response.data;
      });
    } catch (error) {
      console.log('error', error);

      message.error(
        'Ошибка при загрузке врачей. Попробуйте обновить страницу.'
      );
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  public getDoctorById = async (id: string) => {
    try {
      const response = await this.global.api.doctors.getDoctorById(id);

      runInAction(() => {
        this.currentDoctorId = response.data.id;
        this.initialValues = DoctorsAdapter.doctorContractToDoctorForm(
          response.data
        );
      });
    } catch (error) {
      console.log('error', error);

      message.error('Ошибка при загрузке врача. Попробуйте обновить страницу.');
    }
  };

  public createDoctor = async (
    doctor: DoctorForm,
    navigate: (path: string) => void
  ) => {
    try {
      const response = await this.global.api.doctors.createDoctor(
        DoctorsAdapter.doctorFormToDoctorDto(doctor)
      );

      message.success('Врач успешно создан.');

      navigate(`/doctors/${response.data.id}`);
    } catch (error) {
      console.log('error', error);

      message.error('Ошибка при создании врача. Попробуйте снова.');
    }
  };

  public updateDoctor = async (
    doctor: DoctorForm,
    navigate: (path: string) => void
  ) => {
    try {
      const id = this.currentDoctorId;
      await this.global.api.doctors.updateDoctor(
        id,
        DoctorsAdapter.doctorFormToDoctorDto(doctor)
      );

      message.success('Врач успешно сохранен.');

      this.clearInitialValues();

      navigate(`/doctors/${id}`);
    } catch (error) {
      console.log('error', error);

      message.error('Ошибка при сохранении врача. Попробуйте снова.');
    }
  };

  public deleteDoctorsByIds = async (ids: number[]) => {
    runInAction(() => {
      this.loading = true;
    });

    try {
      await this.global.api.doctors.deleteDoctors(ids);

      message.success(
        ids.length > 1 ? 'Врачи успешно удалены.' : 'Врач успешно удален.'
      );

      await this.getData();
    } catch (error) {
      console.log('error', error);

      message.error('Ошибка при удалении врачей. Попробуйте снова.');
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

export { DoctorsStore };
