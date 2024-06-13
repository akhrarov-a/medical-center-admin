import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@store';
import { DepartmentsTableFilters } from '@api';

/**
 * <DepartmentsList /> props
 */
const useDepartmentsListProps = () => {
  const navigate = useNavigate();

  const {
    departments: {
      loading,
      departments,
      tableFilters,
      getData,
      clearDepartments,
      deleteDepartmentsByIds
    }
  } = useStore();

  const _departments = useMemo(() => {
    if (Object.values(tableFilters).length) {
      return departments.filter(department =>
        Object.entries(tableFilters)
          .filter(([_, value]) => !!value)
          .every(([key, value]) =>
            department[key as keyof DepartmentsTableFilters]
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase())
          )
      );
    }

    return departments;
  }, [departments, tableFilters]);

  useEffect(() => {
    getData();

    return () => {
      clearDepartments();
    };
  }, []);

  return {
    loading,
    departments: _departments,
    navigate,
    onDeleteDepartments: deleteDepartmentsByIds
  };
};

export { useDepartmentsListProps };
