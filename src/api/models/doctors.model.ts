import { DepartmentContract } from './departments.model.ts';

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

export type { CreateUpdateDoctorDto, DoctorContract };
