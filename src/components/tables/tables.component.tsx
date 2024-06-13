import { hoc } from '@utils';
import * as uuid from 'uuid';
import { Button, Table } from 'antd';
import { DepartmentContract } from '@api';
import { useTablesProps } from './tables.props';
import styles from './tables.module.scss';

/**
 * <Tables />
 */
const Tables = hoc(
  useTablesProps,
  ({
    loading,
    columns,
    dataSource,
    addText,
    selectedRowIds,
    setSelectedRowIds,
    onRowClick,
    onAdd,
    deleteSelectRowIds,
    filters
  }) => (
    <div className={styles.container}>
      <div className={styles.header}>
        {filters}

        <div className={styles.buttons}>
          <Button type='primary' onClick={onAdd}>
            {addText}
          </Button>
          <Button type='primary' onClick={deleteSelectRowIds}>
            Удалить
          </Button>
        </div>
      </div>

      <Table<DepartmentContract>
        key={uuid.v4()}
        loading={loading}
        rowSelection={{
          selectedRowKeys: selectedRowIds,
          onChange: setSelectedRowIds
        }}
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: true }}
        onRow={record => ({
          onClick: () => onRowClick(record)
        })}
        rowKey={record => record?.id}
        pagination={false}
        bordered
      />
    </div>
  )
);

export { Tables };
