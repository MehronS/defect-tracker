export interface Project {
  name: string;
  id: number;
}

export interface Defect {
  id: number;
  name: string;
  type: string;
  severity: string;
  userId: number;
  projectId: number;
  createdBy?: number;
}
