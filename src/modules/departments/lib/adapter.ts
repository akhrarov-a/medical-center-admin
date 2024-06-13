import { DepartmentForm } from '../departments.types';
import { CreateUpdateDepartmentDto, DepartmentContract } from '@api';

/**
 * Departments adapter
 */
class DepartmentsAdapter {
  static departmentContractToDepartmentForm(
    department: DepartmentContract
  ): DepartmentForm {
    return department;
  }

  static departmentFormToDepartmentDto(
    department: DepartmentForm
  ): CreateUpdateDepartmentDto {
    return department;
  }
}

export { DepartmentsAdapter };
