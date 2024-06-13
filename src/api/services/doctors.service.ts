import { CreateUpdateDoctorDto, DoctorContract } from '@api';
import { HttpService } from './http.service';
import { MockDoctorsService } from './mock';

/**
 * Doctors service
 */
class DoctorsService {
  public constructor(private http: HttpService) {}

  /**
   * Get all doctors
   */
  public getAllDoctors = () =>
    new Promise<{ data: DoctorContract[] }>(resolve => {
      setTimeout(() => {
        resolve({ data: MockDoctorsService.getAllDoctors() });
      }, 1000);
    });

  /**
   * Get doctor by id
   */
  public getDoctorById = (id: number | string) =>
    new Promise<{ data: DoctorContract }>((resolve, reject) => {
      setTimeout(() => {
        const doctor = MockDoctorsService.getDoctorById(+id);

        if (doctor) {
          resolve({ data: doctor });

          return;
        }

        reject('Not found doctor with id: ' + id);
      }, 1000);
    });

  /**
   * Create doctor
   */
  public createDoctor = (data: CreateUpdateDoctorDto) =>
    new Promise<{ data: DoctorContract }>(resolve => {
      setTimeout(() => {
        resolve({ data: MockDoctorsService.createDoctor(data) });
      }, 1000);
    });

  /**
   * Update doctor
   */
  public updateDoctor = (id: number, data: CreateUpdateDoctorDto) =>
    new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const result = MockDoctorsService.updateDoctor(id, data);

        if (result) {
          resolve();

          return;
        }

        reject('Not found doctor with id: ' + id);
      }, 1000);
    });

  /**
   * Delete doctors
   */
  public deleteDoctors = (ids: number[]) =>
    new Promise<void>(resolve => {
      setTimeout(() => {
        MockDoctorsService.deleteDoctorsByIds(ids);

        resolve();
      }, 1000);
    });
}

export { DoctorsService };
