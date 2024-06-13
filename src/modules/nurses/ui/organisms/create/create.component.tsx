import { hoc } from '@utils';
import { NurseForm } from '../../moleculars';
import { initialValues } from './create.constants';
import { useCreateNurseFormProps } from './create.props';

/**
 * <CreateNurseForm />
 */
const CreateNurseForm = hoc.observer(
  useCreateNurseFormProps,
  ({ onSubmit }) => (
    <NurseForm
      isEdit={false}
      initialValues={initialValues}
      onSubmit={onSubmit}
    />
  )
);

export { CreateNurseForm };
