import { hoc } from '@utils';
import { useDoctorsTableFilters } from './filters.props';
import styles from './filters.module.scss';

/**
 * <DoctorsTableFilters />
 */
const DoctorsTableFilters = hoc.observer(
  useDoctorsTableFilters,
  () => (
    <div className={styles.container}>
      Filters
      {/*<Input*/}
      {/*  className={styles.input}*/}
      {/*  placeholder="supplier id"*/}
      {/*  type="number"*/}
      {/*  value={tableFilters.id}*/}
      {/*  onChange={event => onFilterChange('id', event.target.value)}*/}
      {/*/>*/}
      {/*<Input*/}
      {/*  className={styles.input}*/}
      {/*  placeholder="name"*/}
      {/*  value={tableFilters.name}*/}
      {/*  onChange={event => onFilterChange('name', event.target.value)}*/}
      {/*/>*/}
      {/*<Select*/}
      {/*  className={styles.input}*/}
      {/*  value={tableFilters.status}*/}
      {/*  placeholder="status"*/}
      {/*  options={[*/}
      {/*    {*/}
      {/*      label: 'Active',*/}
      {/*      value: 'ACTIVE'*/}
      {/*    },*/}
      {/*    {*/}
      {/*      label: 'Disabled',*/}
      {/*      value: 'DISABLED'*/}
      {/*    }*/}
      {/*  ]}*/}
      {/*  onChange={value => onFilterChange('status', value)}*/}
      {/*  allowClear*/}
      {/*/>*/}
      {/*<Button*/}
      {/*  type="primary"*/}
      {/*  onClick={onSearch}*/}
      {/*  disabled={Object.values(tableFilters).every(value => !value)}*/}
      {/*>*/}
      {/*  Search*/}
      {/*</Button>*/}
    </div>
  )
);

export { DoctorsTableFilters };
