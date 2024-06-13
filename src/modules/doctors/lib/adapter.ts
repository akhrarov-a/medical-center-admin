import { DoctorForm } from '../doctors.types';
import { CreateUpdateDoctorDto, DoctorContract } from '@api';

/**
 * Doctors adapter
 */
class DoctorsAdapter {
  static doctorContractToDoctorForm(doctor: DoctorContract): DoctorForm {
    return doctor;
  }

  static doctorFormToDoctorDto(doctor: DoctorForm): CreateUpdateDoctorDto {
    return doctor;
  }
}

export { DoctorsAdapter };
