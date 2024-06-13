import { hoc } from '@utils';
import { Tables } from '@components';
import { NursesTableFilters } from '../../moleculars';
import { Columns, List } from './list.config';
import { useNursesListProps } from './list.props';

/**
 * <NursesList />
 */
const NursesList = hoc.observer(
  useNursesListProps,
  ({ loading, nurses, navigate, onDeleteNurses }) => (
    <Tables
      loading={loading}
      columns={Columns}
      dataSource={List(nurses)}
      addText='Добавить медсестру'
      onAdd={() => navigate('/nurses/create')}
      onDelete={onDeleteNurses}
      onRowClick={record => navigate(`/nurses/${record.id}`)}
      filters={<NursesTableFilters />}
    />
  )
);

export { NursesList };
