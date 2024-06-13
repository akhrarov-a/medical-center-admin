import { DoctorForm } from '@doctors/doctors.types';
import { useStore } from '@store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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
