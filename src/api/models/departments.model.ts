/**
 * Departments table filters
 */
type DepartmentsTableFilters = {
  /**
   * Id
   */
  id?: string;
  /**
   * Name
   */
  name?: string;
};

/**
 * Create update department dto
 */
type CreateUpdateDepartmentDto = {
  /**
   * Name
   */
  name: string;
};

/**
 * Department contract
 */
type DepartmentContract = CreateUpdateDepartmentDto & {
  /**
   * Id
   */
  id: number;
};

export type {
  CreateUpdateDepartmentDto,
  DepartmentContract,
  DepartmentsTableFilters
};
