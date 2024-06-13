import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@store';

/**
 * <DepartmentsList /> props
 */
const useDepartmentsListProps = () => {
  const navigate = useNavigate();

  const {
    departments: {
      loading,
      departments,
      getData,
      clearDepartments,
      deleteDepartmentsByIds
    }
  } = useStore();

  useEffect(() => {
    getData();

    return () => {
      clearDepartments();
    };
  }, []);

  return {
    loading,
    departments,
    navigate,
    onDeleteDepartments: deleteDepartmentsByIds
  };
};

export { useDepartmentsListProps };
