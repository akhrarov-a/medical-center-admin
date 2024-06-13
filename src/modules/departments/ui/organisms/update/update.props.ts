import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useStore } from '@store';
import { DepartmentForm } from '@departments/departments.types';

/**
 * <UpdateDepartmentForm /> props
 */
const useUpdateDepartmentFormProps = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { departments: store } = useStore();

  useEffect(
    () => () => {
      store.clearInitialValues();
    },
    []
  );

  useEffect(() => {
    if (!params.id) return;

    store.getDepartmentById(params.id);
  }, [params]);

  return {
    initialValues: store.initialValues,
    onSubmit: (values: DepartmentForm) =>
      store.updateDepartment(values, navigate)
  };
};

export { useUpdateDepartmentFormProps };
