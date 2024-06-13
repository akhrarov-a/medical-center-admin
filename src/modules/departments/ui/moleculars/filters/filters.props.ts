import { useStore } from '@store';
import { DepartmentsTableFilters } from '@api';

/**
 * <DepartmentsTableFilters /> props
 */
const useDepartmentsTableFiltersProps = () => {
  const {
    departments: { tableFilters, setTableFilters }
  } = useStore();

  const onFilterChange = (
    key: keyof DepartmentsTableFilters,
    value: string
  ) => {
    setTableFilters({ [key]: value });
  };

  return {
    tableFilters,
    onFilterChange
  };
};

export { useDepartmentsTableFiltersProps };
