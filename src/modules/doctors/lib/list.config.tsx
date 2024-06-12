import { ColumnsType } from 'antd/es/table';

/**
 * List
 */
const List = (doctors: any[]) =>
  doctors?.map(doctor => ({
    ...doctor,
    key: doctor?.supplierId
  }));

/**
 * Columns
 */
const Columns: ColumnsType = [
  {
    title: 'ID',
    dataIndex: 'id',
    sorter: true
  }
];

/**
 * More columns
 */
const MoreColumns: ColumnsType = [];

export { List, Columns, MoreColumns };
