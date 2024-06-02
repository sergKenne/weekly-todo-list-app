
export type TaskType = {
  id: number;
  isDone: boolean;
  name: string
}

export type TodoType = {
    id: string ;
    day: string;
    bgColor: string;
    tasks: TaskType[];
};