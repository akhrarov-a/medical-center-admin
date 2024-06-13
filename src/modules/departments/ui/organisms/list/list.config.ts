import { ColumnsType } from 'antd/es/table';
import { DepartmentContract } from '@api';

/**
 * List
 */
const List = (departments: DepartmentContract[]) =>
  departments?.map(department => ({
    ...department,
    key: department?.id
  }));

/**
 * Columns
 */
const Columns: ColumnsType<DepartmentContract> = [
  {
    title: 'ИД',
    dataIndex: 'id',
    sorter: (a, b) => a.id - b.id
  },
  {
    title: 'Название отделения',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length
  }
];

export { List, Columns };
