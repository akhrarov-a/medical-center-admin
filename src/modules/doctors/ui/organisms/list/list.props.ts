import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@store';
import { toJS } from 'mobx';

/**
 * <DoctorsList /> props
 */
const useDoctorsListProps = () => {
  const navigate = useNavigate();

  const {
    doctors: {
      loading,
      doctors,
      tableFilters,
      getData,
      clearDoctors,
      deleteDoctorsByIds
    }
  } = useStore();

  const _doctors = useMemo(() => {
    console.log(toJS(tableFilters));

    if (Object.values(tableFilters).length) {
      return doctors.filter(doctor =>
        Object.entries(tableFilters)
          .filter(([_, value]) => !!value)
          .every(([key, value]) => {
            if (key === 'search') {
              return ['firstName', 'lastName', 'surname'].some((key: string) =>
                (doctor as any)[key]
                  .toLowerCase()
                  .includes((value as string).toLowerCase())
              );
            }

            if (key === 'department') {
              return doctor.department.id === value;
            }

            return (doctor as any)[key]
              .toString()
              .toLowerCase()
              .includes((value as string).toLowerCase());
          })
      );
    }

    return doctors;
  }, [doctors, tableFilters]);

  useEffect(() => {
    getData();

    return () => {
      clearDoctors();
    };
  }, []);

  return {
    loading,
    doctors: _doctors,
    navigate,
    onDeleteDoctors: deleteDoctorsByIds
  };
};

export { useDoctorsListProps };
