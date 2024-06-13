import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@store';

/**
 * <NursesList /> props
 */
const useNursesListProps = () => {
  const navigate = useNavigate();

  const {
    nurses: {
      loading,
      nurses,
      tableFilters,
      getData,
      clearNurses,
      deleteNursesByIds
    }
  } = useStore();

  const _nurses = useMemo(() => {
    if (Object.values(tableFilters).length) {
      return nurses.filter(nurse =>
        Object.entries(tableFilters)
          .filter(([_, value]) => !!value)
          .every(([key, value]) => {
            if (key === 'search') {
              return ['firstName', 'lastName', 'surname'].some((key: string) =>
                (nurse as any)[key]
                  .toLowerCase()
                  .includes((value as string).toLowerCase())
              );
            }

            if (key === 'department') {
              return nurse.department.id === value;
            }

            return (nurse as any)[key]
              .toString()
              .toLowerCase()
              .includes((value as string).toLowerCase());
          })
      );
    }

    return nurses;
  }, [nurses, tableFilters]);

  useEffect(() => {
    getData();

    return () => {
      clearNurses();
    };
  }, []);

  return {
    loading,
    nurses: _nurses,
    navigate,
    onDeleteNurses: deleteNursesByIds
  };
};

export { useNursesListProps };
