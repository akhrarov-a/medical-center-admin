import { hoc } from '@utils';
// import { Tables } from '@components';
// import { List } from '@doctors/lib';
// import { DoctorsTableFilters } from '../../moleculars';
import { useDoctorsListProps } from './list.props';

/**
 * <DoctorsList />
 */
const DoctorsList = hoc.observer(
  useDoctorsListProps,
  () => (
    <div>Doctors table</div>
    // <Tables
    //   {...tableProps}
    //   addText="Add doctor"
    //   dataSource={List(items)}
    //   filters={<DoctorsTableFilters />}
    // />
  )
);


export { DoctorsList };
