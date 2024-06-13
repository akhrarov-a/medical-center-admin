import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@store';
import { NurseForm } from '@nurses/nurses.types.ts';

/**
 * <CreateNurseForm /> props
 */
const useCreateNurseFormProps = () => {
  const navigate = useNavigate();

  const {
    nurses: { createNurse, getDepartments }
  } = useStore();

  useEffect(() => {
    getDepartments();
  }, []);

  return {
    onSubmit: (values: NurseForm) => createNurse(values, navigate)
  };
};

export { useCreateNurseFormProps };
