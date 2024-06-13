import { useEffect } from 'react';
import { useStore } from '@store';
import { useNavigate, useParams } from 'react-router-dom';
import { DoctorForm } from '@doctors/doctors.types.ts';

/**
 * <UpdateDoctorForm /> props
 */
const useUpdateDoctorFormProps = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { doctors: store } = useStore();

  useEffect(
    () => () => {
      store.clearInitialValues();
    },
    []
  );

  useEffect(() => {
    if (!params.id) return;

    store.getDoctorById(params.id);
  }, [params]);

  return {
    initialValues: store.initialValues,
    onSubmit: (values: DoctorForm) => store.updateDoctor(values, navigate)
  };
};

export { useUpdateDoctorFormProps };
