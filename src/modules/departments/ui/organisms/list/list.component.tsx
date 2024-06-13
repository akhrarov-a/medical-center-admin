import { hoc } from '@utils';
import { Tables } from '@components';
import { DepartmentsTableFilters } from '../../moleculars';
import { Columns, List } from './list.config';
import { useDepartmentsListProps } from './list.props';

/**
 * <DepartmentsList />
 */
const DepartmentsList = hoc.observer(
  useDepartmentsListProps,
  ({ loading, departments, navigate, onDeleteDepartments }) => (
    <Tables
      loading={loading}
      columns={Columns}
      dataSource={List(departments)}
      addText='Добавить отделение'
      onAdd={() => navigate('/departments/create')}
      onDelete={onDeleteDepartments}
      onRowClick={record => navigate(`/departments/${record.id}`)}
      filters={<DepartmentsTableFilters />}
    />
  )
);

export { DepartmentsList };
