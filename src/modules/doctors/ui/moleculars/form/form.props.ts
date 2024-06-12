import { DoctorForm } from '@doctors/doctors.types';

/**
 * <Form /> props
 */
type FormProps = {
  /**
   * Is edit
   */
  isEdit: boolean;
  /**
   * Initial values
   */
  initialValues: DoctorForm;
  /**
   * On submit
   */
  onSubmit: (initialValues: DoctorForm) => void;
};

export type { FormProps };
