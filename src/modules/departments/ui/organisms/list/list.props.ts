import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Key } from 'antd/es/table/interface';
import { useStore } from '@store';

/**
 * <DepartmentsList /> props
 */
const useDepartmentsListProps = () => {
  const navigate = useNavigate();

  const {
    departments: {
      loading,
      departments,
      getData,
      clearDepartments,
      deleteDepartmentsByIds
    }
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

    return () => {
      clearDepartments();
    };
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
