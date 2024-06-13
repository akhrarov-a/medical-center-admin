import { ColumnsType } from 'antd/es/table';
import { NurseContract } from '@api';

/**
 * List
 */
const List = (nurses: NurseContract[]) =>
  nurses?.map(nurse => ({
    ...nurse,
    key: nurse?.id
  }));

/**
 * Columns
 */
const Columns: ColumnsType<NurseContract> = [
  {
    title: 'ИД',
    dataIndex: 'id',
    sorter: (a, b) => a.id - b.id
  },
  {
    title: 'Имя',
    dataIndex: 'firstName',
    sorter: (a, b) => a.firstName.length - b.firstName.length
  },
  {
    title: 'Фамилия',
    dataIndex: 'lastName',
    sorter: (a, b) => a.lastName.length - b.lastName.length
  },
  {
    title: 'Отчество',
    dataIndex: 'surname',
    sorter: (a, b) => a.surname.length - b.surname.length
  },
  {
    title: 'Отделение',
    dataIndex: 'department',
    render: department => department.name,
    sorter: (a, b) => a.department.name.length - b.department.name.length
  }
];

export { List, Columns };
