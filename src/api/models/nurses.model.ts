import { DepartmentContract } from './departments.model';

/**
 * Nurses table filters
 */
type NursesTableFilters = {
  /**
   * Id
   */
  id?: string;
  /**
   * Search
   */
  search?: string;
  /**
   * Department
   */
  department?: number;
};

/**
 * Create update nurse dto
 */
type CreateUpdateNurseDto = {
  /**
   * First name
   */
  firstName: string;
  /**
   * Last name
   */
  lastName: string;
  /**
   * Surname
   */
  surname: string;
  /**
   * Department
   */
  department: number;
};

/**
 * Nurse contract
 */
type NurseContract = Omit<CreateUpdateNurseDto, 'department'> & {
  /**
   * Id
   */
  id: number;
  /**
   * Department
   */
  department: DepartmentContract;
};

export type { CreateUpdateNurseDto, NurseContract, NursesTableFilters };
