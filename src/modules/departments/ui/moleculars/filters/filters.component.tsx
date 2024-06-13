import { Input } from 'antd';
import { hoc } from '@utils';
import { useDepartmentsTableFiltersProps } from './filters.props';

/**
 * <DepartmentsTableFilters />
 */
const DepartmentsTableFilters = hoc.observer(
  useDepartmentsTableFiltersProps,
  ({ tableFilters, onFilterChange }) => (
    <div className='filter-container'>
      <Input
        placeholder='ид'
        type='number'
        value={tableFilters.id}
        onChange={event => onFilterChange('id', event.target.value)}
      />

      <Input
        placeholder='название'
        value={tableFilters.name}
        onChange={event => onFilterChange('name', event.target.value)}
      />
    </div>
  )
);

export { DepartmentsTableFilters };
