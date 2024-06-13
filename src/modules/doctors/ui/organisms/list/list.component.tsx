import { Button, Table } from 'antd';
import * as uuid from 'uuid';
import { DoctorContract } from '@api';
import { hoc } from '@utils';
import { Columns, List } from './list.config';
import { useDoctorsListProps } from './list.props';
import styles from './list.module.scss';

/**
 * <DoctorsList />
 */
const DoctorsList = hoc.observer(
  useDoctorsListProps,
  ({
    loading,
    doctors,
    selectedRowIds,
    navigate,
    setSelectedRowIds,
    onAddDoctor,
    onDeleteDoctors
  }) => (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <Button type='primary' onClick={onAddDoctor}>
          Add doctor
        </Button>
        <Button type='primary' onClick={onDeleteDoctors}>
          Delete
        </Button>
      </div>

      <Table<DoctorContract>
        key={uuid.v4()}
        loading={loading}
        rowSelection={{
          selectedRowKeys: selectedRowIds,
          onChange: setSelectedRowIds
        }}
        columns={Columns}
        dataSource={List(doctors)}
        scroll={{ x: true }}
        onRow={record => ({
          onClick: () => {
            navigate(`/doctors/${record.id}`);
          }
        })}
        rowKey={record => record?.id}
        pagination={false}
        bordered
      />
    </div>
  )
);

export { DoctorsList };
