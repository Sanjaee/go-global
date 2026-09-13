import { create } from 'zustand'

export interface Program {
  id: number;
  name: string;
  field: string;
  onlineDate: string;
  offlineDate: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ProgramStore {
  programs: Program[];
  activeProgram: Program | null;
  setPrograms: (programs: Program[]) => void;
  setActiveProgram: (program: Program | null) => void;
}

export const useProgramStore = create<ProgramStore>((set) => ({
  programs: [],
  activeProgram: null,
  setPrograms: (programs) => set({ programs }),
  setActiveProgram: (program) => set({ activeProgram: program }),
}))
