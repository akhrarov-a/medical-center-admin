import { CreateUpdateDoctorDto, DoctorContract } from '@api';
import { HttpService } from './http.service';

/**
 * Doctors service
 */
class DoctorsService {
  public constructor(private http: HttpService) {
  }

  /**
   * Get all doctors
   */
  public getAllDoctors = () => [];

  /**
   * Get doctor by id
   */
  public getDoctorById = (id: number | string) => ({ id } as DoctorContract);

  /**
   * Create doctor
   */
  public createDoctor = (data: CreateUpdateDoctorDto) => ({ id: 1, ...data } as DoctorContract);

  /**
   * Update doctor
   */
  public updateDoctor = (id: number, data: CreateUpdateDoctorDto) => ({ id, ...data } as DoctorContract);

  /**
   * Delete doctors
   */
  public deleteDoctors = (ids: number[]) => ids;
}


export { DoctorsService };
