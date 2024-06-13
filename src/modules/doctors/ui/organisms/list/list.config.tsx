import { ColumnsType } from 'antd/es/table';
import { DoctorContract } from '@api';
import styles from './list.module.scss';

/**
 * List
 */
const List = (products: DoctorContract[]) =>
  products?.map(product => ({
    ...product,
    key: product?.id
  }));

/**
 * Columns
 */
const Columns: ColumnsType<DoctorContract> = [
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
    render: (department, record) => (
      <div>
        {department.name}
        {record.isHeadOfDepartment && (
          <span className={styles.head_pill}>глава</span>
        )}
      </div>
    ),
    sorter: (a, b) => a.department.name.length - b.department.name.length
  }
];

export { List, Columns };
