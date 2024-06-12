import { DoctorForm } from '../doctors.types';

/**
 * Doctors adapter
 */
class DoctorsAdapter {
  static doctorContractToDoctorForm(doctor: never): DoctorForm {
    return doctor;
  }
}

export { DoctorsAdapter };
