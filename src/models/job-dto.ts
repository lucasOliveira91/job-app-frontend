import { TaskDTO } from './task-dto';
export interface JobDTO {
    id: number;
    name: string;
    parentJob: JobDTO;
    tasks: TaskDTO[];
    active: boolean;
}