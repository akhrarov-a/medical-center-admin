import { Button, Table } from 'antd';
import * as uuid from 'uuid';
import { DepartmentContract } from '@api';
import { hoc } from '@utils';
import { Columns, List } from './list.config';
import { useDepartmentsListProps } from './list.props';
import styles from './list.module.scss';

/**
 * <DepartmentsList />
 */
const DepartmentsList = hoc.observer(
  useDepartmentsListProps,
  ({
    loading,
    departments,
    selectedRowIds,
    navigate,
    setSelectedRowIds,
    onAddDoctor,
    onDeleteDoctors
  }) => (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <Button type='primary' onClick={onAddDoctor}>
          Добавить отделение
        </Button>
        <Button type='primary' onClick={onDeleteDoctors}>
          Удалить
        </Button>
      </div>

      <Table<DepartmentContract>
        key={uuid.v4()}
        loading={loading}
        rowSelection={{
          selectedRowKeys: selectedRowIds,
          onChange: setSelectedRowIds
        }}
        columns={Columns}
        dataSource={List(departments)}
        scroll={{ x: true }}
        onRow={record => ({
          onClick: () => {
            navigate(`/departments/${record.id}`);
          }
        })}
        rowKey={record => record?.id}
        pagination={false}
        bordered
      />
    </div>
  )
);

export { DepartmentsList };
