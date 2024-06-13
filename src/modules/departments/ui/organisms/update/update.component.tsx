import { hoc } from '@utils';
import { useUpdateDepartmentFormProps } from './update.props';
import { DepartmentForm } from '@departments/ui/moleculars';

/**
 * <UpdateDepartmentForm />
 */
const UpdateDepartmentForm = hoc.observer(
  useUpdateDepartmentFormProps,
  ({ initialValues, onSubmit }) => {
    if (!Object.keys(initialValues).length) return null;

    return (
      <DepartmentForm
        isEdit
        initialValues={initialValues}
        onSubmit={onSubmit}
      />
    );
  }
);

export { UpdateDepartmentForm };
