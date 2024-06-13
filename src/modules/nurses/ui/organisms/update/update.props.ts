import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useStore } from '@store';
import { NurseForm } from '@nurses/nurses.types.ts';

/**
 * <UpdateNurseForm /> props
 */
const useUpdateNurseFormProps = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { nurses: store } = useStore();

  useEffect(() => {
    store.getDepartments();

    return () => {
      store.clearInitialValues();
    };
  }, []);

  useEffect(() => {
    if (!params.id) return;

    store.getNurseById(params.id);
  }, [params]);

  return {
    initialValues: store.initialValues,
    onSubmit: (values: NurseForm) => store.updateNurse(values, navigate)
  };
};

export { useUpdateNurseFormProps };
