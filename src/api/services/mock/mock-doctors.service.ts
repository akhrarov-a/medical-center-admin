import { CreateUpdateDoctorDto, DoctorContract } from '@api';

/**
 * Mock doctors from session
 */
const mockDoctorsFromSession = sessionStorage.getItem('mockDoctors')
  ? JSON.parse(sessionStorage.getItem('mockDoctors') as string)
  : null;

/**
 * Mock doctors
 */
let mockDoctors: DoctorContract[] = mockDoctorsFromSession || [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    surname: 'Smith',
    department: 1,
    isHeadOfDepartment: true
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    surname: 'Smith',
    department: 1,
    isHeadOfDepartment: false
  },
  {
    id: 3,
    firstName: 'Jack',
    lastName: 'Doe',
    surname: 'Smith',
    department: 1,
    isHeadOfDepartment: false
  },
  {
    id: 4,
    firstName: 'Jill',
    lastName: 'Doe',
    surname: 'Smith',
    department: 2,
    isHeadOfDepartment: true
  },
  {
    id: 5,
    firstName: 'James',
    lastName: 'Doe',
    surname: 'Smith',
    department: 2,
    isHeadOfDepartment: false
  },
  {
    id: 6,
    firstName: 'Jenny',
    lastName: 'Doe',
    surname: 'Smith',
    department: 2,
    isHeadOfDepartment: false
  }
];

/**
 * Mock doctors service
 */
class MockDoctorsService {
  /**
   * Get all doctors
   */
  static getAllDoctors = () => mockDoctors;

  /**
   * Get doctor by id
   */
  static getDoctorById = (id: number) =>
    mockDoctors.find(doctor => doctor.id === id);

  /**
   * Create doctor
   */
  static createDoctor = (doctorDto: CreateUpdateDoctorDto) => {
    const newDoctor = {
      id: mockDoctors.length + 1,
      ...doctorDto
    };

    mockDoctors.push(newDoctor);

    sessionStorage.setItem('mockDoctors', JSON.stringify(mockDoctors));

    return newDoctor;
  };

  /**
   * Update doctor
   */
  static updateDoctor = (id: number, departmentDto: CreateUpdateDoctorDto) => {
    if (!mockDoctors.find(doctor => doctor.id === id)) return false;

    mockDoctors = mockDoctors.map(doctor =>
      doctor.id === id ? { ...doctor, ...departmentDto } : doctor
    );

    sessionStorage.setItem('mockDoctors', JSON.stringify(mockDoctors));

    return true;
  };

  /**
   * Delete doctors by ids
   */
  static deleteDoctorsByIds = (ids: number[]) => {
    mockDoctors = mockDoctors.filter(doctor => !ids.includes(doctor.id));

    sessionStorage.setItem('mockDoctors', JSON.stringify(mockDoctors));

    return mockDoctors;
  };
}

export { MockDoctorsService };
