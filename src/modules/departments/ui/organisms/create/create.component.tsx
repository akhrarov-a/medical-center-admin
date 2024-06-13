import { hoc } from '@utils';
import { DepartmentForm } from '../../moleculars';
import { initialValues } from './create.constants';
import { useCreateDepartmentForm } from './create.props';

/**
 * <CreateDepartmentForm />
 */
const CreateDepartmentForm = hoc.observer(
  useCreateDepartmentForm,
  ({ onSubmit }) => (
    <DepartmentForm
      isEdit={false}
      initialValues={initialValues}
      onSubmit={onSubmit}
    />
  )
);

export { CreateDepartmentForm };
