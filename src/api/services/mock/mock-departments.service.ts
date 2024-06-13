import { CreateUpdateDepartmentDto, DepartmentContract } from '@api';

/**
 * Mock departments from session
 */
const mockDepartmentsFromSession = sessionStorage.getItem('mockDepartments')
  ? JSON.parse(sessionStorage.getItem('mockDepartments') as string)
  : null;

/**
 * Mock departments
 */
let mockDepartments: DepartmentContract[] = mockDepartmentsFromSession || [
  {
    id: 1,
    name: 'Кардиологическое'
  },
  {
    id: 2,
    name: 'Хирургическое'
  }
];

/**
 * Mock departments service
 */
class MockDepartmentsService {
  /**
   * Get all departments
   */
  static getAllDepartments = () => mockDepartments;

  /**
   * Get department by id
   */
  static getDepartmentById = (id: number) =>
    mockDepartments.find(department => department.id === id);

  /**
   * Create department
   */
  static createDepartment = (departmentDto: CreateUpdateDepartmentDto) => {
    const newDepartment = {
      id: mockDepartments[mockDepartments.length - 1].id + 1,
      ...departmentDto
    };

    mockDepartments.push(newDepartment);

    sessionStorage.setItem('mockDepartments', JSON.stringify(mockDepartments));

    return newDepartment;
  };

  /**
   * Update department
   */
  static updateDepartment = (
    id: number,
    departmentDto: CreateUpdateDepartmentDto
  ) => {
    if (!mockDepartments.find(department => department.id === id)) return false;

    mockDepartments = mockDepartments.map(department =>
      department.id === id ? { ...department, ...departmentDto } : department
    );

    sessionStorage.setItem('mockDepartments', JSON.stringify(mockDepartments));

    return true;
  };

  /**
   * Delete departments by ids
   */
  static deleteDepartmentsByIds = (ids: number[]) => {
    mockDepartments = mockDepartments.filter(
      department => !ids.includes(department.id)
    );

    sessionStorage.setItem('mockDepartments', JSON.stringify(mockDepartments));
  };
}

export { MockDepartmentsService };
