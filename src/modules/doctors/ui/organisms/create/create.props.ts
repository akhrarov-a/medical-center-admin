import { DoctorForm } from '@doctors/doctors.types';
import { useStore } from '@store';
import { useNavigate } from 'react-router-dom';

/**
 * <CreateDoctorForm /> props
 */
const useCreateDoctorFormProps = () => {
  const navigate = useNavigate();

  const {
    doctors: { createDoctor }
  } = useStore();

  return {
    onSubmit: (values: DoctorForm) => createDoctor(values, navigate)
  };
};

export { useCreateDoctorFormProps };
