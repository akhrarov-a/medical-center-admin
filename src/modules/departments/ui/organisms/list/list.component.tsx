import { hoc } from '@utils';
import { Tables } from '@components';
import { Columns } from './list.config';
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
      dataSource={departments}
      onAdd={() => navigate('/departments/create')}
      onDelete={onDeleteDepartments}
      onRowClick={record => navigate(`/departments/${record.id}`)}
    />
  )
);

export { DepartmentsList };
