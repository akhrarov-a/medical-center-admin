import { CreateUpdateDepartmentDto, DepartmentContract } from '@api';
import { HttpService } from './http.service';
import { MockDepartmentsService } from './mock';

/**
 * Departments service
 */
class DepartmentsService {
  public constructor(private http: HttpService) {}

  /**
   * Get all departments
   */
  public getAllDepartments = () =>
    new Promise<{ data: DepartmentContract[] }>(resolve => {
      setTimeout(() => {
        resolve({ data: MockDepartmentsService.getAllDepartments() });
      }, 1000);
    });

  /**
   * Get department by id
   */
  public getDepartmentById = (id: number | string) =>
    new Promise<{ data: DepartmentContract }>((resolve, reject) => {
      setTimeout(() => {
        const department = MockDepartmentsService.getDepartmentById(+id);

        if (department) {
          resolve({ data: department });

          return;
        }

        reject('Not found department with id: ' + id);
      }, 1000);
    });

  /**
   * Create department
   */
  public createDepartment = (data: CreateUpdateDepartmentDto) =>
    new Promise<{ data: DepartmentContract }>(resolve => {
      setTimeout(() => {
        resolve({ data: MockDepartmentsService.createDepartment(data) });
      }, 1000);
    });

  /**
   * Update department
   */
  public updateDepartment = (id: number, data: CreateUpdateDepartmentDto) =>
    new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const result = MockDepartmentsService.updateDepartment(id, data);

        if (result) {
          resolve();

          return;
        }

        reject('Not found department with id: ' + id);
      }, 1000);
    });

  /**
   * Delete departments
   */
  public deleteDepartments = (ids: number[]) =>
    new Promise<void>(resolve => {
      setTimeout(() => {
        MockDepartmentsService.deleteDepartmentsByIds(ids);

        resolve();
      }, 1000);
    });
}

export { DepartmentsService };
