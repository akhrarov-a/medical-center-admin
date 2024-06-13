/// <reference types="vite/client" />

import { DoctorContract } from '@api';

global {
  interface Window {
    mockDoctors: DoctorContract[];
  }
}
