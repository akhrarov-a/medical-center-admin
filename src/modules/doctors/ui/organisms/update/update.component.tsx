import { hoc } from '@utils';
import { DoctorForm } from '../../moleculars';
import { useUpdateDoctorFormProps } from './update.props';

/**
 * <UpdateDoctorForm />
 */
const UpdateDoctorForm = hoc.observer(
  useUpdateDoctorFormProps,
  ({ initialValues, onSubmit }) => {
    if (!Object.keys(initialValues).length) return null;

    return (
      <DoctorForm isEdit onSubmit={onSubmit} initialValues={initialValues} />
    );
  }
);

export { UpdateDoctorForm };
