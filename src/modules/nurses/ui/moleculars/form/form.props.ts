import { NurseForm } from '@nurses/nurses.types.ts';

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
  initialValues: NurseForm;
  /**
   * On submit
   */
  onSubmit: (initialValues: NurseForm) => void;
};

export type { FormProps };
