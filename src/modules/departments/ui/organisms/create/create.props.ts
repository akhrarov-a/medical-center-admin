import { useStore } from '@store';
import { useNavigate } from 'react-router-dom';
import { DepartmentForm } from '@departments/departments.types';

/**
 * <CreateDepartmentForm /> props
 */
const useCreateDepartmentForm = () => {
  const navigate = useNavigate();

  const {
    departments: { createDepartment }
  } = useStore();

  return {
    onSubmit: (values: DepartmentForm) => createDepartment(values, navigate)
  };
};

export { useCreateDepartmentForm };
