import { useEffect } from 'react';
import { useStore } from '@store';
import { DoctorsTableFilters } from '@api';

/**
 * <DoctorsTableFilters /> props
 */
const useDoctorsTableFiltersProps = () => {
  const {
    doctors: { departments, tableFilters, setTableFilters, getDepartments }
  } = useStore();

  useEffect(() => {
    getDepartments();
  }, []);

  const onFilterChange = (
    key: keyof DoctorsTableFilters,
    value: string | number
  ) => {
    setTableFilters({ [key]: value });
  };

  return {
    departments,
    tableFilters,
    onFilterChange
  };
};

export { useDoctorsTableFiltersProps };
