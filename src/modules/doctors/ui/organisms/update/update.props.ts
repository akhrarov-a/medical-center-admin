import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useStore } from '@store';
import { DoctorForm } from '@doctors/doctors.types';

/**
 * <UpdateDoctorForm /> props
 */
const useUpdateDoctorFormProps = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { doctors: store } = useStore();

  useEffect(() => {
    store.getDepartments();

    return () => {
      store.clearInitialValues();
    };
  }, []);

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
