import { useStore } from '@store';
import { useEffect, useState } from 'react';
import { Key } from 'antd/es/table/interface';
import { useNavigate } from 'react-router-dom';

/**
 * <DoctorsList /> props
 */
const useDoctorsListProps = () => {
  const navigate = useNavigate();

  const {
    doctors: { loading, doctors, getData, deleteDoctorsByIds }
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
