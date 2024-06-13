/**
 * User contract
 */
type UserContract = {
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

export type { UserContract };
