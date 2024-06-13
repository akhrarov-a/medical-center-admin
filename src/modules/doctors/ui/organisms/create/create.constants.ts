import { DoctorForm } from '@doctors/doctors.types';

/**
 * Initial values
 */
const initialValues: DoctorForm = {
  firstName: '',
  lastName: '',
  surname: '',
  department: null as any,
  isHeadOfDepartment: false
};

export { initialValues };
