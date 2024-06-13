import { CreateUpdateDoctorDto, DoctorContract } from '@api';
import { DoctorForm } from '../doctors.types';

/**
 * Doctors adapter
 */
class DoctorsAdapter {
  static doctorContractToDoctorForm(doctor: DoctorContract): DoctorForm {
    return { ...doctor, department: doctor.department.id };
  }

  static doctorFormToDoctorDto(doctor: DoctorForm): CreateUpdateDoctorDto {
    return doctor;
  }
}

export { DoctorsAdapter };
