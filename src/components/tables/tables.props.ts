import { useState } from 'react';
import { Key } from 'antd/es/table/interface';

/**
 * <Tables /> props types
 */
type TablesProps = {
  /**
   * Loading
   */
  loading: boolean;
  /**
   * Columns
   */
  columns: any[];
  /**
   * Data source
   */
  dataSource: any[];
  /**
   * Add text
   */
  addText: string;
  /**
   * On row click
   */
  onRowClick: (record: any) => void;
  /**
   * On add
   */
  onAdd: () => void;
  /**
   * On delete
   */
  onDelete: (ids: number[]) => void;
  /**
   * Filters
   */
  filters?: JSX.Element;
};

/**
 * <Tables /> props
 */
const useTablesProps = ({ onDelete }: TablesProps) => {
  const [selectedRowIds, setSelectedRowIds] = useState<Key[]>([]);

  const deleteSelectRowIds = () => {
    onDelete(selectedRowIds as number[]);
  };

  return {
    selectedRowIds,
    setSelectedRowIds,
    deleteSelectRowIds
  };
};

export { useTablesProps };
