import { HttpService } from './http.service';
import { MockDepartmentsService } from './mock';
import { CreateUpdateNurseDto, NurseContract } from '../models/nurses.model.ts';
import { MockNursesService } from './mock/mock-nurses.service.ts';

/**
 * Nurses service
 */
class NursesService {
  public constructor(private http: HttpService) {}

  /**
   * Get all nurses
   */
  public getAllNurses = () =>
    new Promise<{ data: NurseContract[] }>(resolve => {
      setTimeout(() => {
        const nurses = MockNursesService.getAllNurses();

        resolve({
          data: nurses.map((nurse: { department: number }) => ({
            ...nurse,
            department: MockDepartmentsService.getDepartmentById(
              nurse.department
            )
          }))
        });
      }, 1000);
    });

  /**
   * Get nurse by id
   */
  public getNurseById = (id: number | string) =>
    new Promise<{ data: NurseContract }>((resolve, reject) => {
      setTimeout(() => {
        const nurse = MockNursesService.getNurseById(+id);

        if (nurse) {
          resolve({
            data: {
              ...nurse,
              department: MockDepartmentsService.getDepartmentById(
                nurse.department
              )
            }
          });

          return;
        }

        reject('Медсестра с ид: ' + id + ' не найдено');
      }, 1000);
    });

  /**
   * Create nurse
   */
  public createNurse = (data: CreateUpdateNurseDto) =>
    new Promise<{ data: { id: number } }>(resolve => {
      setTimeout(() => {
        resolve({ data: MockNursesService.createNurse(data) });
      }, 1000);
    });

  /**
   * Update nurse
   */
  public updateNurse = (id: number, data: CreateUpdateNurseDto) =>
    new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const result = MockNursesService.updateNurse(id, data);

        if (result) {
          resolve();

          return;
        }

        reject('Медсестра с ид: ' + id + ' не найдено');
      }, 1000);
    });

  /**
   * Delete nurses
   */
  public deleteNurses = (ids: number[]) =>
    new Promise<void>(resolve => {
      setTimeout(() => {
        MockNursesService.deleteNursesByIds(ids);

        resolve();
      }, 1000);
    });
}

export { NursesService };
