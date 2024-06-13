import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Key } from 'antd/es/table/interface';
import { useStore } from '@store';

/**
 * <DoctorsList /> props
 */
const useDoctorsListProps = () => {
  const navigate = useNavigate();

  const {
    doctors: { loading, doctors, getData, clearDoctors, deleteDoctorsByIds }
  } = useStore();

  const [selectedRowIds, setSelectedRowIds] = useState<Key[]>([]);

  const onAddDoctor = () => {
    navigate('/doctors/create');
  };

  const onDeleteDoctors = () => {
    deleteDoctorsByIds(selectedRowIds as number[]);
  };

  useEffect(() => {
    getData();

    return () => {
      clearDoctors();
    };
  }, []);

  return {
    loading,
    doctors,
    selectedRowIds,
    navigate,
    setSelectedRowIds,
    onAddDoctor,
    onDeleteDoctors
  };
};

export { useDoctorsListProps };
