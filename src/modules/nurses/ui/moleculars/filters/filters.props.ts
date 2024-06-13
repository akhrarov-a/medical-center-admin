import { useEffect } from 'react';
import { useStore } from '@store';
import { NursesTableFilters } from '@api';

/**
 * <NursesTableFilters /> props
 */
const useNursesTableFiltersProps = () => {
  const {
    nurses: { departments, tableFilters, setTableFilters, getDepartments }
  } = useStore();

  useEffect(() => {
    getDepartments();
  }, []);

  const onFilterChange = (
    key: keyof NursesTableFilters,
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

export { useNursesTableFiltersProps };
