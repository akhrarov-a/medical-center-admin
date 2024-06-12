import { hoc } from '@utils';
import { DoctorForm } from '../../moleculars';
import { initialValues } from './create.constants';
import { useCreateDoctorFormProps } from './create.props';

/**
 * <CreateDoctorForm />
 */
const CreateDoctorForm = hoc.observer(useCreateDoctorFormProps, () => (
  <DoctorForm
    isEdit={false}
    initialValues={initialValues}
    onSubmit={(values) => {
      console.log(values);
    }}
  />
));

export { CreateDoctorForm };
