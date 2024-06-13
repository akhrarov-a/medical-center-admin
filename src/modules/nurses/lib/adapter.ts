import { CreateUpdateNurseDto, NurseContract } from '@api';
import { NurseForm } from '../nurses.types.ts';

/**
 * Nurses adapter
 */
class NursesAdapter {
  static nurseContractToNurseForm(nurse: NurseContract): NurseForm {
    return { ...nurse, department: nurse.department.id };
  }

  static nurseFormToNurseDto(nurse: NurseForm): CreateUpdateNurseDto {
    return nurse;
  }
}

export { NursesAdapter };
