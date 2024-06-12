/**
 * Create update doctor dto
 */
type CreateUpdateDoctorDto = {
  /**
   * First name
   */
  fistName: string;
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
type DoctorContract = CreateUpdateDoctorDto & {
  /**
   * Id
   */
  id: number;
};

export type { CreateUpdateDoctorDto, DoctorContract };
