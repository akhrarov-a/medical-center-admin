import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@store';

/**
 * <DoctorsList /> props
 */
const useDoctorsListProps = () => {
  const navigate = useNavigate();

  const {
    doctors: { loading, doctors, getData, clearDoctors, deleteDoctorsByIds }
  } = useStore();

  useEffect(() => {
    getData();

    return () => {
      clearDoctors();
    };
  }, []);

  return {
    loading,
    doctors,
    navigate,
    onDeleteDoctors: deleteDoctorsByIds
  };
};

export { useDoctorsListProps };
