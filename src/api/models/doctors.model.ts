import { DepartmentContract } from './departments.model';

/**
 * Doctors table filters
 */
type DoctorsTableFilters = {
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
 * Create update doctor dto
 */
type CreateUpdateDoctorDto = {
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
  /**
   * Is head of department
   */
  isHeadOfDepartment: boolean;
};

/**
 * Doctor contract
 */
type DoctorContract = Omit<CreateUpdateDoctorDto, 'department'> & {
  /**
   * Id
   */
  id: number;
  /**
   * Department
   */
  department: DepartmentContract;
};

export type { CreateUpdateDoctorDto, DoctorContract, DoctorsTableFilters };
