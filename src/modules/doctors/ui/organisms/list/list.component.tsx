import { hoc } from '@utils';
import { Tables } from '@components';
import { Columns } from './list.config';
import { useDoctorsListProps } from './list.props';

/**
 * <DoctorsList />
 */
const DoctorsList = hoc.observer(
  useDoctorsListProps,
  ({ loading, doctors, navigate, onDeleteDoctors }) => (
    <Tables
      loading={loading}
      columns={Columns}
      dataSource={doctors}
      onAdd={() => navigate('/doctors/create')}
      onDelete={onDeleteDoctors}
      onRowClick={record => navigate(`/doctors/${record.id}`)}
    />
  )
);

export { DoctorsList };
