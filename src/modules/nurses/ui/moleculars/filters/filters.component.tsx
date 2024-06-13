import { Input, Select } from 'antd';
import { hoc } from '@utils';
import { useNursesTableFiltersProps } from './filters.props';

/**
 * <NursesTableFilters />
 */
const NursesTableFilters = hoc.observer(
  useNursesTableFiltersProps,
  ({ departments, tableFilters, onFilterChange }) => (
    <div className='filter-container'>
      <Input
        placeholder='ид'
        type='number'
        value={tableFilters.id}
        onChange={event => onFilterChange('id', event.target.value)}
      />

      <Input
        placeholder='имя, фамилия, отчество'
        value={tableFilters.search}
        onChange={event => onFilterChange('search', event.target.value)}
      />

      <Select
        value={tableFilters.department}
        placeholder='отделение'
        options={departments}
        onChange={value => onFilterChange('department', value)}
        allowClear
      />
    </div>
  )
);

export { NursesTableFilters };
