import { useUpdateDoctorFormProps } from './update.props';
import { hoc } from '@utils';

/**
 * <UpdateDoctorForm />
 */
const UpdateDoctorForm = hoc.observer(useUpdateDoctorFormProps, () => {
  // if (isEmptyObject(initialValues)) return null;

  return (
    <div>
      Update doctor form
    </div>
    // <SupplierForm isEdit onSubmit={onSubmit} initialValues={initialValues} />
  );
});

export { UpdateDoctorForm };
