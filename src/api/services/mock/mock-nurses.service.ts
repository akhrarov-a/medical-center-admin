import { CreateUpdateNurseDto } from '../../models/nurses.model.ts';

/**
 * Mock nurses from session
 */
const mockNursesFromSession = sessionStorage.getItem('mockNurses')
  ? JSON.parse(sessionStorage.getItem('mockNurses') as string)
  : null;

/**
 * Mock nurses
 */
let mockNurses = mockNursesFromSession || [
  {
    id: 1,
    firstName: 'Юлия',
    lastName: 'Иванова',
    surname: 'Ивановна',
    department: 1
  },
  {
    id: 2,
    firstName: 'Ангелина',
    lastName: 'Дмитриева',
    surname: 'Ивановна',
    department: 1
  },
  {
    id: 3,
    firstName: 'Юлия',
    lastName: 'Дмитриева',
    surname: 'Ивановна',
    department: 1
  },
  {
    id: 4,
    firstName: 'Анна',
    lastName: 'Андреева',
    surname: 'Ивановна',
    department: 2
  },
  {
    id: 5,
    firstName: 'Александра',
    lastName: 'Жукова',
    surname: 'Ивановна',
    department: 2
  },
  {
    id: 6,
    firstName: 'Лилия',
    lastName: 'Смирнова',
    surname: 'Ивановна',
    department: 2
  }
];

/**
 * Mock nurses service
 */
class MockNursesService {
  /**
   * Get all nurses
   */
  static getAllNurses = () => mockNurses;

  /**
   * Get nurse by id
   */
  static getNurseById = (id: number) =>
    mockNurses.find((nurse: { id: number }) => nurse.id === id);

  /**
   * Create nurse
   */
  static createNurse = (nurseDto: CreateUpdateNurseDto) => {
    const newNurse = {
      id: mockNurses.length + 1,
      ...nurseDto
    };

    mockNurses.push(newNurse);

    sessionStorage.setItem('mockNurses', JSON.stringify(mockNurses));

    return { id: newNurse.id };
  };

  /**
   * Update nurse
   */
  static updateNurse = (id: number, doctorDto: CreateUpdateNurseDto) => {
    const existingNurse = mockNurses.find(
      (nurse: { id: number }) => nurse.id === id
    );

    if (!existingNurse) return false;

    mockNurses = mockNurses.map((nurse: { id: number; department: number }) =>
      nurse.id === id ? { ...nurse, ...doctorDto } : nurse
    );

    sessionStorage.setItem('mockNurses', JSON.stringify(mockNurses));

    return true;
  };

  /**
   * Delete nurses by ids
   */
  static deleteNursesByIds = (ids: number[]) => {
    mockNurses = mockNurses.filter(
      (doctor: { id: number }) => !ids.includes(doctor.id)
    );

    sessionStorage.setItem('mockNurses', JSON.stringify(mockNurses));
  };
}

export { MockNursesService };
