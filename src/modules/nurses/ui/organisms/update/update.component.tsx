import { hoc } from '@utils';
import { NurseForm } from '../../moleculars';
import { useUpdateNurseFormProps } from './update.props';

/**
 * <UpdateNurseForm />
 */
const UpdateNurseForm = hoc.observer(
  useUpdateNurseFormProps,
  ({ initialValues, onSubmit }) => {
    if (!Object.keys(initialValues).length) return null;

    return (
      <NurseForm isEdit onSubmit={onSubmit} initialValues={initialValues} />
    );
  }
);

export { UpdateNurseForm };
