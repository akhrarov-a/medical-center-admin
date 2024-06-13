import { hoc } from '@utils';
import { DoctorForm } from '../../moleculars';
import { initialValues } from './create.constants';
import { useCreateDoctorFormProps } from './create.props';

/**
 * <CreateDoctorForm />
 */
const CreateDoctorForm = hoc.observer(
  useCreateDoctorFormProps,
  ({ onSubmit }) => (
    <DoctorForm
      isEdit={false}
      initialValues={initialValues}
      onSubmit={onSubmit}
    />
  )
);

export { CreateDoctorForm };
