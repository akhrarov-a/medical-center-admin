import { useStore } from '@store';
import { useEffect, useState } from 'react';
import { Key } from 'antd/es/table/interface';
import { useNavigate } from 'react-router-dom';

/**
 * <DepartmentsList /> props
 */
const useDepartmentsListProps = () => {
  const navigate = useNavigate();

  const {
    departments: { loading, departments, getData, deleteDepartmentsByIds }
  } = useStore();

  const [selectedRowIds, setSelectedRowIds] = useState<Key[]>([]);

  const onAddDoctor = () => {
    navigate('/departments/create');
  };

  const onDeleteDoctors = () => {
    deleteDepartmentsByIds(selectedRowIds as number[]);
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    loading,
    departments,
    selectedRowIds,
    navigate,
    setSelectedRowIds,
    onAddDoctor,
    onDeleteDoctors
  };
};

export { useDepartmentsListProps };
