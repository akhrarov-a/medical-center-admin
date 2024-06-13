import { DepartmentForm } from '@departments/departments.types';

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
  initialValues: DepartmentForm;
  /**
   * On submit
   */
  onSubmit: (initialValues: DepartmentForm) => void;
};

export type { FormProps };
