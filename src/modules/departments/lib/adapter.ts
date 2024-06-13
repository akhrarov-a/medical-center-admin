import { CreateUpdateDepartmentDto, DepartmentContract } from '@api';
import { DepartmentForm } from '../departments.types';

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

  static departmentsToOptionsList(departments: DepartmentContract[]) {
    return departments.map(department => ({
      label: department.name,
      value: department.id
    }));
  }
}

export { DepartmentsAdapter };
