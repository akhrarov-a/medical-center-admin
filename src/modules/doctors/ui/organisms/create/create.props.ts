import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@store';
import { DoctorForm } from '@doctors/doctors.types';

/**
 * <CreateDoctorForm /> props
 */
const useCreateDoctorFormProps = () => {
  const navigate = useNavigate();

  const {
    doctors: { createDoctor, getDepartments }
  } = useStore();

  useEffect(() => {
    getDepartments();
  }, []);

  return {
    onSubmit: (values: DoctorForm) => createDoctor(values, navigate)
  };
};

export { useCreateDoctorFormProps };
